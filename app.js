// GCSE Mock Revision Planner - Ronja
// Start date: May 24, 2026. End date: June 22, 2026.

const SUBJECTS = [
    { name: "Maths", colorClass: "badge-maths", hexColor: "#3b82f6" },
    { name: "English Literature", colorClass: "badge-englit", hexColor: "#a855f7" },
    { name: "Chemistry", colorClass: "badge-chem", hexColor: "#10b981" },
    { name: "English Language", colorClass: "badge-englang", hexColor: "#ec4899" },
    { name: "Film Studies", colorClass: "badge-film", hexColor: "#f43f5e" },
    { name: "Physics", colorClass: "badge-physics", hexColor: "#06b6d4" },
    { name: "History", colorClass: "badge-history", hexColor: "#f59e0b" },
    { name: "Art Coursework", colorClass: "badge-art", hexColor: "#f97316" }
];

const EXAMS = [
    { name: "Art Coursework Submission", date: "2026-06-01", subject: "Art Coursework" },
    { name: "Maths Paper 1", date: "2026-06-08", subject: "Maths" },
    { name: "English Literature", date: "2026-06-09", subject: "English Literature" },
    { name: "Chemistry", date: "2026-06-10", subject: "Chemistry" },
    { name: "Maths Paper 2", date: "2026-06-15", subject: "Maths" },
    { name: "English Language", date: "2026-06-16", subject: "English Language" },
    { name: "Film Studies", date: "2026-06-16", subject: "Film Studies" },
    { name: "Physics", date: "2026-06-17", subject: "Physics" },
    { name: "History", date: "2026-06-18", subject: "History" },
    { name: "Maths Paper 3", date: "2026-06-22", subject: "Maths" }
];

const DEFAULT_SCHEDULE = {
  "2026-05-24": [
    { "subject": "Art Coursework", "hours": 1, "completed": false },
    { "subject": "Film Studies", "hours": 1, "completed": false },
    { "subject": "English Literature", "hours": 1, "completed": false }
  ],
  "2026-05-25": [
    { "subject": "Art Coursework", "hours": 1, "completed": false },
    { "subject": "Maths", "hours": 1, "completed": false },
    { "subject": "English Literature", "hours": 1, "completed": false }
  ],
  "2026-05-26": [
    { "subject": "Art Coursework", "hours": 1, "completed": false },
    { "subject": "English Literature", "hours": 1, "completed": false },
    { "subject": "Physics", "hours": 1, "completed": false }
  ],
  "2026-05-27": [
    { "subject": "Art Coursework", "hours": 1, "completed": false },
    { "subject": "Chemistry", "hours": 1, "completed": false },
    { "subject": "English Language", "hours": 1, "completed": false }
  ],
  "2026-05-28": [
    { "subject": "Art Coursework", "hours": 1, "completed": false },
    { "subject": "History", "hours": 1, "completed": false },
    { "subject": "Film Studies", "hours": 1, "completed": false }
  ],
  "2026-05-29": [
    { "subject": "Art Coursework", "hours": 1, "completed": false },
    { "subject": "Maths", "hours": 1, "completed": false },
    { "subject": "English Literature", "hours": 1, "completed": false }
  ],
  "2026-05-30": [
    { "subject": "Art Coursework", "hours": 1, "completed": false },
    { "subject": "Chemistry", "hours": 1, "completed": false },
    { "subject": "Physics", "hours": 1, "completed": false }
  ],
  "2026-05-31": [
    { "subject": "Art Coursework", "hours": 1, "completed": false },
    { "subject": "English Literature", "hours": 1, "completed": false },
    { "subject": "English Language", "hours": 1, "completed": false }
  ],
  "2026-06-01": [
    { "subject": "History", "hours": 1, "completed": false },
    { "subject": "Film Studies", "hours": 1, "completed": false },
    { "subject": "Physics", "hours": 1, "completed": false }
  ],
  "2026-06-02": [
    { "subject": "Maths", "hours": 1, "completed": false },
    { "subject": "Chemistry", "hours": 1, "completed": false },
    { "subject": "English Language", "hours": 1, "completed": false }
  ],
  "2026-06-03": [
    { "subject": "English Literature", "hours": 1, "completed": false },
    { "subject": "Physics", "hours": 1, "completed": false },
    { "subject": "Film Studies", "hours": 1, "completed": false }
  ],
  "2026-06-04": [
    { "subject": "Chemistry", "hours": 1, "completed": false },
    { "subject": "English Language", "hours": 1, "completed": false },
    { "subject": "History", "hours": 1, "completed": false }
  ],
  "2026-06-05": [
    { "subject": "English Literature", "hours": 1, "completed": false },
    { "subject": "Chemistry", "hours": 1, "completed": false },
    { "subject": "Film Studies", "hours": 1, "completed": false }
  ],
  "2026-06-06": [
    { "subject": "English Literature", "hours": 1, "completed": false },
    { "subject": "Chemistry", "hours": 1, "completed": false },
    { "subject": "Physics", "hours": 1, "completed": false }
  ],
  "2026-06-07": [
    { "subject": "Maths", "hours": 1, "completed": false },
    { "subject": "Chemistry", "hours": 1, "completed": false },
    { "subject": "English Literature", "hours": 1, "completed": false }
  ],
  "2026-06-08": [
    { "subject": "English Literature", "hours": 3, "completed": false }
  ],
  "2026-06-09": [
    { "subject": "Chemistry", "hours": 3, "completed": false }
  ],
  "2026-06-10": [
    { "subject": "Physics", "hours": 1, "completed": false },
    { "subject": "History", "hours": 1, "completed": false },
    { "subject": "Film Studies", "hours": 1, "completed": false }
  ],
  "2026-06-11": [
    { "subject": "Maths", "hours": 1, "completed": false },
    { "subject": "English Language", "hours": 1, "completed": false },
    { "subject": "Physics", "hours": 1, "completed": false }
  ],
  "2026-06-12": [
    { "subject": "Maths", "hours": 1, "completed": false },
    { "subject": "Film Studies", "hours": 1, "completed": false },
    { "subject": "History", "hours": 1, "completed": false }
  ],
  "2026-06-13": [
    { "subject": "Maths", "hours": 1, "completed": false },
    { "subject": "Physics", "hours": 1, "completed": false },
    { "subject": "English Language", "hours": 1, "completed": false }
  ],
  "2026-06-14": [
    { "subject": "Maths", "hours": 1, "completed": false },
    { "subject": "English Language", "hours": 1, "completed": false },
    { "subject": "History", "hours": 1, "completed": false }
  ],
  "2026-06-15": [
    { "subject": "English Language", "hours": 1, "completed": false },
    { "subject": "Film Studies", "hours": 2, "completed": false }
  ],
  "2026-06-16": [
    { "subject": "Physics", "hours": 2, "completed": false },
    { "subject": "History", "hours": 1, "completed": false }
  ],
  "2026-06-17": [
    { "subject": "History", "hours": 3, "completed": false }
  ],
  "2026-06-18": [
    { "subject": "Maths", "hours": 1, "completed": false },
    { "subject": "Film Studies", "hours": 1, "completed": false },
    { "subject": "English Language", "hours": 1, "completed": false }
  ],
  "2026-06-19": [
    { "subject": "Maths", "hours": 1, "completed": false },
    { "subject": "Chemistry", "hours": 1, "completed": false },
    { "subject": "English Language", "hours": 1, "completed": false }
  ],
  "2026-06-20": [
    { "subject": "Maths", "hours": 1, "completed": false },
    { "subject": "Physics", "hours": 1, "completed": false },
    { "subject": "English Language", "hours": 1, "completed": false }
  ],
  "2026-06-21": [
    { "subject": "Maths", "hours": 1, "completed": false },
    { "subject": "History", "hours": 1, "completed": false },
    { "subject": "Film Studies", "hours": 1, "completed": false }
  ]
};

