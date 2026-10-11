export const portfolio={
seasons:[
{year:'FOUNDATION',title:'Applications & operations',text:'Building a strong base in business applications, process discipline and production reliability across financial-services workflows.',tags:['Applications','Operations','BFSI']},
{year:'TRANSFORMATION',title:'Automation at scale',text:'Connecting business processes, APIs, documents and data to remove repetitive effort while retaining traceability and control.',tags:['APIs','Workflow','Document AI']},
{year:'INTELLIGENCE',title:'Enterprise AI systems',text:'Shaping retrieval, agentic and deterministic patterns that are appropriate for regulated, high-consequence environments.',tags:['RAG','Agentic AI','Governance']},
{year:'NOW',title:'Leadership through architecture',text:'Aligning stakeholders, teams and technology around secure, explainable and outcome-focused delivery.',tags:['Strategy','Delivery','Risk']}
],
projects:[
{id:'review',code:'PRN',title:'Project Review Note Generator',oneLiner:'An orchestrated AI workflow for structured review-note preparation.',challenge:'Review preparation requires information to be assembled, checked and presented consistently.',approach:'A staged workflow separates validation, extraction, calculation, reasoning and synthesis, preserving an auditable path through the process.',outcome:'A production-oriented pattern designed to improve consistency and reviewer focus. Public metrics are intentionally withheld until approved.',stack:['Python','FastAPI','Azure OpenAI','MySQL'],colour:'#7b5cff'},
{id:'docket',code:'NDC',title:'NDC & Docket Automation',oneLiner:'API-led document processing with duplicate-work protection.',challenge:'Document-heavy operations can involve manual handling, fragmented checks and risk of duplicate processing.',approach:'Claim-first orchestration, parallel document and data paths, deterministic validations and an idempotent status store.',outcome:'A reusable automation design that prioritises traceability, reliable callbacks and controlled exception handling.',stack:['Python','Document Intelligence','REST APIs','PostgreSQL'],colour:'#00b8d9'},
{id:'rag',code:'RAG',title:'FinWise Knowledge Assistant',oneLiner:'Grounded access to product and policy knowledge.',challenge:'Teams need timely answers from a changing collection of product, policy and eligibility material.',approach:'Curated ingestion, retrieval, citation and grounded-response controls with a clear separation between knowledge and generation.',outcome:'A design focused on source-backed responses and controlled knowledge access rather than unconstrained chat.',stack:['Django','AI Search','Azure OpenAI','LangChain'],colour:'#e83e8c'},
{id:'optimise',code:'OPT',title:'LLM Pipeline Optimisation',oneLiner:'Putting deterministic code back where it belongs.',challenge:'Reasoning models can be overused for transformations and checks that ordinary code performs more reliably.',approach:'Each step is classified by reasoning need; deterministic operations move to Python and model calls remain only where judgement adds value.',outcome:'A clearer, more testable and cost-conscious orchestration pattern.',stack:['Python','LLMOps','Evaluation','Azure'],colour:'#ff9f43'},
{id:'names',code:'KYC',title:'Name Triangulation Engine',oneLiner:'Explainable reconciliation across identity sources.',challenge:'Names can differ by ordering, initials, spacing and transliteration across KYC and bureau sources.',approach:'Normalisation, token-level comparison, initial handling and explainable rules produce reviewable results without an LLM fallback.',outcome:'A deterministic pattern suitable for testable, auditable identity-matching workflows.',stack:['Python','Fuzzy Matching','Rules Engine','Testing'],colour:'#2ed573'},
{id:'voice',code:'VOC',title:'AI Voice Collections Pattern',oneLiner:'Responsible orchestration around automated conversations.',challenge:'High-volume outreach needs consistent controls, integrations and post-call actions.',approach:'Conversation orchestration connects controlled calling, status webhooks, secure actions and operational review.',outcome:'A governance-aware pattern for integrating conversational automation into business workflows.',stack:['Voice AI','AWS Lambda','Webhooks','APIs'],colour:'#ee5253'}
],
skills:[
{title:'AI & Orchestration',items:['Agentic workflows','RAG','Prompt patterns','Evaluation'],evidence:'Applied through workflow separation, grounding and deterministic fallbacks.'},
{title:'Application Engineering',items:['Python','FastAPI','Django','REST APIs'],evidence:'Production APIs, process automation and integration patterns.'},
{title:'Cloud & Platforms',items:['Azure AI','AWS','Containers','CI/CD'],evidence:'Cloud-aligned architectures with environment and access controls.'},
{title:'Data & Documents',items:['SQL','OCR','Document AI','Validation'],evidence:'Structured extraction, reconciliation and evidence-led processing.'},
{title:'Governance',items:['Auditability','Least privilege','Release gates','Risk tiers'],evidence:'Controls designed into delivery, not added after deployment.'}
],
principles:[
{title:'Deterministic first',text:'Use models for ambiguity and reasoning, not for work that ordinary code can perform reliably.'},
{title:'Evidence over fluency',text:'Ground answers, preserve provenance and make uncertainty visible to the user.'},
{title:'Controls in the architecture',text:'Identity, access, audit trails and rollback belong in the design from day one.'},
{title:'Build for operations',text:'A solution succeeds only when support, exceptions, monitoring and ownership are clear.'}
],
intro:[
{title:'Enterprise AI. Built to operate.',copy:'Not a demo layer. A controlled system that earns trust in production.',colour:'#7b5cff'},
{title:'Automate with evidence.',copy:'Documents, APIs and deterministic checks converge into accountable workflows.',colour:'#00b8d9'},
{title:'Use models with intent.',copy:'Reasoning where it adds value. Code where certainty matters.',colour:'#ff9f43'},
{title:'Lead the whole system.',copy:'People, vendors, architecture, governance and outcomes move together.',colour:'#e83e8c'}
]};
