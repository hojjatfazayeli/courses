/*
  این تنها فایلی است که برای به‌روزرسانی سایت لازم است ویرایش کنید.
  نیازی به دست‌زدن به index.html، style.css یا app.js نیست.

  --- عکس پروفایل استاد ---
  یک فایل عکس (مثلاً professor.jpg) را کنار همین فایل‌ها در ریپازیتوری آپلود کنید
  و نام فایل را جلوی SITE_INFO.photo بنویسید. اگر عکس پیدا نشود، به‌جایش
  حروف اول نام شما به‌صورت خودکار نمایش داده می‌شود. همین قانون برای عکس
  هر TA هم صادق است (فیلد photo در آبجکت هر TA).

  --- ایمیل، تلگرام و برنامه تدریس ---
  SITE_INFO.email       → آدرس ایمیل شما (روی آیکن ایمیل کلیک شود، ایمیل باز می‌شود)
  SITE_INFO.telegram    → لینک کامل تلگرام شما، مثل https://t.me/username
  SITE_INFO.scheduleUrl → لینک برنامه تدریس (یک PDF، عکس یا صفحه‌ی گوگل‌درایو/دیگر)

  --- دروس ---
  هر درس یک آیتم در آرایه‌ی COURSES است و ۴ بخش دارد:
    1) tas              → لیست دستیاران آموزشی (TA) آن درس
    2) videoSessions    → جلسات ویدیویی درس (تدریس اصلی)
    3) exerciseSessions → جلسات حل تمرین
    4) files            → آرشیو فایل‌های درس (جزوه، تمرین، نمونه‌سؤال و ...)

  هرکدام از این بخش‌ها می‌توانند آرایه‌ی خالی [] باشند تا وقتی محتوایی برای
  آن‌ها ندارید؛ در این حالت پیام «هنوز موردی اضافه نشده» نمایش داده می‌شود.

  --- ساختار هر TA ---
  {
    photo:   "ta-name.jpg"   (اختیاری، اگر نباشد حروف اول نام نشان داده می‌شود)
    name:    "نام دستیار"
    field:   "رشته/گرایش تحصیلی"
    email:   "email@example.com"
    term:    "ترمی که همکاری داشته، مثل Fall 2025"
    linkedin:"لینک کامل پروفایل لینکدین"
    resumeUrl: "لینک دانلود رزومه (فایل PDF و مانند آن)"
  }

  --- ساختار هر جلسه (ویدیو یا حل تمرین) ---
  {
    title:       "عنوان جلسه (به انگلیسی)"
    description: "توضیح کوتاه"
    watchUrl:    "لینک تماشا (آپارات، یوتیوب و ...)"
    downloadUrl: "لینک دانلود (اختیاری، اگر ندارید خالی بگذارید)"
  }

  --- ساختار هر فایل آرشیو ---
  {
    title:       "عنوان فایل"
    description: "توضیح کوتاه فایل"
    downloadUrl: "لینک دریافت فایل"
  }
*/

const SITE_INFO = {
  photo: "professor.jpg",
  name: "Hojjat Fazayeli",
  title: "PHD Candidate in Computer Engineering",
  affiliation: "Department of Computer Engineering and Information Technology, Faculty of Engineering, Islamic Azad University, Neyshabur Branch",
  note: "Course materials, teaching assistants, lecture recordings and problem-solving sessions for every course I teach. Any dissemination of the content from this address without the instructor's permission is prohibited.",
  lastUpdated: "September 2026",
  email: "hojjatfazayeli@iau.ac.ir",
  telegram: "https://t.me/hojjatfazayeli",
  scheduleUrl: "https://mega.nz/file/3y5U0QrY#xYfmcIRKlM8glsCzCIZvPI4JeoAgaKJ8U6Ra583CrdQ"
};

// Reusable placeholder so every course starts from a consistent, empty shape.
function emptyCourse(id, title, term) {
  return { id, title, term, tas: [], videoSessions: [], exerciseSessions: [], files: [] };
}

const COURSES = [
  emptyCourse("dsa", "Data Structures and Algorithms", "Fall 2026"),
  emptyCourse("automata", "Theory of Languages and Automata", "Fall 2026"),
  emptyCourse("logic-circuits", "Logic Circuits", "Fall 2026"),
  emptyCourse("os", "Operating Systems", "Fall 2026"),
  emptyCourse("algorithm-design", "Algorithm Design", "Fall 2026"),
  emptyCourse("advanced-programming", "Advanced Programming", "Fall 2026"),
  emptyCourse("discrete-math", "Discrete Mathematics", "Fall 2026"),
  emptyCourse("software-engineering", "Software Engineering", "Fall 2026"),
  emptyCourse("os-lab", "Operating Systems Lab", "Fall 2026"),
  emptyCourse("se-lab", "Software Engineering Lab", "Fall 2026")
];

// ---- Sample content for the first course, so you can see the structure ----
// Copy this pattern into any other course above (or replace it) once you
// have real information. Feel free to delete this sample entirely.
COURSES[0].tas.push({
  photo: "1787834036209.png",
  name: "Mahdiye sadat Joghratian",
  field: "M.Sc. Student, Software Engineering",
  email: "mahdiyesadat.joghratian24@gmail.com",
  term: "Fall 2026 - Now",
  linkedin: "https://www.linkedin.com/in/mahdiyesadat-joghratian/",
  resumeUrl: "https://www.linkedin.com/in/mahdiyesadat-joghratian/"
});

