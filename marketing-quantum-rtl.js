/**
 * MarketingQuantumRTL - Marketing Psychology page specific RTL implementation
 * Extends QuantumRTLObserver for marketing content optimization
 * Target: Native Hebrew speakers (Nivaro brand)
 */

class MarketingQuantumRTL {
  constructor() {
    this.initialize();
  }

  initialize() {
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', () => {
      this.applyMarketingRTL();
      this.setupMarketingObservers();
    });
  }

  applyMarketingRTL() {
    // Apply RTL optimizations specific to marketing psychology content
    this.applyArticleContentRTL();
    this.applyAuthorSectionRTL();
    this.applyShareButtonsRTL();
    this.applyTableOfContentsRTL();
    this.applyCommentSectionRTL();
  }

  applyArticleContentRTL() {
    // Process main article content
    const article = document.querySelector('article.prose');
    if (article) {
      article.classList.add('quantum-rtl-zone');
      
      // Process headings
      article.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
        heading.style.textAlign = 'right';
        heading.style.marginRight = '0';
        heading.style.marginLeft = 'auto';
      });
      
      // Process paragraphs
      article.querySelectorAll('p').forEach(paragraph => {
        paragraph.style.textAlign = 'right';
      });
      
      // Process lists
      article.querySelectorAll('ul, ol').forEach(list => {
        list.style.paddingRight = '1.5em';
        list.style.paddingLeft = '0';
        
        list.querySelectorAll('li').forEach(item => {
          item.style.textAlign = 'right';
        });
      });
      
      // Process images
      article.querySelectorAll('img').forEach(img => {
        img.style.float = 'right';
        img.style.marginRight = '0';
        img.style.marginLeft = '1em';
      });
    }
  }

  applyAuthorSectionRTL() {
    // RTL optimization for author information section
    const authorSections = document.querySelectorAll('.author-info, .by-author');
    authorSections.forEach(section => {
      section.classList.add('quantum-rtl-zone');
      section.style.direction = 'rtl';
      section.style.textAlign = 'right';
    });
  }

  applyShareButtonsRTL() {
    // RTL optimization for social share buttons
    const shareSections = document.querySelectorAll('.share-buttons, .social-share');
    shareSections.forEach(section => {
      section.classList.add('quantum-rtl-zone');
      section.style.direction = 'rtl';
      
      // Reverse button order for RTL
      const buttons = Array.from(section.children);
      buttons.reverse().forEach(button => {
        section.appendChild(button);
      });
    });
  }

  applyTableOfContentsRTL() {
    // RTL optimization for table of contents
    const toc = document.querySelector('.table-of-contents, .toc, .blog-sidebar');
    if (toc) {
      toc.classList.add('quantum-rtl-zone');
      toc.style.direction = 'rtl';
      toc.style.textAlign = 'right';
      
      toc.querySelectorAll('a').forEach(link => {
        link.style.textAlign = 'right';
      });
    }
  }

  applyCommentSectionRTL() {
    // RTL optimization for comment section
    const commentSections = document.querySelectorAll('.comments, .comment-section');
    commentSections.forEach(section => {
      section.classList.add('quantum-rtl-zone');
      section.style.direction = 'rtl';
      section.style.textAlign = 'right';
      
      // RTL for comment form elements
      section.querySelectorAll('input, textarea').forEach(input => {
        input.style.direction = 'rtl';
        input.style.textAlign = 'right';
      });
    });
  }

  setupMarketingObservers() {
    // Set up observer for dynamic marketing content
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            this.processDynamicMarketingContent(node);
          }
        });
      });
    });
    
    // Observe body for dynamic content changes
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  processDynamicMarketingContent(node) {
    // Apply RTL to dynamically loaded marketing content
    if (node.matches('.prose, .article-content')) {
      this.applyArticleContentRTL();
    } else if (node.matches('.author-info, .by-author')) {
      this.applyAuthorSectionRTL();
    } else if (node.matches('.share-buttons, .social-share')) {
      this.applyShareButtonsRTL();
    }
  }

  optimizeForScreenSize() {
    // Additional responsive optimizations for marketing content
    const width = window.innerWidth;
    
    if (width < 768) {
      // Mobile-specific RTL optimizations
      document.querySelectorAll('.prose').forEach(article => {
        article.style.paddingRight = '5%';
        article.style.paddingLeft = '5%';
      });
    }
  }
}

// Initialize marketing-specific quantum RTL
document.addEventListener('DOMContentLoaded', () => {
  if (typeof window.marketingQuantumRTL === 'undefined') {
    window.marketingQuantumRTL = new MarketingQuantumRTL();
  }
});
