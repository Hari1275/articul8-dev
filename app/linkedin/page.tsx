const LinkedInFeed = () => {
    const flocklerEmbed = `
      <script src="https://static.elfsight.com/platform/platform.js" async></script>
<div class="elfsight-app-c7b04981-ad60-4649-b003-e9c0bb31d72d" data-elfsight-app-lazy></div>
    `;
    return (
      <div dangerouslySetInnerHTML={{ __html: flocklerEmbed }} />
    );
return <h1>LinkedIn Feed</h1>
  };
  
  export default LinkedInFeed;
  