COURSES[0].videoSessions.push(
  {
        title: "Course Introduction & Complexity Analysis",
        description: "Course overview, grading policy, and an introduction to time and space complexity (Big-O notation).",
        watchUrl: "https://mega.nz/embed/OmAkkRwT#q4LvsJFaF-eB5NM8BgxICAUG_pPMDLS8Xq15ATunyAw",
        downloadUrl: "https://mega.nz/file/OmAkkRwT#q4LvsJFaF-eB5NM8BgxICAUG_pPMDLS8Xq15ATunyAw"
      },
{
  title: "Types of Tree Traversal: DLR, LRD, and LDR",
  description: "This video introduces the main types of tree traversal in data structures, including DLR, LRD, and LDR. It explains the order in which nodes are visited in each traversal method." ,
  watchUrl: "https://mega.nz/embed/Hy4y2DbD#wzru2aF3HPcyIK00HUQrluFiSu87EmzywKK1It2QUJM",
  downloadUrl: "https://mega.nz/file/Hy4y2DbD#wzru2aF3HPcyIK00HUQrluFiSu87EmzywKK1It2QUJM"
},
{
  title: "General Trees: Traversal Methods and Conversion to Binary Trees",
  description: "This video introduces general trees and their traversal methods, and explains how a general tree can be converted into a binary tree. It covers the basic concepts and representation techniques used in data structures.",
  watchUrl: "https://mega.nz/embed/imhj3bwa#D6ixOA-lO_AxsnWn9i-rA8vDVz9lECFWTjfGS8vhGsg",
  downloadUrl: "https://mega.nz/file/imhj3bwa#D6ixOA-lO_AxsnWn9i-rA8vDVz9lECFWTjfGS8vhGsg"
},

{
  title: "Forests and Tree Traversal Methods: Inorder, Preorder, and Postorder",
  description: "This video introduces forests and explains the main tree traversal methods, including inorder, preorder, and postorder. It demonstrates how nodes are visited in each traversal method." ,
  watchUrl: "https://mega.nz/embed/rr4TRCRC#UgBs8ekjWlwp4HeA5rYFOGO2-qfBfpMRYNPzf9jI8S4",
  downloadUrl: "https://mega.nz/file/rr4TRCRC#UgBs8ekjWlwp4HeA5rYFOGO2-qfBfpMRYNPzf9jI8S4"
},
{
  title: "Tree Representation in Computer Memory and Arrays",
  description: "This video explains how trees are stored and represented in computer memory, with a focus on array-based representation. It covers the basic principles of storing tree nodes using arrays.",
  watchUrl: "https://mega.nz/embed/33gWDJ4K#IQm419ZH42wiCT4qYYu2Hh0NRHEgsnE7Sqc7bKV8TXI",
  downloadUrl: "https://mega.nz/file/33gWDJ4K#IQm419ZH42wiCT4qYYu2Hh0NRHEgsnE7Sqc7bKV8TXI"
},
{
  title: "Linked List Method and Call Count Analysis for Algorithms",
  description: "This video explains the linked list method and how to count function calls in an algorithm. It also covers techniques for evaluating algorithm efficiency.",
  watchUrl: "https://mega.nz/embed/f3AwHSDS#cps6f7uSvi5T92ZfOdX1omGYPTSNylY6QfKxdjuFlwU",
  downloadUrl: "https://mega.nz/file/f3AwHSDS#cps6f7uSvi5T92ZfOdX1omGYPTSNylY6QfKxdjuFlwU"
},
{
  title: "Solving More Examples on Traversal Count",
  description: "This video walks through more examples on counting traversals in algorithms. It helps you practice and better understand how traversal operations are analyzed.",
  watchUrl: "https://mega.nz/embed/nuohCRSK#_e3U4mhzgj2zXphbBrlijBkR_nJw_Tx5OEMlczD4MVc",
  downloadUrl: "https://mega.nz/file/nuohCRSK#_e3U4mhzgj2zXphbBrlijBkR_nJw_Tx5OEMlczD4MVc"
},
{
  title: "Binary Tree and How to Identify It",
  description: "This video explains what a binary tree is and how to recognize one. It covers the key properties and structure that define a binary tree.",
  watchUrl: "https://mega.nz/embed/qq4VBKBb#ACxUiBbBQaOBwF9q4kuCb5w6NXXrr4NlN9PExiWktDU",
  downloadUrl: "https://mega.nz/file/qq4VBKBb#ACxUiBbBQaOBwF9q4kuCb5w6NXXrr4NlN9PExiWktDU"
},
{
  title: "Search and Insert in Binary Search Tree (BST) and BST Construction Order",
  description: "This video covers searching and inserting nodes in a Binary Search Tree (BST). It also explains the order of building a BST and its effect on the tree structure.",
  watchUrl: "https://mega.nz/embed/jupgHDoY#D2HpwTlqIapZG81rfHinXt79VoXsgw6oPktydCdbV_w",
  downloadUrl: "https://mega.nz/file/jupgHDoY#D2HpwTlqIapZG81rfHinXt79VoXsgw6oPktydCdbV_w"
},
{
  title: "Finding Min and Max in a Tree, Deletion in BST, and AVL Tree",
  description: "This video explains how to find the minimum and maximum values in a tree, how deletion works in a BST, and introduces the AVL tree and its balancing properties.",
  watchUrl: "https://mega.nz/embed/6yownDyK#G-5rANuX8eStIu50iPiJ6s3mNFcaeRTNSq2QtuNLcgI",
  downloadUrl: "https://mega.nz/file/6yownDyK#G-5rANuX8eStIu50iPiJ6s3mNFcaeRTNSq2QtuNLcgI"
},
{
  title: "AVL Tree Explained with More Details and Examples",
  description: "This video provides a detailed explanation of the AVL tree with additional examples. It covers its balancing rules, rotations, and how it maintains efficiency.",
  watchUrl: "https://mega.nz/embed/O6pynJTC#obrEBhH5199kaFUSCmsstin1hDCq54ca-gMy1A_To3c",
  downloadUrl: "https://mega.nz/file/O6pynJTC#obrEBhH5199kaFUSCmsstin1hDCq54ca-gMy1A_To3c"
},
{
  title: "Tree Rotations in Binary Trees: Left and Right Rotations with Key Examples",
  description: "This video explains rotations in binary trees, including left and right rotations. It also solves several important problems to help you master the concept.",
  watchUrl: "https://mega.nz/embed/viRGSR7B#R_2HaY85B3A_TwsycvJ8_GRjY3UneTC8bdTO3AvqjuM",
  downloadUrl: "https://mega.nz/file/viRGSR7B#R_2HaY85B3A_TwsycvJ8_GRjY3UneTC8bdTO3AvqjuM"
},
{
  title: "AVL Construction, Heap Tutorial, Min Tree, Max Tree, Complete Tree Tips, and Insertion in Max Heap",
  description: "This video covers building an AVL tree, an introduction to heaps, Min Tree and Max Tree structures, key points about complete trees, and insertion in a Max Heap.",
  watchUrl: "https://mega.nz/embed/zjBxkYwS#b3BfIXspwWSTl_vt5IoYJVs4Fe5L91_cxjqJqHCfaks",
  downloadUrl: "https://mega.nz/file/zjBxkYwS#b3BfIXspwWSTl_vt5IoYJVs4Fe5L91_cxjqJqHCfaks"
},
{
  title: "Heap Construction Method and Deleting the Maximum from a Heap",
  description: "This video explains how to build a heap step by step. It also demonstrates how to delete the maximum element from a heap and restore the heap property.",
  watchUrl: "https://mega.nz/embed/GiI2maqC#71wn3UOpTU3l28fkNbavrnB2hC8eCNLSkQMeRHDF5Bw",
  downloadUrl: "https://mega.nz/file/GiI2maqC#71wn3UOpTU3l28fkNbavrnB2hC8eCNLSkQMeRHDF5Bw"
},
{
  title: "Building Min Heaps with Different Node Counts, Merging Heaps, Priority Queue, Linked List Types, and Deep Tree Explained",
  description: "This video covers building Min Heaps with varying node counts, merging two heaps, and an introduction to priority queues and types of linked lists. It also explains the Deep Tree and its key points.",
  watchUrl: "https://mega.nz/embed/fn5yUIjC#3W0Esiio9Ux9EZhNvqZUHu5tQlNAj1NWrRpkVJunmYU",
  downloadUrl: "https://mega.nz/file/fn5yUIjC#3W0Esiio9Ux9EZhNvqZUHu5tQlNAj1NWrRpkVJunmYU"
},
{
  title: "Insertion in Deep Tree, Deleting Minimum from Deep Tree, Min-Max Heap, 2-3-4 Tree, and Insertion in 2-3-4 Tree",
  description: "This video demonstrates insertion in a Deep Tree and deleting the minimum from it. It also introduces the Min-Max Heap, the structure of the 2-3-4 Tree, and insertion in a 2-3-4 Tree.",
  watchUrl: "https://mega.nz/embed/y2B1gZLS#Va-u94RBav8Rz8Yr8BqZwEPk8MsgOXX8PQHOa5FXHjc",
  downloadUrl: "https://mega.nz/file/y2B1gZLS#Va-u94RBav8Rz8Yr8BqZwEPk8MsgOXX8PQHOa5FXHjc"
},
{
  title: "B-Tree, Its Maximum and Minimum Height, and Red-Black Tree Explained",
  description: "This video explains the B-Tree structure along with its maximum and minimum height. It also covers the Red-Black Tree and its related properties and rules.",
  watchUrl: "https://mega.nz/embed/K2Q0ja5Y#TU46IGTfg5RIu7CIEkMuYB7pk3zsMkilg5n_zpxNblM",
  downloadUrl: "https://mega.nz/file/K2Q0ja5Y#TU46IGTfg5RIu7CIEkMuYB7pk3zsMkilg5n_zpxNblM"
},
{
  title: "One-Dimensional and Two-Dimensional Arrays, Memory Layout of 2D Arrays, and Three-Dimensional Arrays",
  description: "This video explains one-dimensional and two-dimensional arrays and how 2D arrays are stored in memory. It also introduces three-dimensional arrays and their structure.",
  watchUrl: "https://mega.nz/embed/2nQHmKRA#FJm_9_yUynbkS32u78PKk6Be89OuwDc85fxuO2nsOC4",
  downloadUrl: "https://mega.nz/file/2nQHmKRA#FJm_9_yUynbkS32u78PKk6Be89OuwDc85fxuO2nsOC4"
},
{
  title: "Matrix and Its Explanation",
  description: "This video provides a clear explanation of matrices, their structure, and how they are represented. It covers the basics needed to understand matrix operations and usage.",
  watchUrl: "https://mega.nz/embed/OvoQBQaY#kJI5dYzEJuzqYr1tsU3KbiNoesGXEpHNoX5Qa-yJGJ4",
  downloadUrl: "https://mega.nz/file/OvoQBQaY#kJI5dYzEJuzqYr1tsU3KbiNoesGXEpHNoX5Qa-yJGJ4"
},
{
  title: "Linked List, Singly Linked List, Creating a Node, and Insertion in a Singly Linked List",
  description: "This video explains linked lists and singly linked lists, including how to create a node. It also demonstrates how to insert elements into a singly linked list.",
  watchUrl: "https://mega.nz/embed/PygT2J7I#_5DKQUVRSVveDxH4UXW4-IDM1N0-LPe89B_NtM2H-wk",
  downloadUrl: "https://mega.nz/file/PygT2J7I#_5DKQUVRSVveDxH4UXW4-IDM1N0-LPe89B_NtM2H-wk"
},
{
  title: "Permutation, Doubly Linked List, and Deletion in a Doubly Linked List",
  description: "This video covers permutations along with the doubly linked list structure. It also demonstrates how to delete a node from a doubly linked list step by step.",
  watchUrl: "https://mega.nz/embed/a7IkQCob#1kmxxDg1v4Pt_WcXb3npfConTDEcoM_1Mstk9ryEQHk",
  downloadUrl: "https://mega.nz/file/a7IkQCob#1kmxxDg1v4Pt_WcXb3npfConTDEcoM_1Mstk9ryEQHk"
},
{
  title: "Circular Linked List, Insertion in It, and the Josephus Problem",
  description: "This video explains the circular linked list and how to insert elements into it. It also covers the Josephus problem and its solution using circular lists.",
  watchUrl: "https://mega.nz/embed/PvZgBIAA#ENoD-QOcbSznldrz-u-XEvQWq2xKQXzUYtNkuzDTmAo",
  downloadUrl: "https://mega.nz/file/PvZgBIAA#ENoD-QOcbSznldrz-u-XEvQWq2xKQXzUYtNkuzDTmAo"
},
{
  title: "Stack, Implementing a Stack with an Array, and Building a Stack with a Linked List",
  description: "This video explains the stack data structure and how to implement it using an array. It also demonstrates how to build a stack using a linked list.",
  watchUrl: "https://mega.nz/embed/unxUjBTI#kuNxNMOM4ktJaC29S9mGBCxCsqN7pjbUL6kR-63gdTc",
  downloadUrl: "https://mega.nz/file/unxUjBTI#kuNxNMOM4ktJaC29S9mGBCxCsqN7pjbUL6kR-63gdTc"
},
{
  title: "Implementing a Queue with an Array, More Solved Examples, and Building a Queue with a Linked List",
  description: "This video explains how to implement a queue using an array, along with more solved examples. It also demonstrates how to build a queue using a linked list.",
  watchUrl: "https://mega.nz/embed/TroSXIDC#3phR6pVb-CXAIckPYBpch8Vawms_2nqw2fhEE6HSlN8",
  downloadUrl: "https://mega.nz/file/TroSXIDC#3phR6pVb-CXAIckPYBpch8Vawms_2nqw2fhEE6HSlN8"
},
{
  title: "Sorting Algorithms and Their Categories, Selection Sort Tutorial and Key Points",
  description: "This video covers sorting algorithms and their different categories. It also teaches selection sort in detail along with its important key points.",
  watchUrl: "https://mega.nz/embed/G3JhEKKI#RIYTON9RDvpAC2hmnyRr_ZC5QJwiYq-jXfESX9pb_DA",
  downloadUrl: "https://mega.nz/file/G3JhEKKI#RIYTON9RDvpAC2hmnyRr_ZC5QJwiYq-jXfESX9pb_DA"
},
{
  title: "Bubble Sort, Optimized Bubble Sort, and Insertion Sort with Related Key Points",
  description: "This video explains bubble sort and its optimized version, along with insertion sort. It also covers the key points and tips related to each sorting method.",
  watchUrl: "https://mega.nz/embed/GzIU0DqK#j90AI7fGD_zqbrDd5cpddNr8dYIV-FvnjV3cxLlL55M",
  downloadUrl: "https://mega.nz/file/GzIU0DqK#j90AI7fGD_zqbrDd5cpddNr8dYIV-FvnjV3cxLlL55M"
},
{
  title: "Quick Sort, Partition, and Merge Sort and How It Works",
  description: "This video explains quick sort and the partition process in detail. It also covers merge sort and demonstrates how it works step by step.",
  watchUrl: "https://mega.nz/embed/HmJETYZQ#QF7ZlI9BZgSChQpm8cvpRRFFrxBZW2XnqMVjwjNgcmo",
  downloadUrl: "https://mega.nz/file/HmJETYZQ#QF7ZlI9BZgSChQpm8cvpRRFFrxBZW2XnqMVjwjNgcmo"
},
);

