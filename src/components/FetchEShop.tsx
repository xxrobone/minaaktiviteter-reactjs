import React, { useEffect, useState } from 'react';

interface EshopLinkProps {
  url?: string;
}

interface ContentData {
  htmlBlock: string;
  cssFiles: Array<{ url: string }>;
  javascriptFilesAfter: Array<{ url: string }>;
}

const FetchEShop: React.FC<EshopLinkProps> = ({
  url = 'https://minaaktiviteter.se/api/content/json/?eventGroup1=HYPE&contenttype=shop&org=fryshuset-dans',
}) => {
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(url);
        const data: ContentData = await response.json();
        setContent(data);
        setLoading(false);
        console.log(data)

        // Insert CSS files
        data.cssFiles.forEach((file) => {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = file.url;
          document.head.appendChild(link);
        });

        // Insert JavaScript files
        data.javascriptFilesAfter.forEach((file) => {
          const script = document.createElement('script');
          script.src = file.url;
          script.async = true;
          document.body.appendChild(script);
        });
      } catch (error) {
        console.error('Error fetching the content:', error);
        setLoading(false);
      }
    };

    fetchContent();
  }, [url]);

  return (
    <div>
      <h1>Shop</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        content && (
          <div dangerouslySetInnerHTML={{ __html: content.htmlBlock }} />
        )
      )}
    </div>
  );
};

export default FetchEShop;

/* 

Alla aktiviteter
https://minaaktiviteter.se/api/content/json/?contenttype=shop&org=esportsacademy

Termins länk
https://minaaktiviteter.se/esportsacademy/shop/?eventGroup1=termin
*/