const DEFAULT_SUBTOPICS = {
    "Maths": [
        "Algebra (Equations, Graphs, Sequences)",
        "Number (Fractions, Percentages, Decimals, Surds)",
        "Geometry & Measure (Area, Volume, Pythagoras)",
        "Trigonometry & Sine/Cosine rules",
        "Probability & Venn Diagrams",
        "Statistics & Mean/Median/Histograms",
        "Ratio, Proportion & Rates of Change"
    ],
    "English Literature": [
        "Shakespeare Text (e.g. Macbeth / Romeo & Juliet)",
        "19th-Century Novel (e.g. Jekyll & Hyde / Christmas Carol)",
        "Modern Play or Novel (e.g. An Inspector Calls)",
        "Poetry Anthology (Power & Conflict / Relationships)",
        "Unseen Poetry Analysis"
    ],
    "Chemistry": [
        "Atomic Structure & Periodic Table",
        "Bonding, Structure & Properties of Matter",
        "Quantitative Chemistry & Moles",
        "Chemical Changes (Acids, Electrolysis)",
        "Energy Changes & Exothermic reactions",
        "Organic Chemistry & Hydrocarbons",
        "Chemical Analysis & Gas testing"
    ],
    "English Language": [
        "Paper 1: Unseen Fiction Reading & Literary devices",
        "Paper 1: Creative Writing (Descriptive / Narrative)",
        "Paper 2: Non-Fiction Reading & Comparison",
        "Paper 2: Transactional Writing (Articles / Letters / Speech)"
    ],
    "Film Studies": [
        "Hollywood Cinema (1930-1990)",
        "American Independent Cinema",
        "British Cinema & Cultural contexts",
        "Global Non-English Film study",
        "Film History & Technical evolution"
    ],
    "Physics": [
        "Energy Transfers, Efficiency & Resources",
        "Electricity (Circuits, Mains, Static)",
        "Particle Model of Matter & Density",
        "Atomic Structure & Radioactive decay",
        "Forces, Speed, Newton's Laws",
        "Waves (Sound, Light, Electromagnetic spectrum)",
        "Magnetism & Electromagnetism"
    ],
    "History": [
        "Weimar & Nazi Germany (1918-1939)",
        "Superpower Relations & Cold War (1941-1991)",
        "Early Elizabethan England (1558-1588)",
        "Medicine in Britain (c1250-present)"
    ],
    "Art Coursework": [
        "Portfolio Development",
        "Supporting Studies & Sketchbooks",
        "Final Outcome Preparation",
        "Artist Research & Connections"
    ]
};

