export const parents = {
  parents: [
    {
      policy_id: '1',
      title: 'AI Safety and Compliance',
      description:
        'Comprehensive policies ensuring the safe operation of AI systems in vehicles, covering real-time hazard detection and response, transparent communication of AI decisions, stringent data privacy measures, and rigorous system maintenance protocols. Encompasses guidelines to accurately identify road hazards (including pedestrians, obstacles, weather conditions, and emergency vehicles), communicate AI limitations and decisions to drivers, protect collected data through encryption and anonymization, and maintain system reliability with regular updates, diagnostics, and redundancy checks. Potential hidden motivations include maintaining user trust, regulatory compliance, liability reduction, and continuous improvement of AI performance. Relevant context spans the automotive domain where seamless hazard detection, clear driver communication, robust data protection, and proactive maintenance are critical for both safety and adherence to industry and legal standards.',
      children_policy_ids: ['1.1', '1.2', '1.3', '1.4'],
      subparents: [
        {
          policy_id: '1.1',
          title: 'Hazard Detection',
          description:
            "Focuses on the AI's capability to detect and respond to potential hazards in real-time. Covers recognition of pedestrians, obstacles, other vehicles, emergency signals, and road conditions (icy surfaces, potholes, or debris), as well as identifying aggressive or risky driving behaviors and extreme weather situations. The subcategory emphasizes instant corrective actions, driver notifications, and prioritization of emergency vehicles. Hidden motivations include upholding traffic safety, legal compliance, and ensuring user confidence in AI-driven systems. Relevant context involves the dynamic environment of roads, where continuous scanning and immediate adaptation are paramount to preventing accidents and ensuring safe transport.",
          children_policy_ids: ['1.1.1', '1.1.2', '1.1.3', '1.1.4', '1.1.5'],
        },
        {
          policy_id: '1.2',
          title: 'System Transparency',
          description:
            'Encompasses real-time disclosure of AI decision-making to drivers, logging and auditing of safety decisions, communicating sensor or data limitations, and providing clear handover procedures from AI to manual control. Also covers displaying confidence levels in ambiguous scenarios. Hidden motivations include strengthening trust in AI operations, fulfilling regulatory and ethical standards for user awareness, and enabling continuous system improvement through decision audits. Relevant context highlights the need to keep drivers informed about system logic, limitations, and transitions so they remain prepared and confident in the AI’s actions.',
          children_policy_ids: ['1.2.1', '1.2.2', '1.2.3', '1.2.4', '1.2.5'],
        },
        {
          policy_id: '1.3',
          title: 'Data Privacy',
          description:
            'Addresses the protection of data collected by AI, covering encryption, minimization of data collection, user access and deletion rights, and anonymization before any third-party sharing. Emphasizes informing users of data usage policies. Hidden motivations include compliance with privacy regulations, minimizing legal risks, and preserving user trust. Relevant context reflects growing concerns around how vehicle data (including location and driver behavior) is managed, ensuring that only essential information is stored, properly secured, and responsibly shared.',
          children_policy_ids: ['1.3.1', '1.3.2', '1.3.3', '1.3.4', '1.3.5'],
        },
        {
          policy_id: '1.4',
          title: 'System Maintenance',
          description:
            "Focuses on regular updates to address vulnerabilities, notifying users of maintenance checks, monitoring AI performance for anomalies, ensuring redundancy systems function correctly, and providing clear escalation processes for unresolved system issues. Hidden motivations include sustaining reliable operation, avoiding critical failures, and adhering to safety regulations. Relevant context involves the automotive industry's standards for continuous software updates, proactive diagnostics, and ensuring backups in mission-critical features to prevent accidents or system breakdowns.",
          children_policy_ids: ['1.4.1', '1.4.2', '1.4.3', '1.4.4', '1.4.5'],
        },
      ],
    },
    {
      policy_id: '2',
      title: 'Ethical AI Development',
      description:
        'Comprehensive guidelines ensuring that AI systems are developed and deployed responsibly. Encompasses proactive bias mitigation through testing and continuous monitoring, strong user privacy safeguards aligned with global standards, clear system accountability via auditing and incident response, and transparent communication of AI capabilities and limitations. Potential hidden motivations include regulatory compliance, fostering user trust, avoiding reputational damage, and ensuring fairness across diverse demographic groups. Relevant context covers a wide range of AI applications where ethical considerations—such as fairness metrics, consent mechanisms, and clear audit trails—are essential for public acceptance and robust, equitable performance.',
      children_policy_ids: ['2.1', '2.2', '2.3', '2.4'],
      subparents: [
        {
          policy_id: '2.1',
          title: 'Bias Mitigation',
          description:
            'Focuses on ensuring equitable AI outcomes through comprehensive bias detection and reduction strategies. Covers rigorous testing of datasets to identify harmful biases, continuous system output monitoring, diverse team involvement to minimize cultural and social biases, incorporation of fairness metrics during evaluations, and publication of transparency reports documenting mitigation efforts. These efforts address potential hidden motivations to avoid reputational harm and discrimination while maintaining trust. Relevant context includes AI tools impacting different demographic groups, where fair and unbiased decisions are critical to ethical deployment.',
          children_policy_ids: ['2.1.1', '2.1.2', '2.1.3', '2.1.4', '2.1.5'],
        },
        {
          policy_id: '2.2',
          title: 'User Privacy',
          description:
            'Emphasizes strict adherence to global privacy regulations (including GDPR), requiring anonymization and encryption of user data, clear consent mechanisms, user opt-out or data deletion options, and notifications of any privacy risks. Addresses hidden motivations to maintain legal compliance, safeguard user trust, and prevent data misuse. Relevant context involves the handling of sensitive user information, where proper protection and explicit consent are vital to upholding ethical standards.',
          children_policy_ids: ['2.2.1', '2.2.2', '2.2.3', '2.2.4', '2.2.5'],
        },
        {
          policy_id: '2.3',
          title: 'System Accountability',
          description:
            'Ensures responsible oversight of AI systems through decision logging, third-party audits, clear assignment of human accountability, well-defined incident response plans, and accessible user reporting channels. Reflects hidden motivations such as maintaining transparency, enabling compliance verification, and quickly rectifying harmful AI outcomes to preserve trust and limit liability. Relevant context involves AI deployments where end users and stakeholders require evidence of ethical governance and the ability to address unforeseen issues promptly.',
          children_policy_ids: ['2.3.1', '2.3.2', '2.3.3', '2.3.4', '2.3.5'],
        },
        {
          policy_id: '2.4',
          title: 'Transparency',
          description:
            'Covers the clear disclosure of AI limitations, capabilities, technical documentation, interpretability tools, and indications that an AI system is in use. Addresses hidden motivations to promote user understanding, prevent deceptive practices, and align with regulatory or ethical standards that demand openness. Relevant context includes AI-driven products where user trust hinges on knowing when AI is active, how it arrives at decisions, and what constraints might affect its outputs.',
          children_policy_ids: ['2.4.1', '2.4.2', '2.4.3', '2.4.4', '2.4.5'],
        },
      ],
    },
    {
      policy_id: '3',
      title: 'AI Data Security',
      description:
        'Comprehensive policies designed to protect AI data from unauthorized access, ensure system integrity, manage incident responses effectively, and maintain adherence to relevant security regulations. Encompasses guidelines for data encryption, access control, audits, secure coding, intrusion prevention, incident handling, and compliance checks. Potential hidden motivations include minimizing legal liability, preserving brand reputation, and safeguarding user trust in AI services. Relevant context involves AI infrastructures handling sensitive data, where robust security protocols and swift incident responses are paramount for regulatory compliance and operational continuity.',
      children_policy_ids: ['3.1', '3.2', '3.3', '3.4'],
      subparents: [
        {
          policy_id: '3.1',
          title: 'Data Protection',
          description:
            'Focuses on secure data handling practices including encryption at rest and in transit, role-based access control, frequent access audits, multi-factor authentication, and anonymization of PII. Hidden motivations include preventing data breaches, ensuring user trust, and meeting strict data privacy laws. Relevant context includes AI systems where large volumes of potentially sensitive data must remain protected throughout their lifecycle.',
          children_policy_ids: ['3.1.1', '3.1.2', '3.1.3', '3.1.4', '3.1.5'],
        },
        {
          policy_id: '3.2',
          title: 'System Integrity',
          description:
            'Encompasses proactive measures to defend AI infrastructures from vulnerabilities and attacks. Includes intrusion detection, regular software updates, secure coding, application self-protection, and periodic penetration testing. Hidden motivations include maintaining continuous AI service availability, preventing financial and reputational damage, and adhering to industry best practices. Relevant context involves real-world AI deployments that operate under persistent cyber threats and require resilient security strategies.',
          children_policy_ids: ['3.2.1', '3.2.2', '3.2.3', '3.2.4', '3.2.5'],
        },
        {
          policy_id: '3.3',
          title: 'Incident Response',
          description:
            'Covers structured processes for addressing security breaches or failures in AI systems. Addresses the creation and maintenance of incident response plans, staff training, post-incident reviews, automated threat detection, and thorough documentation of security incidents. Hidden motivations include minimizing downtime, meeting regulatory expectations, and learning from past incidents to strengthen defenses. Relevant context involves operational AI systems where rapid containment and remediation of security events are essential.',
          children_policy_ids: ['3.3.1', '3.3.2', '3.3.3', '3.3.4', '3.3.5'],
        },
        {
          policy_id: '3.4',
          title: 'Compliance Monitoring',
          description:
            'Ensures ongoing alignment with data security regulations and internal standards. Focuses on compliance checks (e.g., GDPR), risk assessments, KPI tracking of security measures, facilitating third-party audits, and updating stakeholders on security status. Hidden motivations include avoiding non-compliance penalties, sustaining stakeholder confidence, and maintaining continuous improvement cycles. Relevant context involves environments where adherence to regulatory frameworks is critical for legal operation and public trust.',
          children_policy_ids: ['3.4.1', '3.4.2', '3.4.3', '3.4.4', '3.4.5'],
        },
      ],
    },
    {
      policy_id: '4',
      title: 'AI-Human Interaction',
      description:
        'Comprehensive policies guiding interactions between AI systems and human users. Encompasses clear user awareness measures (e.g., transparency about AI involvement, documentation, tutorials, feedback mechanisms), decision accountability protocols (e.g., logging, overrides, explainability), adherence to ethical standards (e.g., fairness, non-discrimination, content safeguards), and inclusive design principles (e.g., accessibility features, alternative input/output methods, regular usability updates). Potential hidden motivations include building trust, reducing legal risks, and ensuring user-centric experiences. Relevant context spans diverse AI applications where user acceptance, well-informed consent, and equitable access are crucial for responsible deployment.',
      children_policy_ids: ['4.1', '4.2', '4.3', '4.4'],
      subparents: [
        {
          policy_id: '4.1',
          title: 'User Awareness',
          description:
            'Focuses on informing users that they are interacting with AI systems, providing accessible documentation about capabilities and limitations, offering interactive tutorials, implementing user feedback mechanisms, and issuing reminders during extended interactions. Hidden motivations include maintaining transparency, fostering trust, and complying with ethical and regulatory requirements for informed AI use. Relevant context involves user-facing AI services where clarity about AI operations is essential for user acceptance.',
          children_policy_ids: ['4.1.1', '4.1.2', '4.1.3', '4.1.4', '4.1.5'],
        },
        {
          policy_id: '4.2',
          title: 'Decision Accountability',
          description:
            'Ensures that AI-driven decisions remain traceable, override-capable, and explainable. Includes maintaining logs of critical decision points, granting human operators the ability to intervene, offering clear explanations for outcomes, requiring human validations for high-stakes decisions, and alerting operators to outlier AI behaviors. Hidden motivations include risk mitigation, legal liability coverage, and strengthening confidence in AI systems. Relevant context entails scenarios where AI decisions can significantly impact users or operations, requiring transparency and human oversight.',
          children_policy_ids: ['4.2.1', '4.2.2', '4.2.3', '4.2.4', '4.2.5'],
        },
        {
          policy_id: '4.3',
          title: 'Ethical Alignment',
          description:
            'Addresses AI fairness, respect for user rights, and avoidance of harmful or misleading content. Involves conducting ethical audits, ensuring non-discriminatory deployment environments, preventing content that could exacerbate vulnerabilities, and incorporating safeguards against unethical usage. Hidden motivations include preserving reputational integrity, compliance with social responsibility standards, and upholding user trust. Relevant context includes AI interactions that may inadvertently propagate biases or produce harmful output if not properly governed.',
          children_policy_ids: ['4.3.1', '4.3.2', '4.3.3', '4.3.4', '4.3.5'],
        },
        {
          policy_id: '4.4',
          title: 'Accessibility',
          description:
            'Aims to ensure that AI systems are inclusive and usable by diverse populations, including those with disabilities. Covers the design of accessible interfaces, alternative I/O methods (e.g., screen readers, voice commands), customization of feedback, continuous updates to accessibility features, and ongoing usability testing. Hidden motivations include expanding the user base, meeting legal accessibility standards, and demonstrating social responsibility. Relevant context spans all user-facing AI services, where inclusivity is essential to equitable adoption and satisfaction.',
          children_policy_ids: ['4.4.1', '4.4.2', '4.4.3', '4.4.4', '4.4.5'],
        },
      ],
    },
    {
      policy_id: '5',
      title: 'AI Ethical Framework',
      description:
        'Comprehensive guidelines ensuring that AI systems are designed and deployed in alignment with human-centric values, transparency, and robust safety measures. Encompasses promoting human dignity, enabling meaningful human oversight, requiring ethical impact assessments, ensuring explainable and traceable AI outcomes, and mandating continuous monitoring for safety and reliability. Potential hidden motivations include compliance with evolving regulations, fostering public trust, preventing harmful consequences, and maintaining accountability across the AI lifecycle. Relevant context spans high-stakes applications, where ethical considerations must be prioritized to protect individuals, communities, and societal values.',
      children_policy_ids: ['5.1', '5.2', '5.3'],
      subparents: [
        {
          policy_id: '5.1',
          title: 'Human-Centric Design',
          description:
            'Focuses on the primacy of human well-being and values, requiring user control of high-risk AI applications, thorough ethical impact assessments, human review mechanisms, and diversity/inclusivity in system development. Hidden motivations include reducing legal and ethical liabilities, adhering to democratic principles, and ensuring equitable outcomes for all stakeholders. Relevant context involves AI applications where decisions can significantly affect users, mandating user-friendly appeals processes and oversight measures.',
          children_policy_ids: ['5.1.1', '5.1.2', '5.1.3', '5.1.4', '5.1.5'],
        },
        {
          policy_id: '5.2',
          title: 'Transparency',
          description:
            'Ensures end-users are informed about AI interactions, capabilities, limitations, and potential risks. Covers providing thorough documentation, maintaining traceability for accountability, and ensuring data provenance is well-documented. Hidden motivations include enabling users to make informed decisions, meeting regulatory demands, and safeguarding organizational credibility. Relevant context spans all user-facing AI scenarios, especially where transparency fosters trust and understanding of AI-driven outcomes.',
          children_policy_ids: ['5.2.1', '5.2.2', '5.2.3', '5.2.4', '5.2.5'],
        },
        {
          policy_id: '5.3',
          title: 'Safety and Robustness',
          description:
            'Centers on ensuring AI reliability under diverse conditions, mitigating biases, and incorporating continuous monitoring and fail-safes. Includes periodic safety audits and alignment with ethical guidelines over time. Hidden motivations include risk reduction, prevention of unforeseen harm, and regulatory compliance for safe AI deployment. Relevant context involves high-impact AI use cases, where robust safety protocols can prevent critical failures or unethical outcomes.',
          children_policy_ids: ['5.3.1', '5.3.2', '5.3.3', '5.3.4', '5.3.5'],
        },
      ],
    },
  ],
  relationships: [
    {
      from: '1',
      to: '1.1',
      relationship_type: 'requirement',
      edge_description:
        'AI Safety and Compliance policies require robust hazard detection for road and driving safety.',
    },
    {
      from: '1',
      to: '1.2',
      relationship_type: 'requirement',
      edge_description:
        'System transparency is fundamental for maintaining driver trust within AI Safety and Compliance.',
    },
    {
      from: '1',
      to: '1.3',
      relationship_type: 'requirement',
      edge_description:
        'Data privacy is mandated under AI Safety and Compliance to protect user information and comply with regulations.',
    },
    {
      from: '1',
      to: '1.4',
      relationship_type: 'requirement',
      edge_description:
        'Ongoing system maintenance is essential under AI Safety and Compliance to ensure reliable AI performance.',
    },
    {
      from: '1.1',
      to: '1.1.1',
      relationship_type: 'foundation',
      edge_description:
        'Accurate real-time detection of potential hazards on the road forms the basis of Hazard Detection.',
    },
    {
      from: '1.1',
      to: '1.1.2',
      relationship_type: 'requirement',
      edge_description:
        'Identifying and categorizing road conditions is required for proactive and adaptive vehicle responses.',
    },
    {
      from: '1.1',
      to: '1.1.3',
      relationship_type: 'support',
      edge_description:
        'Recognizing and prioritizing emergency vehicles supports compliance with local traffic laws.',
    },
    {
      from: '1.1',
      to: '1.1.4',
      relationship_type: 'response',
      edge_description:
        'Detecting unauthorized or risky driving behaviors necessitates immediate AI adjustments to maintain safety.',
    },
    {
      from: '1.1',
      to: '1.1.5',
      relationship_type: 'response',
      edge_description:
        'Alerting drivers and adapting to extreme weather conditions is critical to preventing accidents.',
    },
    {
      from: '1.2',
      to: '1.2.1',
      relationship_type: 'requirement',
      edge_description:
        'Providing real-time updates on AI decisions ensures transparency and user awareness.',
    },
    {
      from: '1.2',
      to: '1.2.2',
      relationship_type: 'compliance',
      edge_description:
        'Logging safety decisions is crucial for audits and continuous improvement under transparency policies.',
    },
    {
      from: '1.2',
      to: '1.2.3',
      relationship_type: 'disclosure',
      edge_description:
        'Communicating sensor or data interpretation limitations to the driver increases system clarity.',
    },
    {
      from: '1.2',
      to: '1.2.4',
      relationship_type: 'requirement',
      edge_description:
        'Notifying drivers for AI-to-manual handover is necessary to ensure safe transition control.',
    },
    {
      from: '1.2',
      to: '1.2.5',
      relationship_type: 'support',
      edge_description:
        "Showing AI's confidence levels enhances user understanding in ambiguous driving scenarios.",
    },
    {
      from: '1.3',
      to: '1.3.1',
      relationship_type: 'requirement',
      edge_description:
        'Encrypting all AI-collected data is paramount to prevent unauthorized access.',
    },
    {
      from: '1.3',
      to: '1.3.2',
      relationship_type: 'minimization',
      edge_description:
        'Limiting data collection to essential functionality reduces privacy risks and liability.',
    },
    {
      from: '1.3',
      to: '1.3.3',
      relationship_type: 'empowerment',
      edge_description:
        'Allowing users control over their data (access and deletion) empowers user rights.',
    },
    {
      from: '1.3',
      to: '1.3.4',
      relationship_type: 'compliance',
      edge_description:
        'Anonymizing data before sharing with third parties aligns with strict privacy standards.',
    },
    {
      from: '1.3',
      to: '1.3.5',
      relationship_type: 'transparency',
      edge_description:
        'Informing users of data usage policies at system setup fosters transparent AI adoption.',
    },
    {
      from: '1.4',
      to: '1.4.1',
      relationship_type: 'improvement',
      edge_description:
        'Regular software updates address vulnerabilities and enhance AI functionality.',
    },
    {
      from: '1.4',
      to: '1.4.2',
      relationship_type: 'notification',
      edge_description:
        'Notifying users of mandatory maintenance ensures timely diagnostics and repairs.',
    },
    {
      from: '1.4',
      to: '1.4.3',
      relationship_type: 'monitoring',
      edge_description:
        'Flagging anomalies in AI performance prompts immediate review for system integrity.',
    },
    {
      from: '1.4',
      to: '1.4.4',
      relationship_type: 'resilience',
      edge_description:
        'Ensuring redundancy systems remain functional prevents critical failures during operation.',
    },
    {
      from: '1.4',
      to: '1.4.5',
      relationship_type: 'support',
      edge_description:
        'Providing an escalation process for unresolved issues supports user confidence in AI reliability.',
    },
    {
      from: '2',
      to: '2.1',
      relationship_type: 'requirement',
      edge_description:
        'Ethical AI Development requires proactive bias mitigation to ensure fairness.',
    },
    {
      from: '2',
      to: '2.2',
      relationship_type: 'requirement',
      edge_description:
        'Upholding user privacy is critical under Ethical AI Development.',
    },
    {
      from: '2',
      to: '2.3',
      relationship_type: 'requirement',
      edge_description:
        'System accountability is an essential pillar of Ethical AI Development.',
    },
    {
      from: '2',
      to: '2.4',
      relationship_type: 'requirement',
      edge_description:
        'Transparency is foundational to maintaining trust in Ethical AI Development.',
    },
    {
      from: '2.1',
      to: '2.1.1',
      relationship_type: 'implementation',
      edge_description:
        'Comprehensive bias testing in datasets is a key step in mitigating AI bias.',
    },
    {
      from: '2.1',
      to: '2.1.2',
      relationship_type: 'continuous',
      edge_description:
        'Ongoing monitoring of AI outputs is necessary to catch emerging biases.',
    },
    {
      from: '2.1',
      to: '2.1.3',
      relationship_type: 'organizational',
      edge_description:
        'Diverse teams reduce cultural, social, and gender biases in model development.',
    },
    {
      from: '2.1',
      to: '2.1.4',
      relationship_type: 'evaluation',
      edge_description:
        'Fairness metrics quantify bias impact on underrepresented groups.',
    },
    {
      from: '2.1',
      to: '2.1.5',
      relationship_type: 'transparency',
      edge_description:
        'Publishing bias-related reports fosters openness and accountability.',
    },
    {
      from: '2.2',
      to: '2.2.1',
      relationship_type: 'compliance',
      edge_description:
        'Ensuring global data privacy standards compliance is non-negotiable.',
    },
    {
      from: '2.2',
      to: '2.2.2',
      relationship_type: 'security',
      edge_description:
        'Data anonymization and encryption protect user information from breaches.',
    },
    {
      from: '2.2',
      to: '2.2.3',
      relationship_type: 'consent',
      edge_description:
        'User consent mechanisms clarify and authorize data collection.',
    },
    {
      from: '2.2',
      to: '2.2.4',
      relationship_type: 'user_right',
      edge_description:
        'Opt-out and deletion policies uphold user autonomy over their data.',
    },
    {
      from: '2.2',
      to: '2.2.5',
      relationship_type: 'awareness',
      edge_description:
        'Informing users of privacy risks promotes informed decision-making.',
    },
    {
      from: '2.3',
      to: '2.3.1',
      relationship_type: 'traceability',
      edge_description:
        'Logging all AI decisions enables audit trails for accountability.',
    },
    {
      from: '2.3',
      to: '2.3.2',
      relationship_type: 'verification',
      edge_description:
        'Third-party audits validate adherence to ethical guidelines.',
    },
    {
      from: '2.3',
      to: '2.3.3',
      relationship_type: 'oversight',
      edge_description:
        'Clearly defined human overseers ensure responsible AI decision-making.',
    },
    {
      from: '2.3',
      to: '2.3.4',
      relationship_type: 'response',
      edge_description:
        'Incident response plans mitigate harmful AI outcomes quickly.',
    },
    {
      from: '2.3',
      to: '2.3.5',
      relationship_type: 'feedback',
      edge_description:
        'User issue reporting provides a channel to identify AI errors.',
    },
    {
      from: '2.4',
      to: '2.4.1',
      relationship_type: 'clarity',
      edge_description:
        'Communicating AI limitations fosters realistic user expectations.',
    },
    {
      from: '2.4',
      to: '2.4.2',
      relationship_type: 'openness',
      edge_description:
        'Publishing technical documentation offers transparency in development.',
    },
    {
      from: '2.4',
      to: '2.4.3',
      relationship_type: 'explanation',
      edge_description:
        'Interpretability tools clarify how AI arrives at decisions.',
    },
    {
      from: '2.4',
      to: '2.4.4',
      relationship_type: 'disclosure',
      edge_description:
        'Users must be informed when they are interacting with AI.',
    },
    {
      from: '2.4',
      to: '2.4.5',
      relationship_type: 'visibility',
      edge_description:
        'Visual or auditory indicators inform users that AI systems are operational.',
    },
    {
      from: '3',
      to: '3.1',
      relationship_type: 'foundation',
      edge_description:
        'Data Protection underpins AI Data Security by ensuring robust encryption and access controls.',
    },
    {
      from: '3',
      to: '3.2',
      relationship_type: 'requirement',
      edge_description:
        'System Integrity measures are essential for preventing and mitigating cyber threats in AI Data Security.',
    },
    {
      from: '3',
      to: '3.3',
      relationship_type: 'requirement',
      edge_description:
        'A structured Incident Response framework is critical for AI Data Security readiness and resilience.',
    },
    {
      from: '3',
      to: '3.4',
      relationship_type: 'requirement',
      edge_description:
        'Compliance Monitoring ensures ongoing adherence to data security regulations and standards.',
    },
    {
      from: '3.1',
      to: '3.1.1',
      relationship_type: 'technical',
      edge_description:
        'Encryption at rest and in transit is a fundamental technical safeguard for Data Protection.',
    },
    {
      from: '3.1',
      to: '3.1.2',
      relationship_type: 'authorization',
      edge_description:
        'Role-based access control restricts unauthorized data exposure for Data Protection.',
    },
    {
      from: '3.1',
      to: '3.1.3',
      relationship_type: 'monitoring',
      edge_description:
        'Regular access log audits detect suspicious activities and bolster Data Protection.',
    },
    {
      from: '3.1',
      to: '3.1.4',
      relationship_type: 'security',
      edge_description:
        'Secure authentication protocols, including multi-factor methods, prevent unauthorized system access.',
    },
    {
      from: '3.1',
      to: '3.1.5',
      relationship_type: 'privacy',
      edge_description:
        'Anonymizing PII is critical to preserving individual privacy under Data Protection.',
    },
    {
      from: '3.2',
      to: '3.2.1',
      relationship_type: 'defense',
      edge_description:
        'Intrusion detection/prevention is crucial for safeguarding AI infrastructure integrity.',
    },
    {
      from: '3.2',
      to: '3.2.2',
      relationship_type: 'maintenance',
      edge_description:
        'Regular software updates address vulnerabilities to uphold System Integrity.',
    },
    {
      from: '3.2',
      to: '3.2.3',
      relationship_type: 'development',
      edge_description:
        'Secure coding practices reduce exploitation risks, supporting System Integrity.',
    },
    {
      from: '3.2',
      to: '3.2.4',
      relationship_type: 'protection',
      edge_description:
        'Runtime application self-protection monitors and shields AI apps in real-time.',
    },
    {
      from: '3.2',
      to: '3.2.5',
      relationship_type: 'assessment',
      edge_description:
        'Periodic penetration testing uncovers vulnerabilities to maintain System Integrity.',
    },
    {
      from: '3.3',
      to: '3.3.1',
      relationship_type: 'planning',
      edge_description:
        'Having an incident response plan ready is pivotal to addressing AI security failures.',
    },
    {
      from: '3.3',
      to: '3.3.2',
      relationship_type: 'preparedness',
      edge_description:
        'Training staff ensures a swift, coordinated response to AI-related security breaches.',
    },
    {
      from: '3.3',
      to: '3.3.3',
      relationship_type: 'review',
      edge_description:
        'Post-incident analysis identifies root causes, informing ongoing improvements.',
    },
    {
      from: '3.3',
      to: '3.3.4',
      relationship_type: 'automation',
      edge_description:
        'Automated threat detection speeds response and notification to stakeholders.',
    },
    {
      from: '3.3',
      to: '3.3.5',
      relationship_type: 'documentation',
      edge_description:
        'Documenting security incidents ensures compliance and fosters organizational learning.',
    },
    {
      from: '3.4',
      to: '3.4.1',
      relationship_type: 'compliance',
      edge_description:
        'Setting up monitoring systems upholds data security regulations (e.g., GDPR).',
    },
    {
      from: '3.4',
      to: '3.4.2',
      relationship_type: 'analysis',
      edge_description:
        'Regular risk assessments uncover potential threats and inform security strategies.',
    },
    {
      from: '3.4',
      to: '3.4.3',
      relationship_type: 'measurement',
      edge_description:
        'KPIs measure the effectiveness of security controls under Compliance Monitoring.',
    },
    {
      from: '3.4',
      to: '3.4.4',
      relationship_type: 'transparency',
      edge_description:
        'Third-party audits promote accountability and trust in security practices.',
    },
    {
      from: '3.4',
      to: '3.4.5',
      relationship_type: 'communication',
      edge_description:
        'Regular updates keep stakeholders informed about compliance statuses and initiatives.',
    },
    {
      from: '4',
      to: '4.1',
      relationship_type: 'requirement',
      edge_description:
        'User Awareness is fundamental to AI-Human Interaction, ensuring transparent and informed use.',
    },
    {
      from: '4',
      to: '4.2',
      relationship_type: 'requirement',
      edge_description:
        'Decision Accountability is critical for safe and responsible AI-Human Interaction.',
    },
    {
      from: '4',
      to: '4.3',
      relationship_type: 'requirement',
      edge_description:
        'Ethical Alignment ensures AI-Human Interaction aligns with fairness and responsible conduct.',
    },
    {
      from: '4',
      to: '4.4',
      relationship_type: 'requirement',
      edge_description:
        'Accessibility measures expand the usability and inclusivity of AI-Human Interaction.',
    },
    {
      from: '4.1',
      to: '4.1.1',
      relationship_type: 'transparency',
      edge_description:
        'Notifying users of AI involvement upholds transparency in User Awareness.',
    },
    {
      from: '4.1',
      to: '4.1.2',
      relationship_type: 'education',
      edge_description:
        'Providing documentation educates users about AI capabilities and limitations.',
    },
    {
      from: '4.1',
      to: '4.1.3',
      relationship_type: 'guidance',
      edge_description:
        'Interactive tutorials guide users on system functionalities and usage.',
    },
    {
      from: '4.1',
      to: '4.1.4',
      relationship_type: 'feedback',
      edge_description:
        'User feedback mechanisms enable iterative improvements and issue reporting.',
    },
    {
      from: '4.1',
      to: '4.1.5',
      relationship_type: 'reminder',
      edge_description:
        'Periodic reminders reinforce user awareness of interacting with a non-human system.',
    },
    {
      from: '4.2',
      to: '4.2.1',
      relationship_type: 'traceability',
      edge_description:
        'Logging critical decisions ensures traceability for accountability.',
    },
    {
      from: '4.2',
      to: '4.2.2',
      relationship_type: 'control',
      edge_description:
        'Operator override capabilities provide human oversight in high-risk AI decisions.',
    },
    {
      from: '4.2',
      to: '4.2.3',
      relationship_type: 'explainability',
      edge_description:
        'Explainable AI decisions support user trust and informed acceptance.',
    },
    {
      from: '4.2',
      to: '4.2.4',
      relationship_type: 'safeguard',
      edge_description:
        'Requiring human validation is a safeguard for critical AI decisions.',
    },
    {
      from: '4.2',
      to: '4.2.5',
      relationship_type: 'alert',
      edge_description:
        'Alerts to unusual AI behavior keep operators informed and prepared to intervene.',
    },
    {
      from: '4.3',
      to: '4.3.1',
      relationship_type: 'principle',
      edge_description:
        'Adherence to ethical guidelines ensures fairness and respect for user rights.',
    },
    {
      from: '4.3',
      to: '4.3.2',
      relationship_type: 'verification',
      edge_description:
        'Regular audits confirm ongoing alignment with ethical standards.',
    },
    {
      from: '4.3',
      to: '4.3.3',
      relationship_type: 'risk_management',
      edge_description:
        'Avoiding vulnerable environments prevents exacerbating social or economic inequalities.',
    },
    {
      from: '4.3',
      to: '4.3.4',
      relationship_type: 'content',
      edge_description:
        'Ensuring no harmful or misleading AI-generated content maintains ethical integrity.',
    },
    {
      from: '4.3',
      to: '4.3.5',
      relationship_type: 'prevention',
      edge_description:
        'Safeguards protect AI systems from misuse or unethical exploitation.',
    },
    {
      from: '4.4',
      to: '4.4.1',
      relationship_type: 'inclusion',
      edge_description:
        'Designing AI for users with disabilities broadens accessibility.',
    },
    {
      from: '4.4',
      to: '4.4.2',
      relationship_type: 'adaptation',
      edge_description:
        'Providing alternative I/O methods addresses varying user needs.',
    },
    {
      from: '4.4',
      to: '4.4.3',
      relationship_type: 'customization',
      edge_description:
        'Customizable visual/auditory feedback accommodates diverse preferences.',
    },
    {
      from: '4.4',
      to: '4.4.4',
      relationship_type: 'maintenance',
      edge_description:
        'Regular accessibility updates keep AI systems in step with evolving standards.',
    },
    {
      from: '4.4',
      to: '4.4.5',
      relationship_type: 'usability',
      edge_description:
        'Usability tests with diverse groups ensure inclusivity and effectiveness.',
    },
    {
      from: '5',
      to: '5.1',
      relationship_type: 'foundation',
      edge_description:
        'Human-Centric Design serves as a foundational element of the AI Ethical Framework.',
    },
    {
      from: '5',
      to: '5.2',
      relationship_type: 'foundation',
      edge_description:
        'Transparency is fundamental for implementing an AI Ethical Framework.',
    },
    {
      from: '5',
      to: '5.3',
      relationship_type: 'foundation',
      edge_description:
        'Safety and Robustness are cornerstones in maintaining the AI Ethical Framework.',
    },
    {
      from: '5.1',
      to: '5.1.1',
      relationship_type: 'value_alignment',
      edge_description:
        'Prioritizing respect for human dignity, democracy, and rule of law aligns AI with core Union values.',
    },
    {
      from: '5.1',
      to: '5.1.2',
      relationship_type: 'oversight',
      edge_description:
        'Meaningful human oversight ensures control over high-risk AI applications.',
    },
    {
      from: '5.1',
      to: '5.1.3',
      relationship_type: 'assessment',
      edge_description:
        'Ethical impact assessments identify potential harm and guide mitigations.',
    },
    {
      from: '5.1',
      to: '5.1.4',
      relationship_type: 'contestability',
      edge_description:
        'Mechanisms to contest AI decisions uphold user rights and control.',
    },
    {
      from: '5.1',
      to: '5.1.5',
      relationship_type: 'inclusivity',
      edge_description:
        'Promoting diversity prevents discrimination and ensures fair representation.',
    },
    {
      from: '5.2',
      to: '5.2.1',
      relationship_type: 'explainability',
      edge_description:
        'Transparent, explainable AI models enhance user understanding and trust.',
    },
    {
      from: '5.2',
      to: '5.2.2',
      relationship_type: 'documentation',
      edge_description:
        'Detailed system documentation clarifies capabilities, risks, and limitations.',
    },
    {
      from: '5.2',
      to: '5.2.3',
      relationship_type: 'disclosure',
      edge_description:
        'Notifying users about AI interactions supports informed engagement.',
    },
    {
      from: '5.2',
      to: '5.2.4',
      relationship_type: 'accountability',
      edge_description:
        'Maintaining traceability of outcomes ensures accountability in deployment.',
    },
    {
      from: '5.2',
      to: '5.2.5',
      relationship_type: 'data_clarity',
      edge_description:
        'Documenting training data origin, preprocessing, and validation fosters transparency.',
    },
    {
      from: '5.3',
      to: '5.3.1',
      relationship_type: 'testing',
      edge_description:
        'Rigorous testing under varied conditions ensures AI reliability before deployment.',
    },
    {
      from: '5.3',
      to: '5.3.2',
      relationship_type: 'bias_control',
      edge_description:
        'Safeguards for detecting and mitigating bias maintain fairness in decision-making.',
    },
    {
      from: '5.3',
      to: '5.3.3',
      relationship_type: 'monitoring',
      edge_description:
        'Continuous monitoring and updates preserve AI safety standards over time.',
    },
    {
      from: '5.3',
      to: '5.3.4',
      relationship_type: 'failsafe',
      edge_description:
        'Fail-safe mechanisms minimize harm in the event of AI malfunction or misuse.',
    },
    {
      from: '5.3',
      to: '5.3.5',
      relationship_type: 'audit',
      edge_description:
        'Periodic safety audits ensure ongoing adherence to ethical guidelines.',
    },
  ],
};