COURSES[0].exerciseSessions.push({
  title: "Practice 1",
  description: "",
  watchUrl: "https://mega.nz/embed/KnRhhQZT#SRwWEMk3yRM8wkvMibaBTvruHp4M5cKxiaVowZPWDs8",
  downloadUrl: "https://mega.nz/file/KnRhhQZT#SRwWEMk3yRM8wkvMibaBTvruHp4M5cKxiaVowZPWDs8"
},
{
  title: "Practice 2",
  description: "",
  watchUrl: "https://mega.nz/embed/Wr5SEDKT#-OrD63QZw0PZrKiHN_XcEmwY4HTUIdIqHGZ2AbRkKg8",
  downloadUrl: "https://mega.nz/file/Wr5SEDKT#-OrD63QZw0PZrKiHN_XcEmwY4HTUIdIqHGZ2AbRkKg8"
},
{
  title: "Practice 3",
  description: "",
  watchUrl: "https://mega.nz/embed/fjxzWaZQ#YjM0SnEpLYeYGi5GmhqFEicJQLm7RVHP1lcHNFRNjuY",
  downloadUrl: "https://mega.nz/file/fjxzWaZQ#YjM0SnEpLYeYGi5GmhqFEicJQLm7RVHP1lcHNFRNjuY"
},
{
  title: "Practice 4",
  description: "",
  watchUrl: "https://mega.nz/embed/fzZRwQwD#0f0zYzFpK0VWn_xe1_J2--s9TY75PrdsAh-E5XshbGw",
  downloadUrl: "https://mega.nz/file/fzZRwQwD#0f0zYzFpK0VWn_xe1_J2--s9TY75PrdsAh-E5XshbGw"
},
{
  title: "Practice 5",
  description: "",
  watchUrl: "https://mega.nz/embed/j2hRmRpZ#ZKkJM3OX4-cX_Ox4DA-YmrHgvKuRHoli8xpKy-lyF-E",
  downloadUrl: "https://mega.nz/file/j2hRmRpZ#ZKkJM3OX4-cX_Ox4DA-YmrHgvKuRHoli8xpKy-lyF-E"
},
{
  title: "Practice 6",
  description: "",
  watchUrl: "https://mega.nz/embed/GnhCgQJR#48UfRlVC5HHFk-f9l7BTu31xT-Dwy69q_jxzoANAGIA",
  downloadUrl: "https://mega.nz/file/GnhCgQJR#48UfRlVC5HHFk-f9l7BTu31xT-Dwy69q_jxzoANAGIA"
},
{
  title: "Practice 7",
  description: "",
  watchUrl: "https://mega.nz/embed/a7gkWQLL#GLnhZfZGTo9u81i2kbTurWQkKzUB4JkRQ8cAGkRoh90",
  downloadUrl: "https://mega.nz/file/a7gkWQLL#GLnhZfZGTo9u81i2kbTurWQkKzUB4JkRQ8cAGkRoh90"
},
{
  title: "Practice 8",
  description: "",
  watchUrl: "https://mega.nz/embed/OjZTBQqB#QjJ_Pkn5jqIlsHDAr_1eFI5ONc4iYvG2YXiCfym7L88",
  downloadUrl: "https://mega.nz/file/OjZTBQqB#QjJ_Pkn5jqIlsHDAr_1eFI5ONc4iYvG2YXiCfym7L88"
},
{
  title: "Practice 9",
  description: "",
  watchUrl: "https://mega.nz/embed/ryBXQAxR#xsoka4ew17XCan3xqhTMYx1_nDhTicnpbX_KpanaVvs",
  downloadUrl: "https://mega.nz/file/ryBXQAxR#xsoka4ew17XCan3xqhTMYx1_nDhTicnpbX_KpanaVvs"
},
{
  title: "Practice 10",
  description: "",
  watchUrl: "https://mega.nz/embed/mjgkQLyb#dwU3mIsVO0pQSYSfgFfmOz6_2VGtyDInz67EfECDFnI",
  downloadUrl: "https://mega.nz/file/mjgkQLyb#dwU3mIsVO0pQSYSfgFfmOz6_2VGtyDInz67EfECDFnI"
},
{
  title: "Practice 11",
  description: "",
  watchUrl: "https://mega.nz/embed/SmomSJrZ#gtJQKAnSvVip6GAZUMz2H-B_xzvTf-fhtTsq72EawLU",
  downloadUrl: "https://mega.nz/file/SmomSJrZ#gtJQKAnSvVip6GAZUMz2H-B_xzvTf-fhtTsq72EawLU"
},
{
  title: "Practice 12",
  description: "",
  watchUrl: "https://mega.nz/embed/T7ZjCQpK#tWJOzY1Vc5RjGLOhbRxO8LBqUU0idNlDj5n9TLr7CsE",
  downloadUrl: "https://mega.nz/file/T7ZjCQpK#tWJOzY1Vc5RjGLOhbRxO8LBqUU0idNlDj5n9TLr7CsE"
},
{
  title: "Practice 13",
  description: "",
  watchUrl: "https://mega.nz/embed/e2omWY6Y#_GWK8rf9VpZGfwXVJeBsO0jk7ZM6Sv42PbWUwQc1u4I",
  downloadUrl: "https://mega.nz/file/e2omWY6Y#_GWK8rf9VpZGfwXVJeBsO0jk7ZM6Sv42PbWUwQc1u4I"
},
{
  title: "Practice 14",
  description: "",
  watchUrl: "https://mega.nz/embed/XzIChCBT#QfyVr-yCRMB4920W_W8U2RR_MiYZFVkExVHFNXWeVug",
  downloadUrl: "https://mega.nz/file/XzIChCBT#QfyVr-yCRMB4920W_W8U2RR_MiYZFVkExVHFNXWeVug"
},
{
  title: "Practice 15",
  description: "",
  watchUrl: "https://mega.nz/embed/q3o2BCDa#Xw-_z6CXPZJVAVkubwCaiKRKUBmjo8prLq6qrmRJku8",
  downloadUrl: "https://mega.nz/file/q3o2BCDa#Xw-_z6CXPZJVAVkubwCaiKRKUBmjo8prLq6qrmRJku8"
},
{
  title: "Practice 16",
  description: "",
  watchUrl: "https://mega.nz/embed/enZSkD5S#tuuCB6XLppebcB0p4a7Nhb_TnevOOuIQuWlIOj4ZR8Y",
  downloadUrl: "https://mega.nz/file/enZSkD5S#tuuCB6XLppebcB0p4a7Nhb_TnevOOuIQuWlIOj4ZR8Y"
},
{
  title: "Practice 17",
  description: "",
  watchUrl: "https://mega.nz/embed/b2IXyBpY#e5EXbGmwNJrD_pnBAA9NOBT2C1AAoGngAsIcoWp01bA",
  downloadUrl: "https://mega.nz/file/b2IXyBpY#e5EXbGmwNJrD_pnBAA9NOBT2C1AAoGngAsIcoWp01bA"
},
{
  title: "Practice 18",
  description: "",
  watchUrl: "https://mega.nz/embed/mnwXGKBY#cgiObxPO92MGDXRz4ThF3qrd5LojIr8MP-2dunQOE9U",
  downloadUrl: "https://mega.nz/file/mnwXGKBY#cgiObxPO92MGDXRz4ThF3qrd5LojIr8MP-2dunQOE9U"
},
{
  title: "Practice 19",
  description: "",
  watchUrl: "https://mega.nz/embed/yqRRyRgK#-TphjHM4MZj9e8ctVeM1V9w9MW8na5WCMfWfEWkO71s",
  downloadUrl: "https://mega.nz/file/yqRRyRgK#-TphjHM4MZj9e8ctVeM1V9w9MW8na5WCMfWfEWkO71s"
},
{
  title: "Practice 20",
  description: "",
  watchUrl: "https://mega.nz/embed/SyBWBbba#TPDn47vCXo7s27TJLrLL8NNsOQds5bfFnE9rC-LfL-c",
  downloadUrl: "https://mega.nz/file/SyBWBbba#TPDn47vCXo7s27TJLrLL8NNsOQds5bfFnE9rC-LfL-c"
},
{
  title: "Practice 21",
  description: "",
  watchUrl: "https://mega.nz/embed/irgGyLyL#srzbttno_NixJYa5rl2lCceIHz5nLpGTeUaiAjJsqz8",
  downloadUrl: "https://mega.nz/file/irgGyLyL#srzbttno_NixJYa5rl2lCceIHz5nLpGTeUaiAjJsqz8"
},
{
  title: "Practice 22",
  description: "",
  watchUrl: "https://mega.nz/embed/6qYiCIRC#AcgUAIx7cQshdBwRHXUYX4RR0l6CyRxKopLpCshTw7s",
  downloadUrl: "https://mega.nz/file/6qYiCIRC#AcgUAIx7cQshdBwRHXUYX4RR0l6CyRxKopLpCshTw7s"
},
);