const STUDY_TIPS = [
    { text: "Active Recall: Don't just read. Cover your notes, try to write down everything you remember, then check what you missed.", topic: "Active Recall" },
    { text: "Spaced Repetition: Reviewing a topic 1, 3, and 7 days after first studying it helps move the knowledge into long-term memory.", topic: "Memory Science" },
    { text: "The Feynman Technique: Explain a topic out loud in simple terms, as if teaching a child. If you get stuck, that's where your knowledge gap is.", topic: "Understanding" },
    { text: "Pomodoro Focus: Work for 25 minutes with zero distractions, then take a 5-minute break. Every 4 sessions, take a longer 20-minute break.", topic: "Time Management" },
    { text: "Past Paper Practice: GCSE exams reuse phrasing. Doing actual past paper questions helps you recognize the exact keywords examiners want.", topic: "Exam Technique" },
    { text: "Sleep and Memory: Your brain organizes and stores information while you sleep. Getting 8-9 hours is just as important as studying!", topic: "Sleep & Health" }
];

// App State
let state = {
    schedule: {},
    subtopics: {},
    notes: {},
    completedDays: {},
    theme: "dark"
};

// Target date formats
const START_DATE_STR = "2026-05-24";
const END_DATE_STR = "2026-06-22";

// Active selected day in modal
let activeModalDate = null;

