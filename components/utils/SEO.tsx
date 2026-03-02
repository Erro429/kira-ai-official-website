import React, { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    schema?: Record<string, any>;
}

export const SEO: React.FC<SEOProps> = ({ title, description, schema }) => {
    useEffect(() => {
        // Update Title
        document.title = title;

        // Update Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description);

        // Dynamic Canonical URL
        let canonicalUrl = window.location.href.split('?')[0]; // strip queries
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', canonicalUrl);

        // Update Open Graph Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', title);

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) ogDescription.setAttribute('content', description);

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

        // Update Twitter Tags
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitle) twitterTitle.setAttribute('content', title);

        const twitterDesc = document.querySelector('meta[name="twitter:description"]');
        if (twitterDesc) twitterDesc.setAttribute('content', description);

        // Inject JSON-LD Schema
        if (schema) {
            let script = document.querySelector('script[type="application/ld+json"][data-seo="true"]');
            if (!script) {
                script = document.createElement('script');
                script.setAttribute('type', 'application/ld+json');
                script.setAttribute('data-seo', 'true');
                document.head.appendChild(script);
            }
            script.textContent = JSON.stringify(schema);
        }

        return () => {
            // Cleanup schema on unmount if needed, though often we want it to persist until the next page overwrites it.
            // For a SPA, we might want to remove strict page-specific schema when navigating away, 
            // but usually the next page's SEO component will overwrite it.
            // If we want to be strict:
            // const script = document.querySelector('script[type="application/ld+json"][data-seo="true"]');
            // if (script) script.remove();
        };
    }, [title, description, schema]);

    return null;
};