COURSES[0].files.push({
  title: " Session 1 ",
  description: "Simple and special trees",
  downloadUrl: "https://mega.nz/file/vqgy3ICQ#sOyasDX2RLJY5UYaaFAuOulxwrS3ajo-OXkae6ObfNM"
},
{
  title: " Session 2 ",
  description: "Array & Linked List & Queue & Stack",
  downloadUrl: "https://mega.nz/file/735glQQL#grFpFh6iDGMzrjX5HmHa93wEr02QPC-RMLwekkEGv54"
},
{
  title: " Session 3 ",
  description: "Sorting Algorithms",
  downloadUrl: "https://mega.nz/file/GrJi1bQR#iRjFLXpp7_Cnuxvh-ggi6GAJO-3QKTHh2ZBpHe6tyTY"
},
{
  title: " Sample Exercise",
  description: "Comprehensive Phase 1 Exercise",
  downloadUrl: "https://mega.nz/file/mugChBpB#EkX2ysWtqts0642v5ThRJisk4bMqWvN8t2tqqrcUdg0"
},
{
  title: " Sample Exercise",
  description: "Comprehensive Phase 2 Exercise",
  downloadUrl: "https://mega.nz/file/mugChBpB#EkX2ysWtqts0642v5ThRJisk4bMqWvN8t2tqqrcUdg0"
},
{
  title: " Sample Exam",
  description: "Midterm Exam - 4042",
  downloadUrl: "https://mega.nz/file/775QzYrT#lNzPk8pIOJhsnWunKQkuvdicebkn1Nc2mzQvWnn5kfQ"
},
{
  title: " Sample Exam",
  description: "Final Exam - 4042",
  downloadUrl: "https://mega.nz/file/unBRFAha#oCWcIm-X4xmG_BgJ2VqW-GJibpv2c3q8GKHFbIyehjw"
},
);


