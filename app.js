(function () {
  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  const ICON_PLAY =
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
  const ICON_DOWNLOAD =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M5 21h14"/></svg>';
  const ICON_EMAIL =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>';
  const ICON_SEND =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 3L3 10.5l7 2.5m11-10l-7.5 17-3.5-7.5m11-9.5L10.5 13"/></svg>';
  const ICON_LINKEDIN =
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9z"/></svg>';
  const ICON_CALENDAR =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9.5h18M8 3v3M16 3v3"/></svg>';
  const ICON_FILE =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>';
  const ICON_BACK =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>';
  const ICON_BADGE =
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.6 1.9 3.2-.3 1 3 2.8 1.7-1 3 1 3-2.8 1.7-1 3-3.2-.3L12 22l-2.6-1.9-3.2.3-1-3-2.8-1.7 1-3-1-3 2.8-1.7 1-3 3.2.3z"/><path d="M9 12.5l2 2 4-4.5" stroke="#0d1c3a" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function initials(name) {
    return (name || "")
      .replace(/^Dr\.?\s*/i, "")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  }

  function circlePhoto(container, photoUrl, fallbackText) {
    const img = el("img");
    const fb = el("span", "avatar__fallback", fallbackText);
    container.appendChild(img);
    container.appendChild(fb);
    if (photoUrl) {
      img.src = photoUrl;
      img.alt = "";
      img.onload = function () { fb.style.display = "none"; };
      img.onerror = function () { img.style.display = "none"; };
    } else {
      img.style.display = "none";
    }
  }

  // ---------------------------------------------------------------------
  // Home view
  // ---------------------------------------------------------------------
  function renderHome() {
    document.getElementById("professorName").textContent = SITE_INFO.name || "";
    document.getElementById("professorTitle").textContent = SITE_INFO.title || "";
    document.getElementById("affiliation").textContent = SITE_INFO.affiliation || "";
    document.getElementById("introNote").textContent = SITE_INFO.note || "";
    document.getElementById("lastUpdated").textContent = SITE_INFO.lastUpdated || "—";

    const portrait = document.getElementById("portrait");
    circlePhoto(portrait, SITE_INFO.photo, initials(SITE_INFO.name));

    const linkRow = document.getElementById("headLinks");
    linkRow.innerHTML = "";

    if (SITE_INFO.email) {
      const a = el("a", "icon-link", ICON_EMAIL);
      a.href = "mailto:" + SITE_INFO.email;
      a.title = "Email";
      a.setAttribute("aria-label", "Send email");
      linkRow.appendChild(a);
    }
    if (SITE_INFO.telegram) {
      const a = el("a", "icon-link", ICON_SEND);
      a.href = SITE_INFO.telegram;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.title = "Telegram";
      a.setAttribute("aria-label", "Open Telegram");
      linkRow.appendChild(a);
    }
    if (SITE_INFO.scheduleUrl) {
      const a = el("a", "btn btn--schedule", ICON_CALENDAR + "<span>Teaching Schedule</span>");
      a.href = SITE_INFO.scheduleUrl;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      linkRow.appendChild(a);
    }

    const grid = document.getElementById("courseGrid");
    grid.innerHTML = "";
    if (!COURSES.length) {
      grid.appendChild(el("p", "empty-state", "No courses have been added yet."));
      return;
    }
    COURSES.forEach((course) => {
      const card = el("a", "glass-card");
      card.href = "#" + course.id;
      const title = el("span", "glass-card__title", course.title);
      const meta = el("span", "glass-card__meta", course.term || "");
      card.appendChild(title);
      card.appendChild(meta);
      grid.appendChild(card);
    });
  }

  // ---------------------------------------------------------------------
  // Course view — shared "session" renderer for video + exercise lists
  // ---------------------------------------------------------------------
  function renderSessionItem(session, index) {
    const row = el("li", "session");
    row.appendChild(el("span", "session__num", String(index + 1).padStart(2, "0")));

    const body = el("div", "session__body");
    body.appendChild(el("h3", "session__title", session.title));
    if (session.description) body.appendChild(el("p", "session__desc", session.description));

    const actions = el("div", "session__actions");
    if (session.watchUrl) {
      const watchBtn = el("a", "btn btn--watch", ICON_PLAY + "<span>Watch</span>");
      watchBtn.href = session.watchUrl;
      watchBtn.target = "_blank";
      watchBtn.rel = "noopener noreferrer";
      actions.appendChild(watchBtn);
    }
    if (session.downloadUrl) {
      const dlBtn = el("a", "btn btn--download", ICON_DOWNLOAD + "<span>Download</span>");
      dlBtn.href = session.downloadUrl;
      dlBtn.setAttribute("download", "");
      actions.appendChild(dlBtn);
    }
    if (actions.children.length) body.appendChild(actions);
    row.appendChild(body);
    return row;
  }

  function renderSessionList(root, sessions, emptyText) {
    root.innerHTML = "";
    if (!sessions || !sessions.length) {
      root.appendChild(el("p", "empty-state", emptyText));
      return;
    }
    const list = el("ol", "session-list");
    sessions.forEach((s, i) => list.appendChild(renderSessionItem(s, i)));
    root.appendChild(list);
  }

  function renderTAs(root, tas, professorName) {
    root.innerHTML = "";
    const badge = el(
      "p",
      "ta-badge",
      ICON_BADGE +
        "<span>Teaching assistants listed here have officially collaborated with " +
        (professorName || "the instructor") +
        " and are confirmed by the instructor.</span>"
    );
    root.appendChild(badge);

    if (!tas || !tas.length) {
      root.appendChild(el("p", "empty-state", "No teaching assistant has been added for this course yet."));
      return;
    }

    const grid = el("div", "ta-grid");
    tas.forEach((ta) => {
      const card = el("div", "ta-card");
      const avatar = el("div", "avatar avatar--ta");
      circlePhoto(avatar, ta.photo, initials(ta.name));
      card.appendChild(avatar);

      const info = el("div", "ta-card__info");
      info.appendChild(el("h3", "ta-card__name", ta.name || ""));
      if (ta.field) info.appendChild(el("p", "ta-card__field", ta.field));
      if (ta.term) info.appendChild(el("p", "ta-card__term", ta.term));

      const links = el("div", "ta-card__links");
      if (ta.email) {
        const a = el("a", "icon-link icon-link--sm", ICON_EMAIL);
        a.href = "mailto:" + ta.email;
        a.title = ta.email;
        links.appendChild(a);
      }
      if (ta.linkedin) {
        const a = el("a", "icon-link icon-link--sm", ICON_LINKEDIN);
        a.href = ta.linkedin;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.title = "LinkedIn";
        links.appendChild(a);
      }
      if (links.children.length) info.appendChild(links);

      if (ta.resumeUrl) {
        const btn = el("a", "btn btn--download btn--sm", ICON_DOWNLOAD + "<span>Resume</span>");
        btn.href = ta.resumeUrl;
        btn.setAttribute("download", "");
        info.appendChild(btn);
      }

      card.appendChild(info);
      grid.appendChild(card);
    });
    root.appendChild(grid);
  }

  function renderFiles(root, files) {
    root.innerHTML = "";
    if (!files || !files.length) {
      root.appendChild(el("p", "empty-state", "No files have been added for this course yet."));
      return;
    }
    const list = el("ul", "file-list");
    files.forEach((f) => {
      const row = el("li", "file-row");
      row.appendChild(el("span", "file-row__icon", ICON_FILE));
      const body = el("div", "file-row__body");
      body.appendChild(el("h3", "file-row__title", f.title || ""));
      if (f.description) body.appendChild(el("p", "file-row__desc", f.description));
      row.appendChild(body);
      if (f.downloadUrl) {
        const btn = el("a", "btn btn--download btn--sm", ICON_DOWNLOAD + "<span>Download</span>");
        btn.href = f.downloadUrl;
        btn.setAttribute("download", "");
        row.appendChild(btn);
      }
      list.appendChild(row);
    });
    root.appendChild(list);
  }

  const SECTIONS = [
    { key: "tas", label: "Teaching Assistants" },
    { key: "videos", label: "Lecture Videos" },
    { key: "exercises", label: "Problem-Solving Sessions" },
    { key: "files", label: "Course Files" }
  ];

  function renderCourseSection(course, key, root) {
    if (key === "tas") renderTAs(root, course.tas, SITE_INFO.name);
    else if (key === "videos") renderSessionList(root, course.videoSessions, "No lecture video has been added for this course yet.");
    else if (key === "exercises") renderSessionList(root, course.exerciseSessions, "No problem-solving session has been added for this course yet.");
    else if (key === "files") renderFiles(root, course.files);
  }

  function renderCourse(course, activeKey) {
    document.getElementById("courseTitle").textContent = course.title;
    document.getElementById("courseTerm").textContent = course.term || "";

    const tabList = document.getElementById("subTabList");
    const panelsRoot = document.getElementById("subPanelsRoot");
    tabList.innerHTML = "";
    panelsRoot.innerHTML = "";

    let initialIndex = SECTIONS.findIndex((s) => s.key === activeKey);
    if (initialIndex < 0) initialIndex = 0;

    const tabs = [];
    const panels = [];

    SECTIONS.forEach((section, index) => {
      const tab = el("button", "tab", section.label);
      tab.type = "button";
      tab.id = "subtab-" + section.key;
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-controls", "subpanel-" + section.key);
      tabList.appendChild(tab);
      tabs.push(tab);

      const panel = el("section", "panel");
      panel.id = "subpanel-" + section.key;
      panel.setAttribute("role", "tabpanel");
      renderCourseSection(course, section.key, panel);
      panelsRoot.appendChild(panel);
      panels.push(panel);
    });

    function activate(index) {
      tabs.forEach((t, i) => {
        const active = i === index;
        t.setAttribute("aria-selected", active ? "true" : "false");
        t.tabIndex = active ? 0 : -1;
      });
      panels.forEach((p, i) => p.classList.toggle("is-active", i === index));
      const newHash = "#" + course.id + "/" + SECTIONS[index].key;
      if (window.location.hash !== newHash) history.replaceState(null, "", newHash);
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activate(index));
      tab.addEventListener("keydown", (e) => {
        let next = null;
        if (e.key === "ArrowRight") next = (index + 1) % tabs.length;
        if (e.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
        if (e.key === "Home") next = 0;
        if (e.key === "End") next = tabs.length - 1;
        if (next !== null) {
          e.preventDefault();
          tabs[next].focus();
          activate(next);
        }
      });
    });

    activate(initialIndex);
  }

  // ---------------------------------------------------------------------
  // Routing
  // ---------------------------------------------------------------------
  function showView(name) {
    document.getElementById("homeView").classList.toggle("is-hidden", name !== "home");
    document.getElementById("courseView").classList.toggle("is-hidden", name !== "course");
    window.scrollTo(0, 0);
  }

  function route() {
    const raw = window.location.hash.replace("#", "");
    if (!raw) {
      showView("home");
      return;
    }
    const [courseId, sectionKey] = raw.split("/");
    const course = COURSES.find((c) => c.id === courseId);
    if (!course) {
      showView("home");
      return;
    }
    showView("course");
    renderCourse(course, sectionKey);
  }

  document.getElementById("backBtn").addEventListener("click", () => {
    window.location.hash = "";
  });

  window.addEventListener("hashchange", route);

  renderHome();
  route();
})();
