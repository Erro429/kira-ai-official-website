"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

interface ClientPageAdapterProps {
    Component: React.ComponentType<any>;
}

export function ClientPageAdapter({ Component }: ClientPageAdapterProps) {
    const router = useRouter();

    return (
        <Component
            onBack={() => router.back()}
            // In a real implementation this would trigger a signup modal or navigation
            onCtaClick={() => {
                // By default, assuming CTA goes to a signup flow or a specific hash
                window.location.href = '/#claim';
            }}
        />
    );
}
