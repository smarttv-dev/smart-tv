import type { ReactNode } from 'react';
import React from 'react';
import { Sidebar } from '../../components';

export default function DocsLayout({ children }: { children: ReactNode }): React.ReactElement {
    return (
        <div className="min-h-screen flex flex-col">

            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-8" style={{
                    // limit main area to viewport minus topnav height so it scrolls internally
                    overflow: 'auto'
                }}>
                    <div className="content-panel rounded-lg shadow-sm p-6 min-h-[60vh]">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
