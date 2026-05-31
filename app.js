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

let EXAMS = [
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

let DEFAULT_SCHEDULE = {
  "2026-05-24": [
    { "hours": 1, "subject": "Art Coursework", "completed": true },
    { "hours": 1, "subject": "Film Studies", "completed": true },
    { "hours": 1, "subject": "English Literature", "completed": true }
  ],
  "2026-05-25": [
    { "hours": 1, "subject": "Art Coursework", "completed": false },
    { "hours": 1, "subject": "Maths", "completed": false },
    { "hours": 1, "subject": "History", "completed": false }
  ],
  "2026-05-26": [
    { "hours": 1, "subject": "Art Coursework", "completed": false },
    { "hours": 1, "subject": "Physics", "completed": false },
    { "hours": 1, "subject": "English Language", "completed": false }
  ],
  "2026-05-27": [
    { "hours": 1, "subject": "Art Coursework", "completed": false },
    { "hours": 1, "subject": "Chemistry", "completed": false },
    { "hours": 1, "subject": "Maths", "completed": false }
  ],
  "2026-05-28": [
    { "hours": 1, "subject": "Art Coursework", "completed": false },
    { "hours": 1, "subject": "History", "completed": false },
    { "hours": 1, "subject": "Film Studies", "completed": false }
  ],
  "2026-05-29": [
    { "hours": 1, "subject": "Art Coursework", "completed": false },
    { "hours": 1, "subject": "English Literature", "completed": false },
    { "hours": 1, "subject": "Maths", "completed": false }
  ],
  "2026-05-30": [
    { "hours": 1, "subject": "Art Coursework", "completed": false },
    { "hours": 1, "subject": "Chemistry", "completed": false },
    { "hours": 1, "subject": "Physics", "completed": false }
  ],
  "2026-05-31": [
    { "hours": 1, "subject": "Chemistry", "completed": false },
    { "hours": 1, "subject": "English Literature", "completed": false },
    { "hours": 1, "subject": "English Language", "completed": false }
  ],
  "2026-06-01": [
    { "hours": 1, "subject": "History", "completed": false },
    { "hours": 1, "subject": "Film Studies", "completed": false },
    { "hours": 1, "subject": "Physics", "completed": false }
  ],
  "2026-06-02": [
    { "hours": 1, "subject": "English Language", "completed": false },
    { "hours": 1, "subject": "Chemistry", "completed": false },
    { "hours": 1, "subject": "Maths", "completed": false }
  ],
  "2026-06-03": [
    { "hours": 1, "subject": "English Literature", "completed": false },
    { "hours": 1, "subject": "Physics", "completed": false },
    { "hours": 1, "subject": "Film Studies", "completed": false }
  ],
  "2026-06-04": [
    { "hours": 1, "subject": "Chemistry", "completed": false },
    { "hours": 1, "subject": "English Language", "completed": false },
    { "hours": 1, "subject": "History", "completed": false }
  ],
  "2026-06-05": [
    { "hours": 1, "subject": "English Literature", "completed": false },
    { "hours": 1, "subject": "Chemistry", "completed": false },
    { "hours": 1, "subject": "Film Studies", "completed": false }
  ],
  "2026-06-06": [
    { "hours": 1, "subject": "English Literature", "completed": false },
    { "hours": 1, "subject": "Chemistry", "completed": false },
    { "hours": 1, "subject": "Physics", "completed": false }
  ],
  "2026-06-07": [
    { "hours": 1, "subject": "Physics", "completed": false },
    { "hours": 1, "subject": "Chemistry", "completed": false },
    { "hours": 1, "subject": "English Literature", "completed": false }
  ],
  "2026-06-08": [
    { "hours": 2, "subject": "English Literature", "completed": false },
    { "hours": 1, "subject": "Chemistry", "completed": false }
  ],
  "2026-06-09": [
    { "hours": 2, "subject": "Chemistry", "completed": false }
  ],
  "2026-06-10": [
    { "hours": 1, "subject": "Physics", "completed": false },
    { "hours": 1, "subject": "History", "completed": false },
    { "hours": 1, "subject": "Film Studies", "completed": false }
  ],
  "2026-06-11": [
    { "hours": 1, "subject": "English Language", "completed": false },
    { "hours": 1, "subject": "Physics", "completed": false },
    { "hours": 1, "subject": "Maths", "completed": false }
  ],
  "2026-06-12": [
    { "hours": 2, "subject": "History", "completed": false },
    { "hours": 1, "subject": "Film Studies", "completed": false }
  ],
  "2026-06-13": [
    { "hours": 1, "subject": "Film Studies", "completed": false },
    { "hours": 1, "subject": "Physics", "completed": false },
    { "hours": 1, "subject": "English Language", "completed": false }
  ],
  "2026-06-14": [
    { "hours": 1, "subject": "Maths", "completed": false },
    { "hours": 1, "subject": "English Language", "completed": false },
    { "hours": 1, "subject": "History", "completed": false }
  ],
  "2026-06-15": [
    { "hours": 1, "subject": "English Language", "completed": false },
    { "hours": 1, "subject": "Film Studies", "completed": false },
    { "hours": 1, "subject": "English Language", "completed": false }
  ],
  "2026-06-16": [
    { "hours": 2, "subject": "Physics", "completed": false },
    { "hours": 1, "subject": "History", "completed": false }
  ],
  "2026-06-17": [
    { "hours": 3, "subject": "History", "completed": false }
  ],
  "2026-06-18": [
    { "hours": 2, "subject": "Maths", "completed": false }
  ],
  "2026-06-19": [],
  "2026-06-20": [
    { "hours": 3, "subject": "Maths", "completed": false }
  ],
  "2026-06-21": [
    { "hours": 3, "subject": "Maths", "completed": false }
  ],
  "2026-06-22": []
};

let DEFAULT_SUBTOPICS = {
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
let currentCalendarFilter = "all";

// Supabase Sync Configuration & Logic
let db = null;

function initDbClient(token = null) {
    try {
        if (typeof supabase !== 'undefined' && typeof SUPABASE_URL !== 'undefined') {
            const { createClient } = supabase;
            if (token) {
                db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
                    global: {
                        headers: {
                            'x-access-token': token
                        }
                    }
                });
            } else {
                db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            }
        }
    } catch (e) {
        console.error("Failed to initialize Supabase client:", e);
    }
}