COURSES[1].tas.push({
  photo: "1787834036209.png",
  name: "Mahdiye sadat Joghratian",
  field: "M.Sc. Student, Software Engineering",
  email: "mahdiyesadat.joghratian24@gmail.com",
  term: "Fall 2025 - End",
  linkedin: "https://www.linkedin.com/in/mahdiyesadat-joghratian/",
  resumeUrl: "https://www.linkedin.com/in/mahdiyesadat-joghratian/"
},
{
  photo: "1789719112179.jpg",
  name: "Mahsa Rezaee",
  field: "M.Sc. Student, Software Engineering",
  email: "mahsaa.rezaee19@gmail.com",
  term: "Fall 2026 - Now",
  linkedin: "https://www.linkedin.com/in/mahsaa-rezaee/",
  resumeUrl: "https://www.linkedin.com/in/mahsaa-rezaee/"
}
);


COURSES[1].videoSessions.push(
{
  title: "Symbols, Alphabets, Strings, and Substrings",
  description: "An introduction to symbols, alphabets, strings, and substrings in formal languages.",
  watchUrl: "https://mega.nz/embed/qzAAzR5D#lrNHnuepy4KOqpuHf7MorIzVJQkxhLt97Pjx3NttIxk",
  downloadUrl: "https://mega.nz/file/qzAAzR5D#lrNHnuepy4KOqpuHf7MorIzVJQkxhLt97Pjx3NttIxk"
},
{
  title: "String Operations, Regular Expressions, and Languages",
  description: "Explains string operations such as reversal, palindrome, substitution, concatenation, powers, and closures. It also introduces regular expressions, Lyndon strings, and formal languages.",
  watchUrl: "https://mega.nz/embed/vnpAQDyJ#yoAwCsIWkE7Qx8DIAxDBKQVVJLJ5spbtBwn41Psj8OU",
  downloadUrl: "https://mega.nz/file/vnpAQDyJ#yoAwCsIWkE7Qx8DIAxDBKQVVJLJ5spbtBwn41Psj8OU"
}, 
{
  title: "Languages and Language Operations",
  description: "Introduces languages and the empty language, including language equality and operations such as reversal, palindrome, substitution, concatenation, and powers.",
  watchUrl: "https://mega.nz/embed/OmgQDKTA#tqhBAUZo8ByPqEesoHl2e94J0o8rRqgbytLwrBshuQo",
  downloadUrl: "https://mega.nz/file/OmgQDKTA#tqhBAUZo8ByPqEesoHl2e94J0o8rRqgbytLwrBshuQo"
},
{
  title: "Examples of Union and Product Closures, Left and Right Quotients, and Homomorphism Image",
  description: "Solving examples involving union and product closures, left and right quotients, and the image of a homomorphism.",
  watchUrl: "https://mega.nz/embed/2rY2zARC#GAVCxGE4zRqLXLGeRB_D-meNWkMMGfDTlVvb2m-RGPM",
  downloadUrl: "https://mega.nz/file/2rY2zARC#GAVCxGE4zRqLXLGeRB_D-meNWkMMGfDTlVvb2m-RGPM"
},
{
  title: "Prefix-Free and Prefix-Closed Languages",
  description: "Examines prefix-free and prefix-closed languages, language representation, and recursive definitions of languages. It also explains how automata work, along with regular expressions and regular grammars.",
  watchUrl: "https://mega.nz/embed/eyZ3SB4b#IyzJBn4svrzaaHxWcijABkEQJI0mdhogOy_Uk2xTyf4",
  downloadUrl: "https://mega.nz/file/eyZ3SB4b#IyzJBn4svrzaaHxWcijABkEQJI0mdhogOy_Uk2xTyf4"
},
{
  title: "Regular Expressions for Languages and Equivalence",
  description: "Explains how to construct regular expressions for languages and how to determine whether two regular expressions are equivalent.",
  watchUrl: "https://mega.nz/embed/H7YnHbKb#niNrtXLjafIVwp2UMspmQ8pT6ZNmBniSBFi_tja8T44",
  downloadUrl: "https://mega.nz/file/H7YnHbKb#niNrtXLjafIVwp2UMspmQ8pT6ZNmBniSBFi_tja8T44"
},
{
  title: "Grammars, Generated Languages, and Grammar Equivalence",
  description: "Provides a complete introduction to grammars, including how to derive the language generated by a grammar. It also explains how to determine whether two grammars are equivalent.",
  watchUrl: "https://mega.nz/embed/Cng1kZDS#5gIHWRQvNVpace5UZq2EzsLKQQgNpi-Dh0qtC-ZN9no",
  downloadUrl: "https://mega.nz/file/Cng1kZDS#5gIHWRQvNVpace5UZq2EzsLKQQgNpi-Dh0qtC-ZN9no"
},
{
  title: "Finite State Automata, DFA, and NFA",
  description: "Provides an overview of automata and finite-state automata (FSA), followed by an introduction to deterministic and non-deterministic finite automata (DFA and NFA).",
  watchUrl: "https://mega.nz/embed/n7Ax3KKT#qOwSz6gx-AiYLAh8RfWqqT-GG7BgaZVCgjS_kq9GACg",
  downloadUrl: "https://mega.nz/file/n7Ax3KKT#qOwSz6gx-AiYLAh8RfWqqT-GG7BgaZVCgjS_kq9GACg"
},
{
  title: "DFA, Finite Automata, and String Acceptance",
  description: "Provides a complete explanation of deterministic finite automata (DFA), including completeness, accepted languages, string acceptance, and trap states.",
  watchUrl: "https://mega.nz/embed/imAQxQQb#GojsdMqRSAyTKKeoOrfTcIvGXrPTnnsW7cR_nFGeqsE",
  downloadUrl: "https://mega.nz/file/imAQxQQb#GojsdMqRSAyTKKeoOrfTcIvGXrPTnnsW7cR_nFGeqsE"
},
{
  title: "DFA Construction and Equivalence",
  description: "Explains how to construct a DFA for a given language, identify a language from a DFA, and determine whether two DFAs are equivalent.",
  watchUrl: "https://mega.nz/embed/C640SZAY#aljsn5YZnsSx79H5L6MkRFnveC9dlZduEs6nEE0KG5Y",
  downloadUrl: "https://mega.nz/file/C640SZAY#aljsn5YZnsSx79H5L6MkRFnveC9dlZduEs6nEE0KG5Y"
},
{
  title: "DFA Minimization and Distinguishable States",
  description: "Explains DFA minimization and the concepts of distinguishable and indistinguishable states, including how they are identified and used to simplify a DFA.",
  watchUrl: "https://mega.nz/embed/u7oRlLjC#chzEZqw2fNnE-b57QloomCqNYm3CGe0NbxSheoys8Bo",
  downloadUrl: "https://mega.nz/file/u7oRlLjC#chzEZqw2fNnE-b57QloomCqNYm3CGe0NbxSheoys8Bo"
},
{
  title: "NFA and Lambda Transition Elimination",
  description: "Provides a complete explanation of non-deterministic finite automata (NFA) and how they work. It also explains how to eliminate lambda transitions from NFAs.",
  watchUrl: "https://mega.nz/embed/LnQiTCSC#zQj8hIbQOE82l6FPBdJ1SCMM_aHI-QIyOX2sFAUjm-0",
  downloadUrl: "https://mega.nz/file/LnQiTCSC#zQj8hIbQOE82l6FPBdJ1SCMM_aHI-QIyOX2sFAUjm-0"
},
{
  title: "NFA to DFA Conversion and Regular Languages",
  description: "Explains the conversion of non-deterministic finite automata (NFA) to deterministic finite automata (DFA). It also introduces regular languages and automata that accept the reverse of a language.",
  watchUrl: "https://mega.nz/embed/bq5liJiK#EL7fYoCa2y3VqH5BlOhNjc2bzJN_3wBcFw7KhoG3u6M",
  downloadUrl: "https://mega.nz/file/bq5liJiK#EL7fYoCa2y3VqH5BlOhNjc2bzJN_3wBcFw7KhoG3u6M"
},
{
  title: "Grammars and Context-Free Languages",
  description: "Introduces grammars and context-free languages (CFLs), with clear explanations and solved examples for each topic.",
  watchUrl: "https://mega.nz/embed/ejJ0jIiD#zU4DJQYzHu_ESrjZ-axJd6GTq8daY6rT6RucImyXGlY",
  downloadUrl: "https://mega.nz/file/ejJ0jIiD#zU4DJQYzHu_ESrjZ-axJd6GTq8daY6rT6RucImyXGlY"
},
{
  title: "Context-Free Languages, Derivations, and Parse Trees",
  description: "Explains the union and concatenation of context-free languages, along with derivations and leftmost and rightmost derivations (LMD and RMD). It also covers parse trees, simple grammars, and simple languages.",
  watchUrl: "https://mega.nz/embed/DnA0RAKY#lZ7zNNKf4Mg7kjzPVNAEo17xp9HKp8PHEfhFe6r-lZM",
  downloadUrl: "https://mega.nz/file/DnA0RAKY#lZ7zNNKf4Mg7kjzPVNAEo17xp9HKp8PHEfhFe6r-lZM"
},
{
  title: "Simplification of Context-Free Grammars",
  description: "Explains CFG simplification, including removing lambda productions, useless symbols, and unit productions. It also covers the elimination of left recursion from context-free grammars.",
  watchUrl: "https://mega.nz/embed/23YjnIwY#sVwfxK-eLGkS_NiiPJK8V_NNrWTieTGAp_WY_a3CWI4",
  downloadUrl: "https://mega.nz/file/23YjnIwY#sVwfxK-eLGkS_NiiPJK8V_NNrWTieTGAp_WY_a3CWI4"
},
{
  title: "Normal Forms: Chomsky and Greibach Grammars",
  description: "Introduces normal forms for context-free grammars, focusing on Chomsky Normal Form (CNF) and Greibach Normal Form (GNF) with their definitions and examples.",
  watchUrl: "https://mega.nz/embed/Wi5EwIpA#D7bG7TWGClkV0tq371-mpqgQN4AKmyj4Ambm9mmafxM",
  downloadUrl: "https://mega.nz/file/Wi5EwIpA#D7bG7TWGClkV0tq371-mpqgQN4AKmyj4Ambm9mmafxM"
},
{
  title: "Pushdown Automata and NPDA",
  description: "Introduces pushdown automata (PDA) and non-deterministic pushdown automata (NPDA), including how to design an NPDA for a language and the acceptance conditions for languages.",
  watchUrl: "https://mega.nz/embed/GjZGxKQR#oMKPxntGrUK508czpclPB9g3Lwxle4Mhv0aQgFp09E0",
  downloadUrl: "https://mega.nz/file/GjZGxKQR#oMKPxntGrUK508czpclPB9g3Lwxle4Mhv0aQgFp09E0"
},
{
  title: "Context-Free Grammar, DPDA, and DCFL",
  description: "Explains how to determine whether a grammar is context-free, introduces deterministic pushdown automata (DPDA) and deterministic context-free languages (DCFL), with solved examples.",
  watchUrl: "https://mega.nz/embed/6v4WCDBb#IYEg5YylLc5wqEnnGCb9Nl85ZI0ua5pZ7w2J0HNyrXM",
  downloadUrl: "https://mega.nz/file/6v4WCDBb#IYEg5YylLc5wqEnnGCb9Nl85ZI0ua5pZ7w2J0HNyrXM"
},
);