// Supabase Sync Configuration & Logic
let db = null;
try {
    if (typeof supabase !== 'undefined' && typeof SUPABASE_URL !== 'undefined') {
        const { createClient } = supabase;
        db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
} catch (e) {
    console.error("Failed to initialize Supabase client:", e);
}

// Get or generate a unique sync token
function getSyncToken() {
    const urlParams = new URLSearchParams(window.location.search);
    let token = urlParams.get('token');
    
    if (!token) {
        token = localStorage.getItem("ronja_sync_token");
        if (!token) {
            // Generate a simple unique token format: plan_abc123...
            token = 'plan_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            localStorage.setItem("ronja_sync_token", token);
        }
        // Update URL bar silently without reloading page
        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?token=' + token;
        window.history.replaceState({ path: newUrl }, '', newUrl);
    } else {
        localStorage.setItem("ronja_sync_token", token);
    }
    return token;
}

const CLOUD_STATE_ID = getSyncToken();
let isSyncing = false;
let cloudSyncTimer = null;

function updateSyncStatusUI(status, type = 'info') {
    const statusEl = document.getElementById("sync-status");
    if (!statusEl) return;
    
    statusEl.textContent = status;
    
    if (type === 'success') {
        statusEl.style.color = 'var(--success-color)';
    } else if (type === 'error') {
        statusEl.style.color = 'var(--danger-color)';
    } else if (type === 'warning') {
        statusEl.style.color = 'var(--color-history)'; // Orange/amber color
    } else {
        statusEl.style.color = 'var(--text-secondary)';
    }
}

async function pushToCloud() {
    if (!db) {
        updateSyncStatusUI("Cloud Sync: Offline", "error");
        return;
    }
    
    try {
        isSyncing = true;
        updateSyncStatusUI("Cloud Sync: Saving...", "warning");
        
        const payload = {
            id: CLOUD_STATE_ID,
            state: state,
            updated_at: new Date().toISOString()
        };
        
        const { error } = await db
            .from('ronja_revision')
            .upsert(payload);
            
        if (error) throw error;
        
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        updateSyncStatusUI(`Cloud Sync: Saved at ${timeStr}`, "success");
    } catch (e) {
        console.error("Cloud push failed:", e);
        updateSyncStatusUI("Cloud Sync: Save failed", "error");
    } finally {
        isSyncing = false;
    }
}

function triggerCloudSave() {
    clearTimeout(cloudSyncTimer);
    if (!db) return;
    
    updateSyncStatusUI("Cloud Sync: Pending changes...", "info");
    cloudSyncTimer = setTimeout(() => {
        pushToCloud();
    }, 2000);
}

async function pullFromCloud(silent = false) {
    if (!db) {
        if (!silent) alert("Supabase is not connected.");
        updateSyncStatusUI("Cloud Sync: Offline", "error");
        return false;
    }
    
    try {
        if (!silent) updateSyncStatusUI("Cloud Sync: Pulling...", "warning");
        
        const { data, error } = await db
            .from('ronja_revision')
            .select('state, updated_at')
            .eq('id', CLOUD_STATE_ID)
            .maybeSingle();
            
        if (error) throw error;
        
        if (data && data.state) {
            state = data.state;
            
            // Sync to local storage
            localStorage.setItem("ronja_gcse_planner", JSON.stringify(state));
            
            // Re-render interface
            setupTheme();
            updateDateDisplay();
            renderAll();
            
            const updatedDate = new Date(data.updated_at);
            const timeStr = updatedDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
            const dateStr = updatedDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
            updateSyncStatusUI(`Cloud Sync: Loaded (${dateStr} ${timeStr})`, "success");
            
            if (!silent) {
                alert("Progress successfully loaded from Supabase!");
            }
            return true;
        } else {
            updateSyncStatusUI("Cloud Sync: No backup found", "info");
            if (!silent) {
                alert("No progress backup found on Supabase cloud. Click 'Push' to save your current local progress first.");
            }
            return false;
        }
    } catch (e) {
        console.error("Cloud pull failed:", e);
        updateSyncStatusUI("Cloud Sync: Pull failed", "error");
        if (!silent) {
            alert("Failed to load progress from Supabase: " + e.message);
        }
        return false;
    }
}

// Initialize App
async function initApp() {
    loadState();
    setupTheme();
    setupEventListeners();
    updateDateDisplay();
    renderAll();
    
    // Connect and pull latest from Supabase
    if (db) {
        updateSyncStatusUI("Cloud Sync: Connecting...", "info");
        const success = await pullFromCloud(true);
        if (!success) {
            updateSyncStatusUI("Cloud Sync: Initializing...", "info");
            await pushToCloud();
        }
    } else {
        updateSyncStatusUI("Cloud Sync: Offline mode", "info");
    }
}

// Load state from localStorage or defaults
function loadState() {
    const savedState = localStorage.getItem("ronja_gcse_planner");
    if (savedState) {
        try {
            state = JSON.parse(savedState);
            // Verify structure matches
            if (!state.schedule || Object.keys(state.schedule).length === 0) {
                state.schedule = JSON.parse(JSON.stringify(DEFAULT_SCHEDULE));
            }
            // Check if the schedule is from the old version (missing or doesn't have 8 hours of Art Coursework)
            let artHours = 0;
            if (state.schedule) {
                Object.values(state.schedule).forEach(dayTasks => {
                    dayTasks.forEach(t => {
                        if (t.subject === "Art Coursework") artHours += t.hours;
                    });
                });
            }
            if (artHours !== 8) {
                console.log("Old schedule detected. Migrating to updated 8h Art, 3h/day schedule.");
                state.schedule = JSON.parse(JSON.stringify(DEFAULT_SCHEDULE));
            }

            if (!state.subtopics || Object.keys(state.subtopics).length === 0 || !state.subtopics["Art Coursework"]) {
                state.subtopics = {};
                for (const sub in DEFAULT_SUBTOPICS) {
                    state.subtopics[sub] = DEFAULT_SUBTOPICS[sub].map(t => ({ name: t, completed: false }));
                }
            }
            if (!state.notes) state.notes = {};
            if (!state.completedDays) state.completedDays = {};
            if (!state.theme) state.theme = "dark";
            saveState();
        } catch (e) {
            console.error("Error parsing saved state, restoring defaults", e);
            restoreDefaults();
        }
    } else {
        restoreDefaults();
    }
}

function restoreDefaults() {
    state.schedule = JSON.parse(JSON.stringify(DEFAULT_SCHEDULE));
    state.subtopics = {};
    for (const sub in DEFAULT_SUBTOPICS) {
        state.subtopics[sub] = DEFAULT_SUBTOPICS[sub].map(t => ({ name: t, completed: false }));
    }
    state.notes = {};
    state.completedDays = {};
    state.theme = "dark";
    saveState();
}

function saveState() {
    localStorage.setItem("ronja_gcse_planner", JSON.stringify(state));
    triggerCloudSave();
}

function setupTheme() {
    const body = document.body;
    if (state.theme === "light") {
        body.classList.add("light-theme");
    } else {
        body.classList.remove("light-theme");
    }
}

// Event Listeners
function setupEventListeners() {
    // Navigation Tabs
    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            navButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const tabId = btn.getAttribute("data-tab");
            document.querySelectorAll(".tab-content").forEach(tc => tc.classList.remove("active"));
            document.getElementById(`tab-${tabId}`).classList.add("active");
        });
    });

    // Theme Toggle
    document.getElementById("theme-toggle").addEventListener("click", () => {
        state.theme = state.theme === "dark" ? "light" : "dark";
        setupTheme();
        saveState();
    });

    // Print Button
    document.getElementById("print-schedule-btn").addEventListener("click", () => {
        window.print();
    });

    // Today's Focus Note listener
    const todayNote = document.getElementById("today-note");
    todayNote.addEventListener("input", (e) => {
        const todayStr = getTodayStr();
        state.notes[todayStr] = e.target.value;
        saveState();
        // Mirror changes to calendar grid UI if open/visible
        const calDayNode = document.querySelector(`.calendar-day[data-date="${todayStr}"]`);
        if (calDayNode) {
            renderCalendarDay(todayStr, calDayNode);
        }
    });

    // Modal Close
    document.getElementById("close-modal-btn").addEventListener("click", closeModal);
    document.getElementById("day-modal").addEventListener("click", (e) => {
        if (e.target.id === "day-modal") closeModal();
    });

    // Modal Save Notes
    document.getElementById("modal-save-btn").addEventListener("click", () => {
        if (activeModalDate) {
            const notesVal = document.getElementById("modal-notes-text").value;
            state.notes[activeModalDate] = notesVal;
            saveState();
            
            // Re-render specific calendar card
            const calDayNode = document.querySelector(`.calendar-day[data-date="${activeModalDate}"]`);
            if (calDayNode) {
                renderCalendarDay(activeModalDate, calDayNode);
            }
            
            // If today is selected, update dashboard focus note too
            if (activeModalDate === getTodayStr()) {
                document.getElementById("today-note").value = notesVal;
            }
            
            closeModal();
            updateDashboardProgress();
        }
    });

    // Modal Toggle Day Status
    document.getElementById("modal-toggle-status-btn").addEventListener("click", () => {
        if (activeModalDate && state.schedule[activeModalDate]) {
            const allCompleted = state.schedule[activeModalDate].every(s => s.completed);
            state.schedule[activeModalDate].forEach(s => {
                s.completed = !allCompleted;
            });
            saveState();
            
            // Re-render modal tasks
            renderModalTasks(activeModalDate);
            
            // Update button text
            updateModalStatusButton(activeModalDate);
            
            // Re-render calendar and dashboard
            renderAll();
        }
    });

    // Modal Save Subjects
    document.getElementById("modal-save-subjects-btn").addEventListener("click", () => {
        if (activeModalDate && state.schedule[activeModalDate]) {
            const sub1 = document.getElementById("modal-select-sub1").value;
            const sub2 = document.getElementById("modal-select-sub2").value;
            const sub3 = document.getElementById("modal-select-sub3").value;
            
            const count = state.schedule[activeModalDate].length;
            if (count === 1) {
                state.schedule[activeModalDate][0].subject = sub1;
            } else if (count === 2) {
                state.schedule[activeModalDate][0].subject = sub1;
                state.schedule[activeModalDate][1].subject = sub2;
            } else if (count === 3) {
                state.schedule[activeModalDate][0].subject = sub1;
                state.schedule[activeModalDate][1].subject = sub2;
                state.schedule[activeModalDate][2].subject = sub3;
            }
            saveState();
            renderModalTasks(activeModalDate);
            renderAll();
        }
    });

    // Supabase Sync Buttons
    const pushBtn = document.getElementById("sync-push-btn");
    const pullBtn = document.getElementById("sync-pull-btn");
    const shareBtn = document.getElementById("sync-share-btn");
    
    if (pushBtn) {
        pushBtn.addEventListener("click", () => {
            pushToCloud();
        });
    }
    
    if (pullBtn) {
        pullBtn.addEventListener("click", () => {
            if (confirm("Are you sure you want to load your progress from the cloud? This will overwrite your current unsaved local changes.")) {
                pullFromCloud(false);
            }
        });
    }

    if (shareBtn) {
        shareBtn.addEventListener("click", () => {
            const shareUrl = window.location.href;
            navigator.clipboard.writeText(shareUrl).then(() => {
                const originalText = shareBtn.innerHTML;
                shareBtn.innerHTML = '<i data-lucide="check"></i> Link Copied!';
                setTimeout(() => {
                    shareBtn.innerHTML = originalText;
                }, 2000);
            }).catch(err => {
                console.error("Failed to copy link:", err);
                alert("Failed to copy link. Please copy the URL from your address bar.");
            });
        });
    }
}