// Initialize database client initially as unauthenticated
initDbClient(null);

// Get sync token
function getSyncToken() {
    const urlParams = new URLSearchParams(window.location.search);
    let token = urlParams.get('token');
    
    if (token) {
        localStorage.setItem("ronja_sync_token", token);
        // Strip the token from the URL immediately so it's not visible
        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.replaceState({ path: newUrl }, '', newUrl);
        return token;
    }
    
    return localStorage.getItem("ronja_sync_token");
}

let CLOUD_STATE_ID = null;
let isSyncing = false;
let cloudSyncTimer = null;

function showLoginOverlay() {
    const overlay = document.getElementById("login-overlay");
    if (!overlay) return;
    overlay.style.display = "flex";
    
    const input = document.getElementById("login-token-input");
    const submitBtn = document.getElementById("login-submit-btn");
    const errorEl = document.getElementById("login-error");
    
    if (input) {
        input.value = "";
        input.focus();
    }
    if (errorEl) errorEl.style.display = "none";
    
    const handleLoginSubmit = async () => {
        const val = input.value.trim();
        if (!val) {
            showLoginError("Please enter an access key.");
            return;
        }
        
        submitBtn.disabled = true;
        submitBtn.textContent = "Verifying...";
        if (errorEl) errorEl.style.display = "none";
        
        // Initialize database client with entered token to check key
        initDbClient(val);

        if (!db) {
            showLoginError("Database connection not initialized.");
            submitBtn.disabled = false;
            submitBtn.textContent = "Unlock Planner";
            return;
        }

        try {
            // Check if key exists in supabase
            const { data, error } = await db
                .from('ronja_revision')
                .select('id')
                .eq('id', val)
                .maybeSingle();
                
            if (error) throw error;
            
            if (data) {
                // Success! Save token and proceed
                localStorage.setItem("ronja_sync_token", val);
                CLOUD_STATE_ID = val;
                overlay.style.display = "none";
                
                // Normal initialization after unlock
                await proceedWithInitialization();
            } else {
                showLoginError("Invalid access key. Please try again.");
                initDbClient(null); // Reset database client
            }
        } catch (e) {
            console.error("Login verification failed:", e);
            showLoginError("Connection failed. Check your network.");
            initDbClient(null); // Reset database client
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = "Unlock Planner";
        }
    };
    
    if (submitBtn) {
        submitBtn.onclick = handleLoginSubmit;
    }
    if (input) {
        input.onkeypress = (e) => {
            if (e.key === 'Enter') {
                handleLoginSubmit();
            }
        };
    }
}

