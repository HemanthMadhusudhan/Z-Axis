import { useEffect } from 'react';

const PageMeta = ({ title, description }) => {
    useEffect(() => {
        if (title) {
            document.title = title.includes('Z-Axis') ? title : `${title} | Z-Axis`;
        }
        if (description) {
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', description);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'description';
                meta.content = description;
                document.head.appendChild(meta);
            }
        }
    }, [title, description]);

    return null;
};

export default PageMeta;