// Helpers
function getTodayStr() {
    // Check if the current time matches 2026-05-24 to 2026-06-22
    // If not, clamp it to 2026-05-24 for demo purposes
    const now = new Date();
    const formatted = now.toISOString().split("T")[0];
    if (state.schedule[formatted]) {
        return formatted;
    }
    return START_DATE_STR; // Default to start date of planner
}

function updateDateDisplay() {
    const todayStr = getTodayStr();
    const parsed = new Date(todayStr);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    // Display in header
    document.getElementById("current-date-display").textContent = `Today is ${parsed.toLocaleDateString('en-GB', options)}`;
    
    // Display in today focus card
    document.getElementById("today-card-date").textContent = parsed.toLocaleDateString('en-GB', { weekday: 'short', month: 'short', day: 'numeric' });
    
    // Fill notes text
    document.getElementById("today-note").value = state.notes[todayStr] || "";
}

// Global render
function renderAll() {
    updateDashboardProgress();
    renderTodayFocus();
    renderCountdowns();
    renderDailyTip();
    renderCalendar();
    renderSubjectTracker();
    lucide.createIcons();
}

// Render Dashboard Progress Elements
function updateDashboardProgress() {
    // Total revised hours
    let totalRevised = 0;
    let totalTarget = 0;
    
    for (const d in state.schedule) {
        state.schedule[d].forEach(s => {
            totalTarget += s.hours;
            if (s.completed) {
                totalRevised += s.hours;
            }
        });
    }

    const percent = totalTarget > 0 ? Math.round((totalRevised / totalTarget) * 100) : 0;
    
    // Update Header Stat Progress Fill & Text
    document.getElementById("total-progress-fill").style.width = `${percent}%`;
    document.getElementById("total-progress-text").textContent = `${totalRevised}/${totalTarget} Hours (${percent}%)`;
    
    // Update SVG Ring Progress
    const circle = document.getElementById("circle-progress");
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    
    document.getElementById("ring-percent-text").textContent = `${percent}%`;

    // Days completed (all items in a day checked off)
    let completedDaysCount = 0;
    for (const d in state.schedule) {
        if (state.schedule[d].length > 0 && state.schedule[d].every(s => s.completed)) {
            completedDaysCount++;
        }
    }
    document.getElementById("stats-completed-days").textContent = completedDaysCount;

    // Days remaining in schedule
    const todayStr = getTodayStr();
    const todayIndex = Object.keys(state.schedule).indexOf(todayStr);
    const totalDaysCount = Object.keys(state.schedule).length;
    const daysRemaining = Math.max(0, totalDaysCount - todayIndex);
    document.getElementById("stats-days-remaining").textContent = daysRemaining;
}