function showLoginError(msg) {
    const errorEl = document.getElementById("login-error");
    if (errorEl) {
        errorEl.textContent = msg;
        errorEl.style.display = "block";
    }
}

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
            const changed = ensureStateSchema();
            
            // Sync to local storage
            localStorage.setItem("ronja_gcse_planner", JSON.stringify(state));
            
            if (changed) {
                triggerCloudSave();
            }
            
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

// Fetch configuration defaults from Supabase
async function fetchDefaults() {
    if (!db) return;
    try {
        const { data, error } = await db
            .from('ronja_revision')
            .select('state')
            .eq('id', 'defaults')
            .maybeSingle();
            
        if (error) throw error;
        
        if (data && data.state) {
            const defaults = data.state;
            if (defaults.exams) {
                EXAMS = defaults.exams;
            }
            if (defaults.default_schedule) {
                DEFAULT_SCHEDULE = defaults.default_schedule;
            }
            if (defaults.default_subtopics) {
                DEFAULT_SUBTOPICS = defaults.default_subtopics;
            }
            console.log("Successfully loaded defaults/configuration from Supabase.");
        }
    } catch (e) {
        console.warn("Failed to fetch defaults from Supabase, using local fallback:", e);
    }
}

// Initialize App
async function initApp() {
    CLOUD_STATE_ID = getSyncToken();
    
    if (!CLOUD_STATE_ID) {
        initDbClient(null);
        showLoginOverlay();
        return;
    }
    
    // Initialize database client with correct header
    initDbClient(CLOUD_STATE_ID);
    
    // Verify CLOUD_STATE_ID exists in Supabase
    if (db) {
        try {
            const { data, error } = await db
                .from('ronja_revision')
                .select('id')
                .eq('id', CLOUD_STATE_ID)
                .maybeSingle();
                
            if (error) throw error;
            
            if (!data) {
                // Token does not exist!
                localStorage.removeItem("ronja_sync_token");
                CLOUD_STATE_ID = null;
                initDbClient(null); // Reset client
                showLoginOverlay();
                showLoginError("Invalid access key. Access key not found in database.");
                return;
            }
        } catch (e) {
            console.error("Token verification failed on startup:", e);
            // If it's a network issue, let them view the cached offline data
        }
    }
    
    await proceedWithInitialization();
}

