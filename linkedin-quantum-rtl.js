// Quantum-Level RTL for LinkedIn Strategies Page
// Purpose: Optimize LinkedIn-specific content for Hebrew RTL display
// Integration with core QuantumRTLObserver

class LinkedInQuantumRTL {
  constructor() {
    this.initializeLinkedInRTL();
  }

  initializeLinkedInRTL() {
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', () => {
      this.applyLinkedInRTL();
      this.setupLinkedInObservers();
    });
  }

  applyLinkedInRTL() {
    // Apply RTL to LinkedIn-specific content sections
    this.applyBlogContentRTL();
    this.applyAuthorSectionRTL();
    this.applyShareButtonsRTL();
    this.applyArticleContentRTL();
  }

  applyBlogContentRTL() {
    // Apply RTL to blog title and main content
    const blogTitle = document.querySelector('.blog-title-anim');
    if (blogTitle) {
      blogTitle.style.textAlign = 'right';
      blogTitle.style.marginRight = '0';
      blogTitle.style.marginLeft = 'auto';
    }
  }

  applyAuthorSectionRTL() {
    // Apply RTL to author information section
    const authorSection = document.querySelector('.left-section-blog');
    if (authorSection) {
      authorSection.style.textAlign = 'right';
    }
  }

  applyShareButtonsRTL() {
    // Apply RTL to social share buttons
    const shareButtons = document.querySelector('.left-section-blog .flex.items-center');
    if (shareButtons) {
      shareButtons.style.justifyContent = 'flex-start';
    }
  }

  applyArticleContentRTL() {
    // Apply RTL to article paragraphs and lists
    const articleContent = document.querySelector('article.prose');
    if (articleContent) {
      // Process paragraphs
      const paragraphs = articleContent.querySelectorAll('p');
      paragraphs.forEach(p => {
        p.style.textAlign = 'right';
        p.style.direction = 'rtl';
      });
      
      // Process lists
      const lists = articleContent.querySelectorAll('ul, ol');
      lists.forEach(list => {
        list.style.direction = 'rtl';
        list.style.paddingRight = '1.5em';
        list.style.paddingLeft = '0';
      });
    }
  }

  setupLinkedInObservers() {
    // Set up specific observers for LinkedIn content
    this.observeDynamicContent();
    this.setupResizeHandling();
  }

  observeDynamicContent() {
    // Observe for dynamically loaded LinkedIn content
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { // Element node
              this.applyRTLToNewContent(node);
            }
          });
        }
      });
    });

    // Start observing the article content
    const article = document.querySelector('article.prose');
    if (article) {
      observer.observe(article, {
        childList: true,
        subtree: true
      });
    }
  }

  applyRTLToNewContent(node) {
    // Apply RTL to newly added content nodes
    if (node.tagName === 'P' || node.tagName === 'DIV') {
      node.style.textAlign = 'right';
      node.style.direction = 'rtl';
    } else if (node.tagName === 'UL' || node.tagName === 'OL') {
      node.style.direction = 'rtl';
      node.style.paddingRight = '1.5em';
      node.style.paddingLeft = '0';
    }
  }

  setupResizeHandling() {
    // Handle responsive RTL adjustments on resize
    window.addEventListener('resize', () => {
      this.optimizeForScreenSize();
    });
    
    // Initial optimization
    this.optimizeForScreenSize();
  }

  optimizeForScreenSize() {
    // Optimize RTL layout based on screen size
    const viewportWidth = window.innerWidth;
    const leftSection = document.querySelector('.left-section-blog');
    
    if (viewportWidth < 768) {
      // Mobile optimization
      if (leftSection) {
        leftSection.classList.remove('sticky');
        leftSection.style.position = 'static';
      }
    } else {
      // Desktop optimization
      if (leftSection) {
        leftSection.classList.add('sticky');
        leftSection.style.position = 'sticky';
      }
    }
  }
}

// Initialize LinkedInQuantumRTL when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const linkedinQuantumRTL = new LinkedInQuantumRTL();
  window.linkedinQuantumRTL = linkedinQuantumRTL;
});
