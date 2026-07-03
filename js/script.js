 (function () {
            // Preloader
            const preloader = document.getElementById('preloader');
            const hidePreloader = () => {
                if (!preloader) return;
                document.body.classList.remove('preloader-active');
                preloader.classList.add('hide-preloader');
                setTimeout(() => {
                    if (preloader) preloader.style.display = 'none';
                }, 700);
            };
            window.addEventListener('load', () => setTimeout(hidePreloader, 900));
            setTimeout(() => {
                if (preloader && !preloader.classList.contains('hide-preloader')) hidePreloader();
            }, 5000);

            // Navbar scroll + back to top
            const navbar = document.querySelector('.navbar');
            const backBtn = document.getElementById('backToTopBtn');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 30) navbar.classList.add('scrolled');
                else navbar.classList.remove('scrolled');
                if (backBtn) window.scrollY > 400 ? backBtn.classList.add('show') : backBtn.classList.remove('show');
            });
            if (backBtn) backBtn.addEventListener('click', (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });

            // Mobile menu
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.navbar ul');
            const navLinks = document.querySelectorAll('.navbar ul li a');
            if (hamburger) {
                hamburger.addEventListener('click', (e) => {
                    e.stopPropagation();
                    navMenu.classList.toggle('active');
                    hamburger.classList.toggle('open');
                });
                navLinks.forEach(link => link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('open');
                }));
                document.addEventListener('click', (e) => {
                    if (navMenu && navMenu.classList.contains('active') && !e.target.closest('.navbar')) {
                        navMenu.classList.remove('active');
                        hamburger.classList.remove('open');
                    }
                });
            }

            // Download CV button
            const downloadBtn = document.getElementById('downloadCvBtn');
            if (downloadBtn) {
                downloadBtn.addEventListener('click', (e) => {
                    e.preventDefault();

                    // Path to your CV file (change if needed)
                    const cvFile = "files/CASMIR OKEKE.pdf";

                    // Create a hidden link and trigger download
                    const link = document.createElement('a');
                    link.href = cvFile;
                    link.download = "Casmir_Okeke_CV.pdf";  // filename that will appear
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);

                    // Optional: show a friendly message (but after download starts)
                    alert("Thank you for downloading my CV! If you have any questions or would like to discuss potential opportunities, please feel free to reach out to me via email or WhatsApp. I look forward to connecting with you!");
                });
            }

            // Active section highlight
            const sections = document.querySelectorAll('section[id], .main[id]');
            window.addEventListener('scroll', () => {
                let current = '';
                const scrollPos = window.scrollY + 150;
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) current = section.getAttribute('id');
                });
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    const href = link.getAttribute('href').replace('#', '');
                    if (href === current && current !== '') link.classList.add('active');
                    else if (current === '' && href === 'home') link.classList.add('active');
                });
            });


            // Custom cursor (optional)
            const cursor = document.querySelector('.cursor');
            const follower = document.querySelector('.cursor-follower');
            if (cursor && follower) {
                document.addEventListener('mousemove', (e) => {
                    cursor.style.left = e.clientX + 'px';
                    cursor.style.top = e.clientY + 'px';
                    follower.style.left = e.clientX + 'px';
                    follower.style.top = e.clientY + 'px';
                });
            }

            // LIGHT/DARK MODE TOGGLE
            const toggleBtn = document.getElementById('darkModeToggle');
            const setTheme = (isDark) => {
                if (isDark) {
                    document.body.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                    if (toggleBtn) toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
                } else {
                    document.body.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                    if (toggleBtn) toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
                }
            };
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') setTheme(true);
            else if (savedTheme === 'light') setTheme(false);
            else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme(true);
            else setTheme(false);

            if (toggleBtn) {
                toggleBtn.addEventListener('click', () => {
                    const isDark = document.body.classList.contains('dark');
                    setTheme(!isDark);
                });
            }

            // Modal functionality for individual project modals
            document.querySelectorAll('.case-study-btn').forEach(button => {
                button.addEventListener('click', () => {
                    const projectId = button.dataset.project;
                    const modal = document.getElementById(`modal-${projectId}`);
                    if (modal) modal.classList.add('show');
                });
            });

            // Close modals when close button is clicked
            document.querySelectorAll('.close-btn').forEach(closeBtn => {
                closeBtn.addEventListener('click', () => {
                    const modal = closeBtn.closest('.modal');
                    if (modal) modal.classList.remove('show');
                });
            });

            // Close modals when clicking on the overlay
            document.querySelectorAll('.modal').forEach(modal => {
                modal.addEventListener('click', (event) => {
                    if (event.target === modal) {
                        modal.classList.remove('show');
                    }
                });
            });

            // Close modals with Escape key
            window.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    document.querySelectorAll('.modal.show').forEach(modal => {
                        modal.classList.remove('show');
                    });
                }
            });

            AOS.init({ duration: 900, once: true, offset: 80 });
        })();