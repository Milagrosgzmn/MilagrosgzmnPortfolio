"use client"

import { themeScript } from './themeToggle';

/**
 * Inyecta el script anti-parpadeo de tema. En el servidor es un <script> normal
 * (se ejecuta antes del primer pintado); en el cliente se renderiza inerte para
 * que React 19 no avise de "script tag while rendering", ya que el HTML del
 * servidor ya lo ejecutó.
 */
export default function ThemeScript() {
    return (
        <script
            suppressHydrationWarning
            type={typeof window === 'undefined' ? undefined : 'application/json'}
            dangerouslySetInnerHTML={{ __html: themeScript }}
        />
    );
}
