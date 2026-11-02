const STORAGE_KEY = "ohmt.ideas.v1";
const DEPARTMENTS = [
  {en:"General / Community",km:"ទូទៅ / សហគមន៍"},
  {en:"Obstetrics & Gynecology",km:"សម្ភព និងរោគស្ត្រី"},
  {en:"Pediatrics",km:"កុមារ"},
  {en:"Eye Health",km:"សុខភាពភ្នែក"},
  {en:"Cardiology",km:"ជំងឺបេះដូង"},
  {en:"Internal Medicine",km:"ជំងឺទូទៅ"},
  {en:"Surgery",km:"វះកាត់"},
  {en:"Physiotherapy",km:"ព្យាបាលដោយចលនា"},
  {en:"Nutrition",km:"អាហារូបត្ថម្ភ"},
  {en:"Mental Health",km:"សុខភាពផ្លូវចិត្ត"},
  {en:"Infectious Disease",km:"ជំងឺឆ្លង"},
  {en:"Pharmacy",km:"ឱសថស្ថាន"},
  {en:"Other",km:"ផ្សេងៗ"}
];
const FORMATS = [{en:"Short video",km:"វីដេអូខ្លី"},{en:"Animated explainer",km:"វីដេអូគំនូរជីវចល"},{en:"Infographic",km:"អ៊ីនហ្វូក្រាហ្វិក"},{en:"Poster",km:"ផ្ទាំងរូបភាព"},{en:"Social media post",km:"ប្រកាសបណ្ដាញសង្គម"},{en:"Radio / audio",km:"វិទ្យុ / សំឡេង"},{en:"Other",km:"ផ្សេងៗ"}];
const STATUSES = [{id:"idea",en:"Idea",km:"គំនិត"},{id:"planned",en:"Planned",km:"បានគ្រោងទុក"},{id:"production",en:"In production",km:"កំពុងផលិត"},{id:"review",en:"Clinical review",km:"ពិនិត្យផ្នែកវេជ្ជសាស្ត្រ"},{id:"published",en:"Published",km:"បានផ្សព្វផ្សាយ"}];
const I18N = {
 en:{
  localOnly:"Saved on this device",eyebrow:"OPEN-SOURCE PUBLIC HEALTH COMMUNICATION",heroTitle:'Make health information<br><em>clearer for everyone.</em>',heroDesc:"A practical workspace for planning health education content, coordinating production, and creating communication resources in English and Khmer.",newIdea:"Add a content idea",seeWorkflow:"Explore the workflow ↓",totalIdeas:"Content ideas",inProduction:"In production",published:"Published",privateNote:"No account or server required. Your entries stay in this browser.",workspaceEyebrow:"YOUR WORKSPACE",contentBoard:"Content board",searchPlaceholder:"Search topics, departments...",allStatuses:"All statuses",allDepartments:"All departments",statusIdea:"Idea",statusPlanned:"Planned",statusProduction:"In production",statusReview:"Clinical review",statusPublished:"Published",emptyTitle:"Your board is ready.",emptyDesc:"Add a health topic to start planning your next communication piece.",addFirst:"Add your first idea",starterEyebrow:"GET STARTED",starterTitle:"A simple production path",step1Title:"Identify the audience",step1Desc:"Who needs this information, and what do they need to understand or do?",step2Title:"Draft the message",step2Desc:"Use plain language and have qualified health professionals verify clinical claims.",step3Title:"Choose the format",step3Desc:"Video, animation, infographic, poster, or a short social post.",step4Title:"Review and publish",step4Desc:"Check accuracy, accessibility, consent, and translations before release.",principlesEyebrow:"BUILT FOR RESPONSIBLE COMMUNICATION",principlesTitle:"Good health communication starts with trust.",principle1Title:"Clinically reviewed",principle1Desc:"The toolkit organizes work; it does not replace medical review.",principle2Title:"Accessible by design",principle2Desc:"Use clear language, captions, readable layouts, and inclusive examples.",principle3Title:"Privacy first",principle3Desc:"Never enter patient names, identifiers, medical records, or confidential details.",principle4Title:"Made to be adapted",principle4Desc:"Reuse the workflow for local languages, communities, and institutions.",dataEyebrow:"YOUR DATA",dataTitle:"Keep control of your work.",dataDesc:"Export a backup of your board as JSON, or download a CSV to share a production list.",exportCsv:"Download CSV",exportJson:"Export backup",importBackup:"Import backup",footerText:"An open-source starter project for clearer, more accessible public health communication.",dialogEyebrow:"CONTENT PLANNER",dialogTitle:"Add a content idea",topicLabel:"Topic / working title *",departmentLabel:"Department / team",formatLabel:"Format",statusLabel:"Production status",audienceLabel:"Intended audience",purposeLabel:"Key message / communication goal",reviewLabel:"Clinical reviewer / source",dueLabel:"Target date",notesLabel:"Production notes",privacyHint:"Do not enter patient-identifiable or confidential health information.",cancel:"Cancel",saveIdea:"Save idea",editIdea:"Edit content idea",deleteConfirm:"Delete this content idea?",saved:"Idea saved",deleted:"Idea deleted",imported:"Backup imported",badFile:"That file could not be imported.",csvDone:"CSV downloaded",jsonDone:"Backup downloaded",department:"Department",format:"Format",due:"Target",edit:"Edit",delete:"Delete",noDate:"No target date",noPurpose:"No key message added yet.",searchNone:"No matching ideas. Try another search or filter.",untitled:"Untitled idea",created:"Created",clinicalWarning:"Clinical review required before publication."
 },
 km:{
  localOnly:"បានរក្សាទុកក្នុងឧបករណ៍នេះ",eyebrow:"ឧបករណ៍បើកចំហសម្រាប់ទំនាក់ទំនងសុខភាពសាធារណៈ",heroTitle:'ធ្វើឱ្យព័ត៌មានសុខភាព<br><em>កាន់តែច្បាស់សម្រាប់មនុស្សគ្រប់គ្នា។</em>',heroDesc:"កន្លែងធ្វើការសម្រាប់រៀបចំមាតិកាអប់រំសុខភាព សម្របសម្រួលការផលិត និងបង្កើតធនធានទំនាក់ទំនងជាភាសាខ្មែរ និងអង់គ្លេស។",newIdea:"បន្ថែមគំនិតមាតិកា",seeWorkflow:"មើលដំណើរការ ↓",totalIdeas:"គំនិតមាតិកា",inProduction:"កំពុងផលិត",published:"បានផ្សព្វផ្សាយ",privateNote:"មិនត្រូវការគណនី ឬម៉ាស៊ីនមេទេ។ ទិន្នន័យរបស់អ្នកនៅក្នុងកម្មវិធីរុករកនេះ។",workspaceEyebrow:"កន្លែងធ្វើការរបស់អ្នក",contentBoard:"ផ្ទាំងមាតិកា",searchPlaceholder:"ស្វែងរកប្រធានបទ ឬផ្នែក...",allStatuses:"គ្រប់ស្ថានភាព",allDepartments:"គ្រប់ផ្នែក",statusIdea:"គំនិត",statusPlanned:"បានគ្រោងទុក",statusProduction:"កំពុងផលិត",statusReview:"ពិនិត្យផ្នែកវេជ្ជសាស្ត្រ",statusPublished:"បានផ្សព្វផ្សាយ",emptyTitle:"ផ្ទាំងរបស់អ្នករួចរាល់ហើយ។",emptyDesc:"បន្ថែមប្រធានបទសុខភាព ដើម្បីចាប់ផ្តើមរៀបចំមាតិកាទំនាក់ទំនងបន្ទាប់។",addFirst:"បន្ថែមគំនិតដំបូង",starterEyebrow:"ចាប់ផ្តើម",starterTitle:"ដំណើរការផលិតសាមញ្ញ",step1Title:"កំណត់អ្នកទស្សនា",step1Desc:"តើនរណាត្រូវការព័ត៌មាននេះ ហើយពួកគេត្រូវយល់ ឬធ្វើអ្វី?",step2Title:"រៀបចំសារព័ត៌មាន",step2Desc:"ប្រើភាសាសាមញ្ញ និងឱ្យអ្នកជំនាញសុខភាពផ្ទៀងផ្ទាត់ការអះអាងផ្នែកវេជ្ជសាស្ត្រ។",step3Title:"ជ្រើសរើសទម្រង់",step3Desc:"វីដេអូ គំនូរជីវចល អ៊ីនហ្វូក្រាហ្វិក ផ្ទាំងរូបភាព ឬប្រកាសបណ្ដាញសង្គម។",step4Title:"ពិនិត្យ និងផ្សព្វផ្សាយ",step4Desc:"ពិនិត្យភាពត្រឹមត្រូវ ភាពងាយស្រួល ការយល់ព្រម និងការបកប្រែមុនផ្សព្វផ្សាយ។",principlesEyebrow:"សម្រាប់ទំនាក់ទំនងប្រកបដោយការទទួលខុសត្រូវ",principlesTitle:"ទំនាក់ទំនងសុខភាពល្អចាប់ផ្តើមពីទំនុកចិត្ត។",principle1Title:"ពិនិត្យដោយអ្នកជំនាញ",principle1Desc:"ឧបករណ៍នេះជួយរៀបចំការងារ ប៉ុន្តែមិនជំនួសការពិនិត្យផ្នែកវេជ្ជសាស្ត្រទេ។",principle2Title:"រចនាដើម្បីងាយយល់",principle2Desc:"ប្រើភាសាច្បាស់លាស់ ចំណងជើងរង ប្លង់អាចអានបាន និងឧទាហរណ៍រួមបញ្ចូល។",principle3Title:"ឯកជនភាពជាអាទិភាព",principle3Desc:"កុំបញ្ចូលឈ្មោះអ្នកជំងឺ លេខសម្គាល់ កំណត់ត្រាវេជ្ជសាស្ត្រ ឬព័ត៌មានសម្ងាត់។",principle4Title:"អាចកែសម្រួលបាន",principle4Desc:"ប្រើដំណើរការនេះឡើងវិញសម្រាប់ភាសា សហគមន៍ និងស្ថាប័នក្នុងតំបន់។",dataEyebrow:"ទិន្នន័យរបស់អ្នក",dataTitle:"រក្សាការគ្រប់គ្រងលើការងាររបស់អ្នក។",dataDesc:"នាំចេញទិន្នន័យជាឯកសារ JSON ឬទាញយក CSV ដើម្បីចែករំលែកបញ្ជីផលិតកម្ម។",exportCsv:"ទាញយក CSV",exportJson:"នាំចេញច្បាប់ចម្លង",importBackup:"នាំចូលច្បាប់ចម្លង",footerText:"គម្រោងប្រភពបើកចំហសម្រាប់ធ្វើឱ្យទំនាក់ទំនងសុខភាពសាធារណៈកាន់តែច្បាស់ និងងាយយល់។",dialogEyebrow:"រៀបចំមាតិកា",dialogTitle:"បន្ថែមគំនិតមាតិកា",topicLabel:"ប្រធានបទ / ចំណងជើងបណ្ដោះអាសន្ន *",departmentLabel:"ផ្នែក / ក្រុម",formatLabel:"ទម្រង់",statusLabel:"ស្ថានភាពផលិតកម្ម",audienceLabel:"អ្នកទស្សនាគោលដៅ",purposeLabel:"សារសំខាន់ / គោលដៅទំនាក់ទំនង",reviewLabel:"អ្នកពិនិត្យផ្នែកវេជ្ជសាស្ត្រ / ប្រភព",dueLabel:"កាលបរិច្ឆេទគោលដៅ",notesLabel:"កំណត់ចំណាំផលិតកម្ម",privacyHint:"កុំបញ្ចូលព័ត៌មានដែលអាចសម្គាល់អត្តសញ្ញាណអ្នកជំងឺ ឬព័ត៌មានសម្ងាត់។",cancel:"បោះបង់",saveIdea:"រក្សាទុកគំនិត",editIdea:"កែសម្រួលគំនិតមាតិកា",deleteConfirm:"លុបគំនិតមាតិកានេះមែនទេ?",saved:"បានរក្សាទុកគំនិត",deleted:"បានលុបគំនិត",imported:"បាននាំចូលច្បាប់ចម្លង",badFile:"មិនអាចនាំចូលឯកសារនេះបានទេ។",csvDone:"បានទាញយក CSV",jsonDone:"បានទាញយកច្បាប់ចម្លង",department:"ផ្នែក",format:"ទម្រង់",due:"គោលដៅ",edit:"កែសម្រួល",delete:"លុប",noDate:"មិនទាន់កំណត់កាលបរិច្ឆេទ",noPurpose:"មិនទាន់បន្ថែមសារសំខាន់ទេ។",searchNone:"រកមិនឃើញគំនិតដែលត្រូវគ្នាទេ។ សូមសាកល្បងស្វែងរក ឬត្រងម្ដងទៀត។",untitled:"គំនិតគ្មានចំណងជើង",created:"បានបង្កើត",clinicalWarning:"ត្រូវការការពិនិត្យផ្នែកវេជ្ជសាស្ត្រមុនផ្សព្វផ្សាយ។"
 }
};
let lang = "en";
let ideas = loadIdeas();
const $ = id => document.getElementById(id);
const t = key => I18N[lang][key] || I18N.en[key] || key;
function loadIdeas(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]")}catch{return []}}
function persist(){localStorage.setItem(STORAGE_KEY,JSON.stringify(ideas));render()}
function departmentName(name){const d=DEPARTMENTS.find(x=>x.en===name);return d?(lang==="km"?d.km:d.en):name}
function formatName(name){const f=FORMATS.find(x=>x.en===name);return f?(lang==="km"?f.km:f.en):name}
function statusName(id){const s=STATUSES.find(x=>x.id===id);return s?(lang==="km"?s.km:s.en):id}
function escapeHtml(s=""){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function fillSelect(el,items,selected){el.innerHTML=items.map(x=>`<option value="${escapeHtml(x.value)}">${escapeHtml(x.label)}</option>`).join("");if(selected)el.value=selected}
function setupSelects(){
 fillSelect($("department"),DEPARTMENTS.map(d=>({value:d.en,label:lang==="km"?d.km:d.en})));
 fillSelect($("format"),FORMATS.map(f=>({value:f.en,label:lang==="km"?f.km:f.en})));
 fillSelect($("status"),STATUSES.map(s=>({value:s.id,label:statusName(s.id)})));
 const depFilter=$("departmentFilter"), old=depFilter.value;
 depFilter.innerHTML=`<option value="all">${t("allDepartments")}</option>`+DEPARTMENTS.map(d=>`<option value="${escapeHtml(d.en)}">${escapeHtml(lang==="km"?d.km:d.en)}</option>`).join("");
 depFilter.value=old;
 $("statusFilter").querySelectorAll("option").forEach(o=>{if(o.value!=="all")o.textContent=statusName(o.value)});
 $("statusFilter").options[0].textContent=t("allStatuses");
}
function applyLanguage(){
 document.documentElement.lang=lang;$("languageBtn").textContent=lang==="en"?"ខ្មែរ":"English";document.body.classList.toggle("khmer",lang==="km");
 document.querySelectorAll("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(I18N[lang][key])el.innerHTML=t(key)});
 document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>el.placeholder=t(el.dataset.i18nPlaceholder));
 setupSelects();render();
}
function render(){
 $("totalIdeas").textContent=ideas.length;
 $("inProduction").textContent=ideas.filter(x=>x.status==="production").length;
 $("published").textContent=ideas.filter(x=>x.status==="published").length;
 const q=$("searchInput").value.trim().toLowerCase(), st=$("statusFilter").value, dep=$("departmentFilter").value;
 const filtered=ideas.filter(x=>(st==="all"||x.status===st)&&(dep==="all"||x.department===dep)&&(!q||[x.topic,x.department,x.audience,x.purpose,x.notes].join(" ").toLowerCase().includes(q)));
 $("ideaBoard").innerHTML=filtered.map(x=>`
  <article class="idea-card">
   <div class="card-top"><span class="tag status-${escapeHtml(x.status)}">${escapeHtml(statusName(x.status))}</span><div class="card-menu"><button type="button" data-edit="${x.id}" aria-label="${t("edit")}">✎</button><button type="button" data-delete="${x.id}" aria-label="${t("delete")}">×</button></div></div>
   <h3>${escapeHtml(x.topic||t("untitled"))}</h3>
   <p class="card-purpose">${escapeHtml(x.purpose||t("noPurpose"))}</p>
   <div class="card-meta"><span>${escapeHtml(departmentName(x.department))} · ${escapeHtml(formatName(x.format))}</span><span>${x.dueDate?escapeHtml(x.dueDate):t("noDate")}</span></div>
  </article>`).join("");
 $("emptyState").classList.toggle("hidden",filtered.length>0);
 $("ideaBoard").classList.toggle("hidden",filtered.length===0);
 if(ideas.length===0){$("emptyState").classList.remove("hidden");$("ideaBoard").classList.add("hidden");}
}
function openDialog(idea=null){
 $("ideaForm").reset();$("ideaId").value=idea?.id||"";
 $("dialogTitle").textContent=idea?t("editIdea"):t("dialogTitle");
 if(idea){$("topic").value=idea.topic||"";$("department").value=idea.department||DEPARTMENTS[0].en;$("format").value=idea.format||FORMATS[0].en;$("status").value=idea.status||"idea";$("audience").value=idea.audience||"";$("purpose").value=idea.purpose||"";$("reviewer").value=idea.reviewer||"";$("dueDate").value=idea.dueDate||"";$("notes").value=idea.notes||"";}
 $("ideaDialog").showModal();$("topic").focus();
}
function closeDialog(){$("ideaDialog").close()}
function saveIdea(e){
 e.preventDefault();
 const id=$("ideaId").value||crypto.randomUUID();
 const item={id,topic:$("topic").value.trim(),department:$("department").value,format:$("format").value,status:$("status").value,audience:$("audience").value.trim(),purpose:$("purpose").value.trim(),reviewer:$("reviewer").value.trim(),dueDate:$("dueDate").value,notes:$("notes").value.trim(),updatedAt:new Date().toISOString()};
 const idx=ideas.findIndex(x=>x.id===id);if(idx>=0)ideas[idx]=item;else{item.createdAt=item.updatedAt;ideas.unshift(item)}
 closeDialog();persist();toast(t("saved"));
}
function toast(msg){const el=$("toast");el.textContent=msg;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2300)}
function download(name,content,type){const blob=new Blob([content],{type}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;a.click();URL.revokeObjectURL(url)}
function csvEscape(v){return `"${String(v??"").replace(/"/g,'""')}"`}
function exportCsv(){const cols=["topic","department","format","status","audience","purpose","reviewer","dueDate","notes","createdAt","updatedAt"];const rows=[cols,...ideas.map(x=>cols.map(c=>x[c]??""))];download("ohmt-content-board.csv",rows.map(r=>r.map(csvEscape).join(",")).join("\r\n"),"text/csv;charset=utf-8");toast(t("csvDone"))}
function exportJson(){download("ohmt-backup.json",JSON.stringify({toolkit:"Open Health Media Toolkit",version:"0.1.0",exportedAt:new Date().toISOString(),ideas},null,2),"application/json");toast(t("jsonDone"))}
async function importJson(e){const file=e.target.files[0];if(!file)return;try{const data=JSON.parse(await file.text()),list=Array.isArray(data)?data:data.ideas;if(!Array.isArray(list))throw Error();ideas=list.filter(x=>x&&typeof x.topic==="string").map(x=>({...x,id:x.id||crypto.randomUUID()}));persist();toast(t("imported"))}catch{toast(t("badFile"))}e.target.value=""}
$("newIdea").addEventListener("click",()=>openDialog());$("newIdeaTop").addEventListener("click",()=>openDialog());$("emptyAdd").addEventListener("click",()=>openDialog());$("closeDialog").addEventListener("click",closeDialog);$("cancelDialog").addEventListener("click",closeDialog);$("ideaForm").addEventListener("submit",saveIdea);
$("ideaBoard").addEventListener("click",e=>{const edit=e.target.closest("[data-edit]"),del=e.target.closest("[data-delete]");if(edit){const item=ideas.find(x=>x.id===edit.dataset.edit);if(item)openDialog(item)}if(del){if(confirm(t("deleteConfirm"))){ideas=ideas.filter(x=>x.id!==del.dataset.delete);persist();toast(t("deleted"))}}});
["searchInput","statusFilter","departmentFilter"].forEach(id=>$(id).addEventListener(id==="searchInput"?"input":"change",render));
$("languageBtn").addEventListener("click",()=>{lang=lang==="en"?"km":"en";applyLanguage()});
$("exportCsv").addEventListener("click",exportCsv);$("exportJson").addEventListener("click",exportJson);$("importJson").addEventListener("change",importJson);
setupSelects();applyLanguage();render();
