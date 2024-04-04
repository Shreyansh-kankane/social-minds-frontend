import { useEffect } from 'react';

const DatadogScript = () => {
  useEffect(() => {
    (function(h,o,u,n,d) {
      h=h[d]=h[d]||{q:[],onReady:function(c){h.q.push(c)}};
      d=o.createElement(u);d.async=1;d.src=n;
      n=o.getElementsByTagName(u)[0];n.parentNode.insertBefore(d,n);
    })(window,document,'script','https://www.datadoghq-browser-agent.com/us5/v5/datadog-rum.js','DD_RUM');
    
    window.DD_RUM.onReady(function() {
      // Initialize Datadog RUM
      var userId = localStorage.getItem('userId');
      if (!userId) {
        userId = generateUniqueUserId(); // Replace with your method of generating a user ID
        localStorage.setItem('userId', userId);
      }

      window.DD_RUM.init({
        applicationId: 'c61ce4bb-bb8c-4eeb-b09b-8e59b9b7b296',
        clientToken: 'pub14e586f0c5bc796444555c011d921f76',
        site: 'us5.datadoghq.com',
        service: 'kkc-builders',
        env: '<ENV_NAME>',
        sessionSampleRate: 100,
        sessionReplaySampleRate: 80,
        trackUserInteractions: true,
        trackResources: true,
        trackLongTasks: true,
        defaultPrivacyLevel: 'allow',
      });
      
      // Set user ID
      window.DD_RUM.setUser({
        id: userId // Replace '1234' with your user's unique identifier
      });

      function generateUniqueUserId() {
        // Implement a method to generate a unique user ID
        return 'user_' + Math.random().toString(36).substr(2, 9);
      }
    });
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts
  
  return null; // This component doesn't render anything
};

export default DatadogScript;