// Render Dashboard: Today's Focus Card
function renderTodayFocus() {
    const todayStr = getTodayStr();
    const container = document.getElementById("today-tasks-container");
    container.innerHTML = "";
    
    const tasks = state.schedule[todayStr] || [];
    if (tasks.length === 0) {
        container.innerHTML = `<p class="info-text">No revision scheduled for today!</p>`;
        return;
    }
    
    tasks.forEach((task, idx) => {
        const item = document.createElement("div");
        item.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        // Subject accent border
        const subMeta = SUBJECTS.find(s => s.name === task.subject);
        const color = subMeta ? subMeta.hexColor : "#cbd5e1";
        item.style.borderLeft = `5px solid ${color}`;
        
        item.innerHTML = `
            <div class="task-checkbox">
                <i data-lucide="check"></i>
            </div>
            <div class="task-details">
                <span class="task-subject">${task.subject}</span>
                <span class="task-hours">${task.hours} Hour${task.hours > 1 ? 's' : ''} Sessions</span>
            </div>
        `;
        
        item.addEventListener("click", () => {
            task.completed = !task.completed;
            saveState();
            renderAll();
        });
        
        container.appendChild(item);
    });
}

// Render Dashboard: Exam Countdowns
function renderCountdowns() {
    const container = document.getElementById("countdowns-list-container");
    container.innerHTML = "";
    
    const todayStr = getTodayStr();
    const todayDate = new Date(todayStr);
    
    // Sort exams by date
    const sortedExams = [...EXAMS].sort((a, b) => new Date(a.date) - new Date(b.date));
    
    sortedExams.forEach(exam => {
        const examDate = new Date(exam.date);
        const diffTime = examDate - todayDate;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        const item = document.createElement("div");
        item.className = "exam-countdown-item";
        
        let badgeClass = "soon";
        let badgeText = `${diffDays} days left`;
        
        if (diffDays < 0) {
            badgeClass = "passed";
            badgeText = "Completed";
        } else if (diffDays === 0) {
            badgeClass = "imminent";
            badgeText = "TODAY";
        } else if (diffDays <= 3) {
            badgeClass = "imminent";
            badgeText = `${diffDays} day${diffDays > 1 ? 's' : ''} left`;
        }
        
        const parsedDateStr = examDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
        
        item.innerHTML = `
            <div class="exam-info">
                <span class="exam-name">${exam.name}</span>
                <span class="exam-date">${parsedDateStr}</span>
            </div>
            <span class="exam-days-badge ${badgeClass}">${badgeText}</span>
        `;
        
        container.appendChild(item);
    });
}

// Render Dashboard: Daily Tip
function renderDailyTip() {
    // Dynamic tip based on day index
    const todayStr = getTodayStr();
    const dayIndex = Object.keys(state.schedule).indexOf(todayStr);
    const tip = STUDY_TIPS[dayIndex % STUDY_TIPS.length];
    
    document.getElementById("daily-tip-text").textContent = `"${tip.text}"`;
    document.querySelector(".tip-topic").textContent = tip.topic;
}

