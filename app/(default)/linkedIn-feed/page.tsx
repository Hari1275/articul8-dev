
import '../../../styles/globals.css';
const LinkedInFeed = () => {
    const flocklerEmbed = `
      <script src="https://static.elfsight.com/platform/platform.js" async></script>
<div class="elfsight-app-c7b04981-ad60-4649-b003-e9c0bb31d72d" data-elfsight-app-lazy></div>
    `;
    return (
      <div className='py-12 px-4 bg-white lg:py-20 lg:px-6' dangerouslySetInnerHTML={{ __html: flocklerEmbed }} />
    );

  };
  
  export default LinkedInFeed;
  