COURSES[1].exerciseSessions.push({
  title: "Optional Activity 1",
  description: "",
  watchUrl: "https://mega.nz/embed/KzY0CDwQ#4ZrmJJe0Udz0tlfjYwD9LAiqxSJSntKk8J8QkDU4aDo",
  downloadUrl: "https://mega.nz/file/KzY0CDwQ#4ZrmJJe0Udz0tlfjYwD9LAiqxSJSntKk8J8QkDU4aDo"
},
{
  title: "Optional Activity 2",
  description: "",
  watchUrl: "https://mega.nz/embed/izIRHTxb#qRQXSGzxOKGPGFXtyi3MU8PoR36eH5hg2vP9IAYAveA",
  downloadUrl: "https://mega.nz/file/izIRHTxb#qRQXSGzxOKGPGFXtyi3MU8PoR36eH5hg2vP9IAYAveA"
},
{
  title: "Optional Activity 4",
  description: "",
  watchUrl: "https://mega.nz/embed/a2hExYzC#R1mSXirrjBPZhslR2V57zPb9CVHxeWGIRXKKM0Bfy-0",
  downloadUrl: "https://mega.nz/file/a2hExYzC#R1mSXirrjBPZhslR2V57zPb9CVHxeWGIRXKKM0Bfy-0"
},
{
  title: "Practice",
  description: "",
  watchUrl: "https://mega.nz/embed/765l0RKT#GCx3wnXZdxjnDiW3o-FQ5tWF8qNRIxRGPs-8tLQXhNM",
  downloadUrl: "https://mega.nz/file/765l0RKT#GCx3wnXZdxjnDiW3o-FQ5tWF8qNRIxRGPs-8tLQXhNM"
},
{
  title: "Practice 6-1 & 6-2",
  description: "",
  watchUrl: "https://mega.nz/embed/imwVgaqD#3OGjg_O2jfVHpWSQWqoC2i6uhGjF-eUAKNj0G_DfGXQ",
  downloadUrl: "https://mega.nz/file/imwVgaqD#3OGjg_O2jfVHpWSQWqoC2i6uhGjF-eUAKNj0G_DfGXQ"
},
);

COURSES[1].files.push({
  title: " Booklet - Full ",
  description: "Comprehensive Study Guide on the Theory of Languages ​​and Machines",
  downloadUrl: "https://mega.nz/file/ivhQSZSQ#gk5Tf9Z0hJ2ohMpWbC1J2RoX6MCZ0ZFEVq6perbjth8"
},
{
  title: " Exercises - Full ",
  description: "Categorized Examples and Exercises on the Theory of Languages ​​and Machines",
  downloadUrl: "https://mega.nz/file/D6hiyA4A#ScTSVM-UAAVdaQcZUeH2PQt3GV4-ps00pOx6vjCTLKs"
},
{
  title: "Midterm Exam 4031 ",
  description: "",
  downloadUrl: "https://mega.nz/file/LnQgxQwZ#T_lEZ0gO2KzxRGNUvyTHRdCsKk86cxbt0izZCFXI2Pg"
},
{
  title: "Midterm Exam 4032 ",
  description: "",
  downloadUrl: "https://mega.nz/file/L6wyyK6A#HE7GB63tzx4BNgMVygn6nkio7AvSnLCaRhw-DdTQxM8"
},
);