// Render Revision Calendar Grid
function renderCalendar() {
    const container = document.getElementById("calendar-grid-container");
    container.innerHTML = "";
    
    // Days headers: Mon, Tue, etc.
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    weekDays.forEach(day => {
        const header = document.createElement("div");
        header.className = "calendar-day-header";
        header.textContent = day;
        container.appendChild(header);
    });

    // Days in schedule
    for (const dStr in state.schedule) {
        const dayDiv = document.createElement("div");
        dayDiv.className = "calendar-day";
        dayDiv.setAttribute("data-date", dStr);
        
        renderCalendarDay(dStr, dayDiv);
        
        // Modal trigger on click
        dayDiv.addEventListener("click", () => {
            openModal(dStr);
        });
        
        container.appendChild(dayDiv);
    }
}

function renderCalendarDay(dStr, dayDiv) {
    dayDiv.innerHTML = "";
    const dateObj = new Date(dStr);
    const formattedDay = dateObj.getDate();
    
    // Day number
    const numSpan = document.createElement("span");
    numSpan.className = "day-num";
    numSpan.textContent = formattedDay;
    dayDiv.appendChild(numSpan);
    
    // Subject Badges
    const subjectsDiv = document.createElement("div");
    subjectsDiv.className = "day-subjects-list";
    
    const tasks = state.schedule[dStr] || [];
    tasks.forEach(t => {
        const badge = document.createElement("span");
        const subMeta = SUBJECTS.find(s => s.name === t.subject);
        const badgeClass = subMeta ? subMeta.colorClass : "";
        badge.className = `subject-badge ${badgeClass}`;
        badge.textContent = `${t.subject} (${t.hours}h)`;
        subjectsDiv.appendChild(badge);
    });
    dayDiv.appendChild(subjectsDiv);

    // Check completion
    const isCompleted = tasks.length > 0 && tasks.every(t => t.completed);
    if (isCompleted) {
        dayDiv.classList.add("completed");
    } else {
        dayDiv.classList.remove("completed");
    }

    // Exam indicator badge
    const examsOnDay = EXAMS.filter(e => e.date === dStr);
    if (examsOnDay.length > 0) {
        const examIndicator = document.createElement("div");
        examIndicator.className = "day-exam-indicator";
        examIndicator.textContent = examsOnDay.map(e => e.name).join(" / ");
        dayDiv.appendChild(examIndicator);
    }
}

// Render Subject & Subtopic Tracker
function renderSubjectTracker() {
    const container = document.getElementById("subjects-container-list");
    container.innerHTML = "";
    
    SUBJECTS.forEach(subject => {
        const row = document.createElement("div");
        row.className = "subject-row";
        
        // Sum total hours revised vs scheduled for this subject
        let scheduledHours = 0;
        let revisedHours = 0;
        
        for (const dStr in state.schedule) {
            state.schedule[dStr].forEach(t => {
                if (t.subject === subject.name) {
                    scheduledHours += t.hours;
                    if (t.completed) {
                        revisedHours += t.hours;
                    }
                }
            });
        }
        
        // Subtopic items
        const subtopicItems = state.subtopics[subject.name] || [];
        const completedSubtopics = subtopicItems.filter(s => s.completed).length;
        const totalSubtopics = subtopicItems.length;
        
        row.innerHTML = `
            <div class="subject-row-header">
                <div class="sub-title-area">
                    <span class="sub-color-dot" style="background-color: ${subject.hexColor};"></span>
                    <h3>${subject.name}</h3>
                </div>
                <span class="sub-hours-stats">
                    ${revisedHours}/${scheduledHours} Revision Hours | 
                    ${completedSubtopics}/${totalSubtopics} Topics Covered
                </span>
            </div>
            <div class="subtopic-grid">
                <!-- Checklist rendered dynamically -->
            </div>
        `;
        
        const grid = row.querySelector(".subtopic-grid");
        
        subtopicItems.forEach((subtopic, index) => {
            const item = document.createElement("div");
            item.className = `subtopic-checkbox-item ${subtopic.completed ? 'checked' : ''}`;
            item.innerHTML = `
                <input type="checkbox" ${subtopic.completed ? 'checked' : ''} id="subtopic-${subject.name}-${index}">
                <label for="subtopic-${subject.name}-${index}">${subtopic.name}</label>
            `;
            
            // Checkbox event
            const input = item.querySelector("input");
            input.addEventListener("change", (e) => {
                subtopic.completed = e.target.checked;
                saveState();
                renderAll();
            });
            
            grid.appendChild(item);
        });
        
        container.appendChild(row);
    });
}

