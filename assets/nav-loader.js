(() => {
  const pages = [
    {href: 'index.html', title: 'Home'},
    {href: 'calculation details.html', title: 'Calculation Details'},
    {href: 'calculator result.html', title: 'Calculator Result'},
    {href: 'certification.html', title: 'Certification'},
    {href: 'checkout.html', title: 'Checkout'},
    {href: 'community forum.html', title: 'Community Forum'},
    {href: 'compare sections.html', title: 'Compare Sections'},
    {href: 'design standard.html', title: 'Design Standard'},
    {href: 'discussion.html', title: 'Discussion'},
    {href: 'engineering careers.html', title: 'Careers'},
    {href: 'fillet weld.html', title: 'Fillet Weld'},
    {href: 'history.html', title: 'History'},
    {href: 'job board.html', title: 'Job Board'},
    {href: 'job details.html', title: 'Job Details'},
    {href: 'license verifacation.html', title: 'License Verification'},
    {href: 'notification $ activity.html', title: 'Notifications'},
    {href: 'offline management.html', title: 'Offline Management'},
    {href: 'prmium plans.html', title: 'Premium Plans'},
    {href: 'profession verificatio.html', title: 'Profession Verification'},
    {href: 'profile.html', title: 'Profile'},
    {href: 'project drawing.html', title: 'Project Drawing'},
    {href: 'project drawings.html', title: 'Project Drawings'},
    {href: 'project report.html', title: 'Project Report'},
    {href: 'recent activity.html', title: 'Recent Activity'},
    {href: 'section comparison.html', title: 'Section Comparison'},
    {href: 'structure tool.html', title: 'Structure Tool'},
    {href: 'sub.html', title: 'Subscription Mini'},
    {href: 'submit feedback.html', title: 'Submit Feedback'},
    {href: 'subscription.html', title: 'Subscription'},
    {href: 'summary.html', title: 'Summary'},
    {href: 'weld design result.html', title: 'Weld Design Result'},
    {href: 'weld strenth calculator.html', title: 'Weld Strength Calculator'},
    {href: 'weld symbol.html', title: 'Weld Symbol'},
    {href: 'welded connections.html', title: 'Welded Connections'}
  ];

  function ensureCSS() {
    const href = 'assets/site.css';
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  }

  function buildNav() {
    if (document.getElementById('site-nav')) return;
    const nav = document.createElement('nav');
    nav.id = 'site-nav';
    nav.className = 'site-nav';
    const container = document.createElement('div');
    container.className = 'site-container';

    const brand = document.createElement('div');
    brand.className = 'brand';
    brand.textContent = 'Architect';

    const links = document.createElement('div');
    links.className = 'links';
    pages.forEach(p => {
      const a = document.createElement('a');
      a.href = p.href;
      a.textContent = p.title;
      links.appendChild(a);
    });

    container.appendChild(brand);
    container.appendChild(links);
    nav.appendChild(container);
    document.body.insertBefore(nav, document.body.firstChild);
  }

  function buildFooter() {
    if (document.getElementById('site-footer')) return;
    const footer = document.createElement('footer');
    footer.id = 'site-footer';
    footer.className = 'site-footer';
    const container = document.createElement('div');
    container.className = 'site-container';

    const links = document.createElement('div');
    links.className = 'links';
    pages.slice(0,8).forEach(p => {
      const a = document.createElement('a');
      a.href = p.href;
      a.textContent = p.title;
      links.appendChild(a);
    });

    const copy = document.createElement('div');
    copy.textContent = '© ' + new Date().getFullYear() + ' Architect — All rights reserved.';

    container.appendChild(links);
    container.appendChild(copy);
    footer.appendChild(container);
    document.body.appendChild(footer);
  }

  function init() {
    ensureCSS();
    buildNav();
    buildFooter();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