async function proceedWithInitialization() {
    if (db) {
        await fetchDefaults();
    }
    
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

// Normalize/upgrade schedule structure
// Rearrange post-exam revision slots dynamically (constraint solver)
// Rearrange post-exam revision slots dynamically (constraint solver)
function rearrangePostExamRevision() {
    if (!state.schedule) return false;
    
    const LATEST_REVISION_DATES = {
        "Art Coursework": "2026-05-31",
        "Chemistry": "2026-06-09",
        "English Literature": "2026-06-08",
        "English Language": "2026-06-15",
        "Film Studies": "2026-06-15",
        "Physics": "2026-06-16",
        "History": "2026-06-17",
        "Maths": "2026-06-21"
    };

    const dailySlots = {};
    for (const date in state.schedule) {
        dailySlots[date] = [];
        state.schedule[date].forEach(t => {
            for (let i = 0; i < t.hours; i++) {
                dailySlots[date].push({ subject: t.subject, completed: t.completed });
            }
        });
    }

    const dates = Object.keys(dailySlots).sort();

    let changed = true;
    let anySwaps = false;
    while (changed) {
        changed = false;
        for (let i = 0; i < dates.length; i++) {
            const d1 = dates[i];
            if (d1 === "2026-05-24") continue; // Yesterday, keep plan!
            
            for (let s1Idx = 0; s1Idx < dailySlots[d1].length; s1Idx++) {
                const slot1 = dailySlots[d1][s1Idx];
                const maxDate1 = LATEST_REVISION_DATES[slot1.subject];
                
                if (maxDate1 && d1 > maxDate1) {
                    let swapFound = false;
                    for (let j = 0; j < dates.length; j++) {
                        const d2 = dates[j];
                        if (d2 === "2026-05-24") continue;
                        if (d2 > maxDate1) continue;
                        
                        for (let s2Idx = 0; s2Idx < dailySlots[d2].length; s2Idx++) {
                            const slot2 = dailySlots[d2][s2Idx];
                            const maxDate2 = LATEST_REVISION_DATES[slot2.subject];
                            
                            if (maxDate2 && d1 <= maxDate2 && slot1.subject !== slot2.subject) {
                                dailySlots[d1][s1Idx] = slot2;
                                dailySlots[d2][s2Idx] = slot1;
                                swapFound = true;
                                changed = true;
                                anySwaps = true;
                                break;
                            }
                        }
                        if (swapFound) break;
                    }
                    if (swapFound) break;
                }
            }
            if (changed) break;
        }
    }

    const newSchedule = {};
    for (const date of dates) {
        const slots = dailySlots[date];
        const tasks = [];
        slots.forEach(s => {
            const existing = tasks.find(t => t.subject === s.subject && t.completed === s.completed);
            if (existing) {
                existing.hours += 1;
            } else {
                tasks.push({ subject: s.subject, hours: 1, completed: s.completed });
            }
        });
        newSchedule[date] = tasks;
    }
    
    state.schedule = newSchedule;
    return anySwaps;
}

function ensureStateSchema() {
    let schemaModified = false;
    if (!state) {
        state = {};
        schemaModified = true;
    }
    if (!state.schedule || Object.keys(state.schedule).length === 0) {
        state.schedule = JSON.parse(JSON.stringify(DEFAULT_SCHEDULE));
        schemaModified = true;
    }
    if (state.schedule && !state.schedule["2026-06-22"]) {
        state.schedule["2026-06-22"] = [];
        schemaModified = true;
    }
    
    // Rearrange post-exam revision slots dynamically
    if (rearrangePostExamRevision()) {
        schemaModified = true;
    }

    if (!state.subtopics) {
        state.subtopics = {};
        schemaModified = true;
    }
    for (const sub in DEFAULT_SUBTOPICS) {
        if (!state.subtopics[sub] || state.subtopics[sub].length === 0) {
            state.subtopics[sub] = DEFAULT_SUBTOPICS[sub].map(t => ({ name: t, completed: false }));
            schemaModified = true;
        }
    }
    
    if (!state.notes) {
        state.notes = {};
        schemaModified = true;
    }
    if (!state.completedDays) {
        state.completedDays = {};
        schemaModified = true;
    }
    if (!state.theme) {
        state.theme = "dark";
        schemaModified = true;
    }
    if (!state.exams || state.exams.length === 0) {
        state.exams = JSON.parse(JSON.stringify(EXAMS));
        schemaModified = true;
    }
    return schemaModified;
}

// Load state from localStorage or defaults
function loadState() {
    const savedState = localStorage.getItem("ronja_gcse_planner");
    if (savedState) {
        try {
            state = JSON.parse(savedState);
            const changed = ensureStateSchema();
            if (changed) {
                saveState();
            }
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

    // Modal Add Slot Listener
    const addSlotBtn = document.getElementById("modal-add-slot-btn");
    if (addSlotBtn) {
        addSlotBtn.addEventListener("click", () => {
            if (activeModalDate) {
                if (!state.schedule[activeModalDate]) {
                    state.schedule[activeModalDate] = [];
                }
                state.schedule[activeModalDate].push({
                    subject: "",
                    hours: 1,
                    completed: false
                });
                saveState();
                setupModalSubjectSelectors(activeModalDate);
                renderModalTasks(activeModalDate);
                renderAll();
            }
        });
    }

    // Supabase Sync Buttons
    const pushBtn = document.getElementById("sync-push-btn");
    const pullBtn = document.getElementById("sync-pull-btn");
    
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

    // Exam Modal Action Listeners
    const addExamBtn = document.getElementById("add-exam-btn");
    if (addExamBtn) addExamBtn.addEventListener("click", openExamModal);
    
    const closeExamModalBtn = document.getElementById("close-exam-modal-btn");
    if (closeExamModalBtn) closeExamModalBtn.addEventListener("click", closeExamModal);
    
    const cancelExamBtn = document.getElementById("cancel-exam-btn");
    if (cancelExamBtn) cancelExamBtn.addEventListener("click", closeExamModal);
    
    const saveExamBtn = document.getElementById("save-exam-btn");
    if (saveExamBtn) saveExamBtn.addEventListener("click", saveNewExam);
    
    const examModal = document.getElementById("exam-modal");
    if (examModal) {
        examModal.addEventListener("click", (e) => {
            if (e.target.id === "exam-modal") closeExamModal();
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
        
        const subjectDisplayName = task.subject || "Unassigned Subject";
        item.innerHTML = `
            <div class="task-checkbox">
                <i data-lucide="check"></i>
            </div>
            <div class="task-details">
                <span class="task-subject">${subjectDisplayName}</span>
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
    
    // Sort exams by date, keeping track of original index
    const sortedExams = (state.exams || [])
        .map((exam, idx) => ({ ...exam, originalIndex: idx }))
        .sort((a, b) => new Date(a.date) - new Date(b.date));
    
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
            <div class="exam-right-group">
                <span class="exam-days-badge ${badgeClass}">${badgeText}</span>
                <button class="exam-delete-btn" title="Delete Exam" data-idx="${exam.originalIndex}" type="button">
                    <i data-lucide="trash-2"></i>
                </button>
            </div>
        `;
        
        const deleteBtn = item.querySelector(".exam-delete-btn");
        if (deleteBtn) {
            deleteBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                if (confirm(`Are you sure you want to delete the exam "${exam.name}"?`)) {
                    state.exams.splice(exam.originalIndex, 1);
                    saveState();
                    renderAll();
                }
            });
        }
        
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

// Render Subject Hours Histogram
function renderCalendarHistogram() {
    const barsContainer = document.getElementById("calendar-histogram-bars");
    if (!barsContainer) return;
    barsContainer.innerHTML = "";
    
    // Calculate total and completed hours per subject
    const subjectTotalHours = {};
    const subjectCompletedHours = {};
    SUBJECTS.forEach(sub => {
        subjectTotalHours[sub.name] = 0;
        subjectCompletedHours[sub.name] = 0;
    });
    
    for (const date in state.schedule) {
        state.schedule[date].forEach(t => {
            if (subjectTotalHours[t.subject] !== undefined) {
                subjectTotalHours[t.subject] += t.hours;
                if (t.completed) {
                    subjectCompletedHours[t.subject] += t.hours;
                }
            }
        });
    }
    
    SUBJECTS.forEach(sub => {
        const total = subjectTotalHours[sub.name] || 0;
        const completed = subjectCompletedHours[sub.name] || 0;
        const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
        
        const item = document.createElement("div");
        item.className = "histogram-bar-item";
        
        // Mute item if filtering and doesn't match
        const isMuted = currentCalendarFilter !== "all" && currentCalendarFilter !== sub.name;
        item.style.opacity = isMuted ? "0.35" : "1";
        item.style.transition = "opacity 0.25s ease";
        
        const label = document.createElement("div");
        label.className = "histogram-bar-label";
        
        const nameSpan = document.createElement("span");
        nameSpan.textContent = sub.name;
        
        const hoursSpan = document.createElement("span");
        hoursSpan.textContent = `${completed}/${total}h (${percentage}%)`;
        
        label.appendChild(nameSpan);
        label.appendChild(hoursSpan);
        
        const track = document.createElement("div");
        track.className = "histogram-bar-track";
        
        const fill = document.createElement("div");
        fill.className = `histogram-bar-fill ${sub.colorClass}`;
        fill.style.width = `${percentage}%`;
        
        track.appendChild(fill);
        item.appendChild(label);
        item.appendChild(track);
        
        // Interactive clicking on the histogram item to filter!
        item.style.cursor = "pointer";
        item.addEventListener("click", () => {
            if (currentCalendarFilter === sub.name) {
                currentCalendarFilter = "all";
            } else {
                currentCalendarFilter = sub.name;
            }
            renderCalendar();
        });
        
        barsContainer.appendChild(item);
    });
}

// Render Revision Calendar Grid
function renderCalendar() {
    renderCalendarHistogram();
    
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
        
        // Drag and drop zone listeners
        dayDiv.addEventListener("dragover", (e) => {
            e.preventDefault();
            dayDiv.classList.add("drag-hover");
        });
        
        dayDiv.addEventListener("dragleave", () => {
            dayDiv.classList.remove("drag-hover");
        });
        
        dayDiv.addEventListener("drop", (e) => {
            e.preventDefault();
            dayDiv.classList.remove("drag-hover");
            try {
                const data = JSON.parse(e.dataTransfer.getData("text/plain"));
                const { sourceDate, taskSubject } = data;
                const targetDate = dStr;
                
                if (sourceDate === targetDate) return;
                
                moveRevisionHour(sourceDate, targetDate, taskSubject);
            } catch (err) {
                console.error("Drop failed:", err);
            }
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
    const examsOnDay = (state.exams || []).filter(e => e.date === dStr);
    
    // Check if day is muted under the current filter
    if (currentCalendarFilter !== "all") {
        const hasMatchingTask = tasks.some(t => t.subject === currentCalendarFilter);
        const hasMatchingExam = examsOnDay.some(e => e.subject === currentCalendarFilter);
        if (!hasMatchingTask && !hasMatchingExam) {
            dayDiv.classList.add("day-muted");
        } else {
            dayDiv.classList.remove("day-muted");
        }
    } else {
        dayDiv.classList.remove("day-muted");
    }
    
    tasks.forEach(t => {
        for (let i = 0; i < t.hours; i++) {
            const badge = document.createElement("span");
            const subMeta = SUBJECTS.find(s => s.name === t.subject);
            const badgeClass = subMeta ? subMeta.colorClass : "unassigned";
            badge.className = `subject-badge ${badgeClass}`;
            badge.draggable = true;
            
            // Mute badge if filtering and doesn't match
            if (currentCalendarFilter !== "all" && t.subject !== currentCalendarFilter) {
                badge.classList.add("subject-muted");
            }
            
            const subjectDisplayName = t.subject || "Unassigned";
            const textNode = document.createTextNode(`${subjectDisplayName} (1h)`);
            badge.appendChild(textNode);

            const delBtn = document.createElement("button");
            delBtn.className = "badge-delete-btn";
            delBtn.innerHTML = "&times;";
            delBtn.title = `Delete 1h of ${subjectDisplayName}`;
            delBtn.addEventListener("click", (e) => {
                e.stopPropagation(); // Prevent opening modal
                if (state.schedule[dStr]) {
                    const taskIndex = state.schedule[dStr].findIndex(task => task.subject === t.subject);
                    if (taskIndex !== -1) {
                        state.schedule[dStr][taskIndex].hours -= 1;
                        if (state.schedule[dStr][taskIndex].hours <= 0) {
                            state.schedule[dStr].splice(taskIndex, 1);
                        }
                        saveState();
                        renderAll();
                    }
                }
            });
            badge.appendChild(delBtn);
            
            // Dragstart: pass drag payload & stop event propagation
            badge.addEventListener("dragstart", (e) => {
                e.stopPropagation();
                e.dataTransfer.setData("text/plain", JSON.stringify({
                    sourceDate: dStr,
                    taskSubject: t.subject
                }));
                e.dataTransfer.effectAllowed = "move";
                badge.classList.add("dragging");
            });
            
            badge.addEventListener("dragend", () => {
                badge.classList.remove("dragging");
            });
            
            subjectsDiv.appendChild(badge);
        }
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
    examsOnDay.forEach(e => {
        const examIndicator = document.createElement("div");
        const subMeta = SUBJECTS.find(s => s.name === e.subject);
        const badgeClass = subMeta ? subMeta.colorClass : "";
        examIndicator.className = `day-exam-indicator ${badgeClass}`;
        
        // Mute exam badge if filtering and doesn't match
        if (currentCalendarFilter !== "all" && e.subject !== currentCalendarFilter) {
            examIndicator.classList.add("subject-muted");
        }
        
        examIndicator.textContent = `📝 Exam: ${e.name}`;
        dayDiv.appendChild(examIndicator);
    });
}

// Move revision hour between days
function moveRevisionHour(sourceDate, targetDate, subject) {
    if (!state.schedule[sourceDate] || !state.schedule[targetDate]) return;
    
    // Find matching task in source date
    const sourceTasks = state.schedule[sourceDate];
    const taskIndex = sourceTasks.findIndex(t => t.subject === subject);
    if (taskIndex === -1) return;
    
    const task = sourceTasks[taskIndex];
    
    // Decrement hours in source date
    task.hours -= 1;
    const taskWasCompleted = task.completed;
    if (task.hours <= 0) {
        sourceTasks.splice(taskIndex, 1);
    }
    
    // Add to target date (merge if same subject & completion status exists)
    const targetTasks = state.schedule[targetDate];
    const targetTask = targetTasks.find(t => t.subject === subject && t.completed === taskWasCompleted);
    
    if (targetTask) {
        targetTask.hours += 1;
    } else {
        targetTasks.push({
            subject: subject,
            hours: 1,
            completed: taskWasCompleted
        });
    }
    
    // Save locally and schedule cloud push
    saveState();
    
    // Full refresh of DOM
    renderAll();
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
    const examsToday = (state.exams || []).filter(e => e.date === dateStr);
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

function openExamModal() {
    const modal = document.getElementById("exam-modal");
    if (!modal) return;
    
    document.getElementById("exam-name-input").value = "";
    document.getElementById("exam-date-input").value = "";
    document.getElementById("exam-error-msg").style.display = "none";
    document.getElementById("exam-error-msg").textContent = "";
    
    const select = document.getElementById("exam-subject-select");
    select.innerHTML = "";
    SUBJECTS.forEach(sub => {
        const opt = document.createElement("option");
        opt.value = sub.name;
        opt.textContent = sub.name;
        select.appendChild(opt);
    });
    
    modal.classList.add("open");
}

function closeExamModal() {
    const modal = document.getElementById("exam-modal");
    if (modal) {
        modal.classList.remove("open");
    }
}

function saveNewExam() {
    const name = document.getElementById("exam-name-input").value.trim();
    const subject = document.getElementById("exam-subject-select").value;
    const dateVal = document.getElementById("exam-date-input").value;
    const errorMsg = document.getElementById("exam-error-msg");
    
    if (!name) {
        errorMsg.textContent = "Please enter an exam name.";
        errorMsg.style.display = "block";
        return;
    }
    if (!dateVal) {
        errorMsg.textContent = "Please select a date.";
        errorMsg.style.display = "block";
        return;
    }
    
    if (!state.exams) state.exams = [];
    state.exams.push({
        name: name,
        subject: subject,
        date: dateVal
    });
    
    saveState();
    closeExamModal();
    renderAll();
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
        
        const subjectDisplayName = t.subject || "Unassigned Subject";
        item.innerHTML = `
            <div class="task-checkbox">
                <i data-lucide="check"></i>
            </div>
            <div class="task-details">
                <span class="task-subject">${subjectDisplayName}</span>
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
    const container = document.getElementById("modal-revision-slots-container");
    if (!container) return;
    container.innerHTML = "";
    
    const tasks = state.schedule[dateStr] || [];
    
    tasks.forEach((t, idx) => {
        const row = createRevisionSlotRow(t, idx, dateStr);
        container.appendChild(row);
    });
    
    lucide.createIcons();
}

function createRevisionSlotRow(task, idx, dateStr) {
    const row = document.createElement("div");
    row.className = "revision-slot-row";
    row.dataset.idx = idx;
    
    const select = document.createElement("select");
    select.className = "slot-subject-select";
    
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Select Subject...";
    placeholder.disabled = true;
    if (!task.subject) {
        placeholder.selected = true;
    }
    select.appendChild(placeholder);
    
    SUBJECTS.forEach(sub => {
        const opt = document.createElement("option");
        opt.value = sub.name;
        opt.textContent = sub.name;
        if (task.subject === sub.name) {
            opt.selected = true;
        }
        select.appendChild(opt);
    });
    
    const hoursInput = document.createElement("input");
    hoursInput.type = "number";
    hoursInput.min = "1";
    hoursInput.max = "10";
    hoursInput.className = "slot-hours-input";
    hoursInput.value = task.hours;
    hoursInput.title = "Number of hours";
    
    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "slot-delete-btn";
    deleteBtn.title = "Delete session";
    deleteBtn.innerHTML = `<i data-lucide="trash-2"></i>`;
    
    select.addEventListener("change", () => saveModalSlots(dateStr));
    hoursInput.addEventListener("change", () => saveModalSlots(dateStr));
    hoursInput.addEventListener("input", () => saveModalSlots(dateStr));
    deleteBtn.addEventListener("click", () => {
        state.schedule[dateStr].splice(idx, 1);
        saveState();
        setupModalSubjectSelectors(dateStr);
        renderModalTasks(dateStr);
        renderAll();
    });
    
    row.appendChild(select);
    row.appendChild(hoursInput);
    row.appendChild(deleteBtn);
    
    return row;
}

function saveModalSlots(dateStr) {
    const container = document.getElementById("modal-revision-slots-container");
    const rows = container.querySelectorAll(".revision-slot-row");
    
    const tasks = [];
    rows.forEach((row, idx) => {
        const select = row.querySelector(".slot-subject-select");
        const hoursInput = row.querySelector(".slot-hours-input");
        const subject = select.value;
        const hours = parseInt(hoursInput.value) || 1;
        
        const existingTask = state.schedule[dateStr] && state.schedule[dateStr][idx];
        const completed = existingTask ? existingTask.completed : false;
        
        tasks.push({
            subject: subject,
            hours: hours,
            completed: completed
        });
    });
    
    state.schedule[dateStr] = tasks;
    saveState();
    renderModalTasks(dateStr);
    renderAll();
}

// Start the app on load
window.addEventListener("DOMContentLoaded", initApp);