// Modal handling
function openModal(dateStr) {
    activeModalDate = dateStr;
    const modal = document.getElementById("day-modal");
    
    // Parse date
    const parsed = new Date(dateStr);
    const formatted = parsed.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById("modal-date-title").textContent = formatted;
    
    // Exam Banner
    const examBanner = document.getElementById("modal-exam-alert");
    const examsToday = EXAMS.filter(e => e.date === dateStr);
    if (examsToday.length > 0) {
        examBanner.style.display = "flex";
        examBanner.querySelector("span").textContent = `EXAM TODAY: ${examsToday.map(e => e.name).join(" & ")}`;
    } else {
        examBanner.style.display = "none";
    }
    
    // Set notes text
    document.getElementById("modal-notes-text").value = state.notes[dateStr] || "";
    
    // Update dynamic modal scheduled title
    const tasks = state.schedule[dateStr] || [];
    const totalHours = tasks.reduce((sum, t) => sum + t.hours, 0);
    document.getElementById("modal-scheduled-title").textContent = `Scheduled Revision (${totalHours} Hour${totalHours > 1 ? 's' : ''})`;

    // Render tasks list inside modal
    renderModalTasks(dateStr);
    
    // Update Toggle complete status button
    updateModalStatusButton(dateStr);
    
    // Populating modification dropdowns
    setupModalSubjectSelectors(dateStr);
    
    modal.classList.add("open");
}

function closeModal() {
    const modal = document.getElementById("day-modal");
    modal.classList.remove("open");
    activeModalDate = null;
}

function renderModalTasks(dateStr) {
    const tasksContainer = document.getElementById("modal-tasks-list");
    tasksContainer.innerHTML = "";
    
    const tasks = state.schedule[dateStr] || [];
    if (tasks.length === 0) {
        tasksContainer.innerHTML = `<p class="info-text">No revision scheduled.</p>`;
        return;
    }
    
    tasks.forEach((t, idx) => {
        const item = document.createElement("div");
        item.className = `task-item ${t.completed ? 'completed' : ''}`;
        
        const subMeta = SUBJECTS.find(s => s.name === t.subject);
        const color = subMeta ? subMeta.hexColor : "#cbd5e1";
        item.style.borderLeft = `5px solid ${color}`;
        
        item.innerHTML = `
            <div class="task-checkbox">
                <i data-lucide="check"></i>
            </div>
            <div class="task-details">
                <span class="task-subject">${t.subject}</span>
                <span class="task-hours">${t.hours} Hour${t.hours > 1 ? 's' : ''} Session</span>
            </div>
        `;
        
        item.addEventListener("click", () => {
            t.completed = !t.completed;
            saveState();
            renderModalTasks(dateStr);
            renderAll();
            updateModalStatusButton(dateStr);
        });
        
        tasksContainer.appendChild(item);
    });
    
    lucide.createIcons();
}

function updateModalStatusButton(dateStr) {
    const btn = document.getElementById("modal-toggle-status-btn");
    const tasks = state.schedule[dateStr] || [];
    const allCompleted = tasks.length > 0 && tasks.every(s => s.completed);
    
    btn.textContent = allCompleted ? "Mark Day Incomplete" : "Mark Day Complete";
}

function setupModalSubjectSelectors(dateStr) {
    const select1 = document.getElementById("modal-select-sub1");
    const select2 = document.getElementById("modal-select-sub2");
    const select3 = document.getElementById("modal-select-sub3");
    
    select1.innerHTML = "";
    select2.innerHTML = "";
    select3.innerHTML = "";
    
    SUBJECTS.forEach(sub => {
        const opt1 = document.createElement("option");
        opt1.value = sub.name;
        opt1.textContent = sub.name;
        select1.appendChild(opt1);
        
        const opt2 = document.createElement("option");
        opt2.value = sub.name;
        opt2.textContent = sub.name;
        select2.appendChild(opt2);

        const opt3 = document.createElement("option");
        opt3.value = sub.name;
        opt3.textContent = sub.name;
        select3.appendChild(opt3);
    });

    const tasks = state.schedule[dateStr] || [];
    const selectorArea = document.querySelector(".modal-subject-selector-area");
    
    if (tasks.length === 0) {
        selectorArea.style.display = "none";
    } else if (tasks.length === 1) {
        selectorArea.style.display = "block";
        select1.style.display = "block";
        select2.style.display = "none";
        select3.style.display = "none";
        select1.value = tasks[0].subject;
    } else if (tasks.length === 2) {
        selectorArea.style.display = "block";
        select1.style.display = "block";
        select2.style.display = "block";
        select3.style.display = "none";
        select1.value = tasks[0].subject;
        select2.value = tasks[1].subject;
    } else if (tasks.length === 3) {
        selectorArea.style.display = "block";
        select1.style.display = "block";
        select2.style.display = "block";
        select3.style.display = "block";
        select1.value = tasks[0].subject;
        select2.value = tasks[1].subject;
        select3.value = tasks[2].subject;
    }
}

// Start the app on load
window.addEventListener("DOMContentLoaded", initApp);
