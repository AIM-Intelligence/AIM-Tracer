export const data = [
  {
    policy_id: '1.1.1',
    category: 'AI Safety and Compliance',
    subcategory: '1.1 Hazard Detection',
    policy_rule:
      'Ensure AI systems can accurately detect and respond to potential hazards in real-time, including pedestrians, obstacles, and other vehicles.',
    severity_level: 1,
    response_template: [
      'The system has detected a potential hazard ahead. Taking corrective action to ensure safety.',
    ],
  },
  {
    policy_id: '1.1.2',
    category: 'AI Safety and Compliance',
    subcategory: '1.1 Hazard Detection',
    policy_rule:
      'AI must identify and categorize road conditions, such as icy surfaces, potholes, or debris, to adjust vehicle behavior accordingly.',
    severity_level: 1,
    response_template: [
      'Road condition detected: {condition}. Adjusting vehicle controls to maintain safety.',
    ],
  },
  {
    policy_id: '1.1.3',
    category: 'AI Safety and Compliance',
    subcategory: '1.1 Hazard Detection',
    policy_rule:
      'AI systems must recognize emergency vehicle signals and prioritize their passage as per local traffic laws.',
    severity_level: 1,
    response_template: [
      'Emergency vehicle detected. Yielding right-of-way as per regulations.',
    ],
  },
  {
    policy_id: '1.1.4',
    category: 'AI Safety and Compliance',
    subcategory: '1.1 Hazard Detection',
    policy_rule:
      'Detect unauthorized or risky driving behaviors, such as aggressive overtaking or tailgating, and adjust accordingly to maintain safety.',
    severity_level: 2,
    response_template: [
      'Risky driving behavior detected nearby. Maintaining safe distance and alerting driver.',
    ],
  },
  {
    policy_id: '1.1.5',
    category: 'AI Safety and Compliance',
    subcategory: '1.1 Hazard Detection',
    policy_rule:
      'Alert drivers and adjust vehicle actions during extreme weather conditions, such as heavy rain, fog, or storms.',
    severity_level: 1,
    response_template: [
      'Extreme weather detected: {weather_condition}. Adjusting vehicle settings for optimal safety.',
    ],
  },
  {
    policy_id: '1.2.1',
    category: 'AI Safety and Compliance',
    subcategory: '1.2 System Transparency',
    policy_rule:
      'Provide real-time updates to drivers on AI decision-making processes and safety actions taken.',
    severity_level: 2,
    response_template: [
      'Action taken: {action_description}. Reason: {decision_reason}.',
    ],
  },
  {
    policy_id: '1.2.2',
    category: 'AI Safety and Compliance',
    subcategory: '1.2 System Transparency',
    policy_rule:
      'Log all AI-driven safety decisions for audit purposes and future improvements.',
    severity_level: 3,
    response_template: ['Safety decision logged: {decision_details}.'],
  },
  {
    policy_id: '1.2.3',
    category: 'AI Safety and Compliance',
    subcategory: '1.2 System Transparency',
    policy_rule:
      'Ensure AI communicates any limitations in sensor functionality or data interpretation to the driver.',
    severity_level: 2,
    response_template: [
      'Sensor limitation detected: {sensor_issue}. Please proceed with caution.',
    ],
  },
  {
    policy_id: '1.2.4',
    category: 'AI Safety and Compliance',
    subcategory: '1.2 System Transparency',
    policy_rule:
      'Notify drivers when a handover from AI to manual control is required and provide sufficient time for the transition.',
    severity_level: 1,
    response_template: [
      'AI to manual control transition required. Prepare to take control in {time_frame}.',
    ],
  },
  {
    policy_id: '1.2.5',
    category: 'AI Safety and Compliance',
    subcategory: '1.2 System Transparency',
    policy_rule:
      "Display AI's confidence levels in decisions when faced with ambiguous scenarios.",
    severity_level: 2,
    response_template: [
      'Decision confidence: {confidence_level}. Proceeding with caution.',
    ],
  },
  {
    policy_id: '1.3.1',
    category: 'AI Safety and Compliance',
    subcategory: '1.3 Data Privacy',
    policy_rule:
      'Encrypt all data collected by AI systems to protect against unauthorized access.',
    severity_level: 3,
    response_template: [
      'Data securely encrypted. Ensuring compliance with privacy standards.',
    ],
  },
  {
    policy_id: '1.3.2',
    category: 'AI Safety and Compliance',
    subcategory: '1.3 Data Privacy',
    policy_rule:
      'Minimize data collection to only what is essential for safety and functionality.',
    severity_level: 2,
    response_template: ['Collecting only necessary data for functionality.'],
  },
  {
    policy_id: '1.3.3',
    category: 'AI Safety and Compliance',
    subcategory: '1.3 Data Privacy',
    policy_rule:
      'Allow users to access and delete their data stored by the AI system.',
    severity_level: 2,
    response_template: [
      'You can request access or deletion of your data through {process_description}.',
    ],
  },
  {
    policy_id: '1.3.4',
    category: 'AI Safety and Compliance',
    subcategory: '1.3 Data Privacy',
    policy_rule:
      'Ensure data anonymization before sharing with third parties for research or analytics.',
    severity_level: 3,
    response_template: ['Data anonymized before sharing for analytics.'],
  },
  {
    policy_id: '1.3.5',
    category: 'AI Safety and Compliance',
    subcategory: '1.3 Data Privacy',
    policy_rule:
      'Inform users about data usage policies during initial AI system setup.',
    severity_level: 2,
    response_template: [
      'Data usage policies: {policy_summary}. For full details, visit {url}.',
    ],
  },
  {
    policy_id: '1.4.1',
    category: 'AI Safety and Compliance',
    subcategory: '1.4 System Maintenance',
    policy_rule:
      'Regularly update AI software to address vulnerabilities and improve functionality.',
    severity_level: 2,
    response_template: [
      'System update available: {update_details}. Applying updates now.',
    ],
  },
  {
    policy_id: '1.4.2',
    category: 'AI Safety and Compliance',
    subcategory: '1.4 System Maintenance',
    policy_rule:
      'Notify users of mandatory maintenance checks and system diagnostics.',
    severity_level: 1,
    response_template: [
      'Scheduled maintenance required: {maintenance_details}. Please visit {service_center}.',
    ],
  },
  {
    policy_id: '1.4.3',
    category: 'AI Safety and Compliance',
    subcategory: '1.4 System Maintenance',
    policy_rule:
      'Monitor AI system performance and flag any anomalies for immediate review.',
    severity_level: 3,
    response_template: [
      'System anomaly detected: {anomaly_description}. Escalating for review.',
    ],
  },
  {
    policy_id: '1.4.4',
    category: 'AI Safety and Compliance',
    subcategory: '1.4 System Maintenance',
    policy_rule:
      'Ensure redundancy systems are functional to prevent failures in critical scenarios.',
    severity_level: 3,
    response_template: [
      'Redundancy systems check completed. All systems operational.',
    ],
  },
  {
    policy_id: '1.4.5',
    category: 'AI Safety and Compliance',
    subcategory: '1.4 System Maintenance',
    policy_rule:
      'Provide users with a clear escalation process for unresolved AI system issues.',
    severity_level: 1,
    response_template: [
      'For unresolved issues, please contact {support_details}.',
    ],
  },
  {
    policy_id: '2.1.1',
    category: 'Ethical AI Development',
    subcategory: '2.1 Bias Mitigation',
    policy_rule:
      'AI systems must undergo comprehensive testing to identify and reduce biases in datasets, ensuring equitable outcomes for all user demographics.',
    severity_level: 2,
    response_template: [
      'Bias detected in dataset related to {specific_attribute}. Adjusting data preprocessing pipeline to mitigate bias.',
    ],
  },
  {
    policy_id: '2.1.2',
    category: 'Ethical AI Development',
    subcategory: '2.1 Bias Mitigation',
    policy_rule:
      'Implement continuous monitoring of AI outputs to identify potential biases arising from system behavior over time.',
    severity_level: 2,
    response_template: [
      'Monitoring AI outputs for potential biases. Alert triggered for unusual patterns in {output_metric}.',
    ],
  },
  {
    policy_id: '2.1.3',
    category: 'Ethical AI Development',
    subcategory: '2.1 Bias Mitigation',
    policy_rule:
      'Establish diverse teams for AI system training and validation to minimize cultural, social, and gender biases in model development.',
    severity_level: 1,
    response_template: [
      'Team diversity check completed. Ensuring inclusive perspectives in model development.',
    ],
  },
  {
    policy_id: '2.1.4',
    category: 'Ethical AI Development',
    subcategory: '2.1 Bias Mitigation',
    policy_rule:
      'Incorporate fairness metrics during model evaluation to quantify the impact of decisions on underrepresented groups.',
    severity_level: 2,
    response_template: [
      'Fairness metric evaluation in progress. Results indicate {fairness_score} for {demographic_group}.',
    ],
  },
  {
    policy_id: '2.1.5',
    category: 'Ethical AI Development',
    subcategory: '2.1 Bias Mitigation',
    policy_rule:
      'Publish transparency reports detailing efforts to address bias and promote fairness in AI systems.',
    severity_level: 3,
    response_template: ['Transparency report published: {report_link}.'],
  },
  {
    policy_id: '2.2.1',
    category: 'Ethical AI Development',
    subcategory: '2.2 User Privacy',
    policy_rule:
      'AI systems must ensure all data collection complies with GDPR and equivalent privacy standards globally.',
    severity_level: 3,
    response_template: [
      'Data collection protocol verified for GDPR compliance. No violations detected.',
    ],
  },
  {
    policy_id: '2.2.2',
    category: 'Ethical AI Development',
    subcategory: '2.2 User Privacy',
    policy_rule:
      'User data must be anonymized and encrypted during storage and transmission to prevent unauthorized access.',
    severity_level: 3,
    response_template: [
      'User data anonymized and securely encrypted. No vulnerabilities identified in the encryption protocol.',
    ],
  },
  {
    policy_id: '2.2.3',
    category: 'Ethical AI Development',
    subcategory: '2.2 User Privacy',
    policy_rule:
      'Implement user consent mechanisms for all data collected, including clear explanations of data usage.',
    severity_level: 1,
    response_template: [
      'User consent form verified. Data collection initiated with explicit consent.',
    ],
  },
  {
    policy_id: '2.2.4',
    category: 'Ethical AI Development',
    subcategory: '2.2 User Privacy',
    policy_rule:
      'Allow users to opt out of data collection or request data deletion at any time.',
    severity_level: 2,
    response_template: [
      'User data deletion request processed successfully. All related records purged.',
    ],
  },
  {
    policy_id: '2.2.5',
    category: 'Ethical AI Development',
    subcategory: '2.2 User Privacy',
    policy_rule:
      'Ensure AI systems provide clear and concise notifications of potential privacy risks to users.',
    severity_level: 2,
    response_template: [
      'Privacy risk detected: {risk_detail}. User notified and guidance provided.',
    ],
  },
  {
    policy_id: '2.3.1',
    category: 'Ethical AI Development',
    subcategory: '2.3 System Accountability',
    policy_rule:
      'Log all decisions made by AI systems for auditing and compliance verification.',
    severity_level: 3,
    response_template: ['Decision log updated. Entry ID: {log_id}.'],
  },
  {
    policy_id: '2.3.2',
    category: 'Ethical AI Development',
    subcategory: '2.3 System Accountability',
    policy_rule:
      'Establish mechanisms for third-party audits of AI systems to ensure adherence to ethical guidelines.',
    severity_level: 3,
    response_template: [
      'Third-party audit scheduled. Audit scope includes {scope_details}.',
    ],
  },
  {
    policy_id: '2.3.3',
    category: 'Ethical AI Development',
    subcategory: '2.3 System Accountability',
    policy_rule:
      'Assign accountability for AI decision-making to clearly defined human overseers.',
    severity_level: 1,
    response_template: [
      'Accountability assigned to {person_role}. Oversight process initiated.',
    ],
  },
  {
    policy_id: '2.3.4',
    category: 'Ethical AI Development',
    subcategory: '2.3 System Accountability',
    policy_rule:
      'Develop incident response plans to address and rectify harmful outcomes caused by AI systems.',
    severity_level: 2,
    response_template: [
      'Incident response plan activated. Mitigation steps in progress for {incident_description}.',
    ],
  },
  {
    policy_id: '2.3.5',
    category: 'Ethical AI Development',
    subcategory: '2.3 System Accountability',
    policy_rule:
      'Provide users with a mechanism to report errors or issues encountered with AI systems.',
    severity_level: 1,
    response_template: [
      'User issue report received. Assigned for investigation: {issue_id}.',
    ],
  },
  {
    policy_id: '2.4.1',
    category: 'Ethical AI Development',
    subcategory: '2.4 Transparency',
    policy_rule:
      'AI systems must clearly communicate their limitations and capabilities to users.',
    severity_level: 2,
    response_template: [
      'System capability notification: {capability_summary}.',
    ],
  },
  {
    policy_id: '2.4.2',
    category: 'Ethical AI Development',
    subcategory: '2.4 Transparency',
    policy_rule:
      'Publish detailed technical documentation for AI models, including training data sources and algorithms used.',
    severity_level: 3,
    response_template: [
      'Technical documentation published: {documentation_link}.',
    ],
  },
  {
    policy_id: '2.4.3',
    category: 'Ethical AI Development',
    subcategory: '2.4 Transparency',
    policy_rule:
      'Provide interpretability tools to explain AI decision-making processes to users.',
    severity_level: 2,
    response_template: [
      'Interpretability tool activated. Explanation for decision: {decision_explanation}.',
    ],
  },
  {
    policy_id: '2.4.4',
    category: 'Ethical AI Development',
    subcategory: '2.4 Transparency',
    policy_rule:
      'Disclose the presence of AI systems to users during interactions.',
    severity_level: 1,
    response_template: ['Notification: You are interacting with an AI system.'],
  },
  {
    policy_id: '2.4.5',
    category: 'Ethical AI Development',
    subcategory: '2.4 Transparency',
    policy_rule:
      'Ensure visual or auditory indicators are present to signal when AI systems are operational.',
    severity_level: 1,
    response_template: ['Operational indicator active: {indicator_type}.'],
  },
  {
    policy_id: '3.1.1',
    category: 'AI Data Security',
    subcategory: '3.1 Data Protection',
    policy_rule:
      'AI systems must encrypt data at rest and in transit using industry-standard encryption protocols to ensure data confidentiality and integrity.',
    severity_level: 3,
    response_template: [
      'Data encrypted using {encryption_standard}. Verifying integrity during transit.',
    ],
  },
  {
    policy_id: '3.1.2',
    category: 'AI Data Security',
    subcategory: '3.1 Data Protection',
    policy_rule:
      'Establish access control mechanisms to restrict data access based on user roles and responsibilities.',
    severity_level: 2,
    response_template: [
      'Access control in place: {user_role} granted permissions as per policy.',
    ],
  },
  {
    policy_id: '3.1.3',
    category: 'AI Data Security',
    subcategory: '3.1 Data Protection',
    policy_rule:
      'Conduct regular audits of data access logs to detect unauthorized access and mitigate risks.',
    severity_level: 2,
    response_template: [
      'Audit completed: {audit_results}. No unauthorized access detected.',
    ],
  },
  {
    policy_id: '3.1.4',
    category: 'AI Data Security',
    subcategory: '3.1 Data Protection',
    policy_rule:
      'Implement secure authentication protocols, including multi-factor authentication, for all users accessing the AI system.',
    severity_level: 1,
    response_template: [
      'Multi-factor authentication enabled for all user accounts.',
    ],
  },
  {
    policy_id: '3.1.5',
    category: 'AI Data Security',
    subcategory: '3.1 Data Protection',
    policy_rule:
      'Ensure anonymization of personally identifiable information (PII) before processing data in AI models.',
    severity_level: 3,
    response_template: [
      'PII anonymized: {data_description} processed securely.',
    ],
  },
  {
    policy_id: '3.2.1',
    category: 'AI Data Security',
    subcategory: '3.2 System Integrity',
    policy_rule:
      'Deploy intrusion detection and prevention systems (IDPS) to safeguard AI infrastructure from cyberattacks.',
    severity_level: 2,
    response_template: [
      'Intrusion prevention active: {threat_details} mitigated.',
    ],
  },
  {
    policy_id: '3.2.2',
    category: 'AI Data Security',
    subcategory: '3.2 System Integrity',
    policy_rule:
      'Ensure that all software dependencies and libraries used in AI systems are updated regularly to patch vulnerabilities.',
    severity_level: 2,
    response_template: [
      'Dependency check completed: All libraries updated to latest versions.',
    ],
  },
  {
    policy_id: '3.2.3',
    category: 'AI Data Security',
    subcategory: '3.2 System Integrity',
    policy_rule:
      'Employ secure coding practices during the development of AI applications to minimize risks of exploitation.',
    severity_level: 2,
    response_template: [
      'Secure coding standards applied: No vulnerabilities identified.',
    ],
  },
  {
    policy_id: '3.2.4',
    category: 'AI Data Security',
    subcategory: '3.2 System Integrity',
    policy_rule:
      'Implement runtime application self-protection (RASP) to monitor and protect AI applications in real-time.',
    severity_level: 2,
    response_template: [
      'RASP activated: Monitoring AI applications in real-time.',
    ],
  },
  {
    policy_id: '3.2.5',
    category: 'AI Data Security',
    subcategory: '3.2 System Integrity',
    policy_rule:
      'Perform penetration testing on AI systems periodically to identify and address vulnerabilities.',
    severity_level: 2,
    response_template: [
      'Penetration test results: {test_summary}. Remediation steps underway.',
    ],
  },
  {
    policy_id: '3.3.1',
    category: 'AI Data Security',
    subcategory: '3.3 Incident Response',
    policy_rule:
      'Develop and maintain an incident response plan to address breaches or failures in AI security.',
    severity_level: 3,
    response_template: [
      'Incident response plan activated: Addressing {incident_type}.',
    ],
  },
  {
    policy_id: '3.3.2',
    category: 'AI Data Security',
    subcategory: '3.3 Incident Response',
    policy_rule:
      'Train staff on incident response protocols to ensure swift and effective action during AI-related security breaches.',
    severity_level: 1,
    response_template: [
      'Incident response training completed for all personnel.',
    ],
  },
  {
    policy_id: '3.3.3',
    category: 'AI Data Security',
    subcategory: '3.3 Incident Response',
    policy_rule:
      'Conduct post-incident reviews to analyze root causes and improve security measures.',
    severity_level: 2,
    response_template: [
      'Post-incident review completed: {incident_analysis} findings documented.',
    ],
  },
  {
    policy_id: '3.3.4',
    category: 'AI Data Security',
    subcategory: '3.3 Incident Response',
    policy_rule:
      'Integrate automated threat detection systems to notify stakeholders of breaches immediately.',
    severity_level: 3,
    response_template: ['Threat detected: Notification sent to stakeholders.'],
  },
  {
    policy_id: '3.3.5',
    category: 'AI Data Security',
    subcategory: '3.3 Incident Response',
    policy_rule:
      'Document all security incidents in a centralized repository for regulatory compliance and learning.',
    severity_level: 2,
    response_template: [
      'Incident documented: {incident_summary}. Repository updated.',
    ],
  },
  {
    policy_id: '3.4.1',
    category: 'AI Data Security',
    subcategory: '3.4 Compliance Monitoring',
    policy_rule:
      'Establish a compliance monitoring system to ensure adherence to data security regulations such as GDPR.',
    severity_level: 3,
    response_template: [
      'Compliance check completed: {regulation_name}. No violations found.',
    ],
  },
  {
    policy_id: '3.4.2',
    category: 'AI Data Security',
    subcategory: '3.4 Compliance Monitoring',
    policy_rule:
      'Perform regular risk assessments to identify potential threats to AI data security.',
    severity_level: 2,
    response_template: [
      'Risk assessment conducted: Identified {threat_level} risks.',
    ],
  },
  {
    policy_id: '3.4.3',
    category: 'AI Data Security',
    subcategory: '3.4 Compliance Monitoring',
    policy_rule:
      'Implement key performance indicators (KPIs) to measure the effectiveness of AI data security measures.',
    severity_level: 1,
    response_template: [
      'KPI results: {kpi_summary}. Security measures evaluated.',
    ],
  },
  {
    policy_id: '3.4.4',
    category: 'AI Data Security',
    subcategory: '3.4 Compliance Monitoring',
    policy_rule:
      'Enable third-party audits of AI security practices to ensure transparency and accountability.',
    severity_level: 3,
    response_template: [
      'Third-party audit scheduled: Scope includes {audit_focus}.',
    ],
  },
  {
    policy_id: '3.4.5',
    category: 'AI Data Security',
    subcategory: '3.4 Compliance Monitoring',
    policy_rule:
      'Regularly update stakeholders on compliance statuses and ongoing security initiatives.',
    severity_level: 1,
    response_template: [
      'Stakeholder update: Compliance status is {status_description}. Security initiatives detailed.',
    ],
  },
  {
    policy_id: '4.1.1',
    category: 'AI-Human Interaction',
    subcategory: '4.1 User Awareness',
    policy_rule:
      'AI systems must clearly notify users when they are interacting with an AI, ensuring transparency and informed consent.',
    severity_level: 1,
    response_template: [
      'Notification: This interaction involves an AI system.',
    ],
  },
  {
    policy_id: '4.1.2',
    category: 'AI-Human Interaction',
    subcategory: '4.1 User Awareness',
    policy_rule:
      'Provide users with accessible documentation on AI system capabilities, limitations, and the role of AI in decision-making processes.',
    severity_level: 2,
    response_template: ['Documentation shared with users: {link_to_resource}.'],
  },
  {
    policy_id: '4.1.3',
    category: 'AI-Human Interaction',
    subcategory: '4.1 User Awareness',
    policy_rule:
      'AI systems must include interactive tutorials for users to understand system functionalities before use.',
    severity_level: 2,
    response_template: ['Tutorial completed by user: {user_id}.'],
  },
  {
    policy_id: '4.1.4',
    category: 'AI-Human Interaction',
    subcategory: '4.1 User Awareness',
    policy_rule:
      'Implement feedback mechanisms allowing users to report issues or provide suggestions regarding AI interactions.',
    severity_level: 2,
    response_template: ['User feedback received: {feedback_details}.'],
  },
  {
    policy_id: '4.1.5',
    category: 'AI-Human Interaction',
    subcategory: '4.1 User Awareness',
    policy_rule:
      'AI systems should periodically remind users that they are interacting with non-human agents, especially during prolonged interactions.',
    severity_level: 1,
    response_template: ['Reminder issued: Interaction with AI ongoing.'],
  },
  {
    policy_id: '4.2.1',
    category: 'AI-Human Interaction',
    subcategory: '4.2 Decision Accountability',
    policy_rule:
      'AI systems must log all critical decision points to ensure traceability and accountability.',
    severity_level: 3,
    response_template: ['Decision log updated: {log_id}.'],
  },
  {
    policy_id: '4.2.2',
    category: 'AI-Human Interaction',
    subcategory: '4.2 Decision Accountability',
    policy_rule:
      'Provide human operators with override capabilities for high-risk AI decisions.',
    severity_level: 3,
    response_template: ['Override initiated by operator: {operator_id}.'],
  },
  {
    policy_id: '4.2.3',
    category: 'AI-Human Interaction',
    subcategory: '4.2 Decision Accountability',
    policy_rule:
      'Ensure all AI-driven decisions are explainable, providing users with comprehensible reasons for outcomes.',
    severity_level: 2,
    response_template: ['Decision explanation provided: {decision_details}.'],
  },
  {
    policy_id: '4.2.4',
    category: 'AI-Human Interaction',
    subcategory: '4.2 Decision Accountability',
    policy_rule:
      'AI systems must include a validation step requiring human confirmation for critical decisions.',
    severity_level: 3,
    response_template: ['Validation request sent: {decision_context}.'],
  },
  {
    policy_id: '4.2.5',
    category: 'AI-Human Interaction',
    subcategory: '4.2 Decision Accountability',
    policy_rule:
      'Human operators must receive alerts for unusual or outlier AI behavior in decision-making.',
    severity_level: 2,
    response_template: ['Alert issued: Unusual AI behavior detected.'],
  },
  {
    policy_id: '4.3.1',
    category: 'AI-Human Interaction',
    subcategory: '4.3 Ethical Alignment',
    policy_rule:
      'AI systems must adhere to ethical guidelines ensuring fairness, non-discrimination, and respect for user rights.',
    severity_level: 3,
    response_template: [
      'Ethical compliance check completed: {compliance_results}.',
    ],
  },
  {
    policy_id: '4.3.2',
    category: 'AI-Human Interaction',
    subcategory: '4.3 Ethical Alignment',
    policy_rule:
      'Conduct regular audits to ensure AI interactions align with ethical standards.',
    severity_level: 2,
    response_template: ['Audit results: {audit_summary}. Compliance achieved.'],
  },
  {
    policy_id: '4.3.3',
    category: 'AI-Human Interaction',
    subcategory: '4.3 Ethical Alignment',
    policy_rule:
      'Avoid deploying AI systems in environments where their use could exacerbate vulnerabilities or inequalities.',
    severity_level: 2,
    response_template: [
      'Risk assessment completed: Deployment approved for {environment}.',
    ],
  },
  {
    policy_id: '4.3.4',
    category: 'AI-Human Interaction',
    subcategory: '4.3 Ethical Alignment',
    policy_rule:
      'Ensure that AI-generated content does not include harmful, offensive, or misleading information.',
    severity_level: 3,
    response_template: [
      'Content validation complete: No harmful elements detected.',
    ],
  },
  {
    policy_id: '4.3.5',
    category: 'AI-Human Interaction',
    subcategory: '4.3 Ethical Alignment',
    policy_rule:
      'Include safeguards to prevent AI misuse or exploitation for unethical purposes.',
    severity_level: 3,
    response_template: ['Safeguards activated: {safeguard_description}.'],
  },
  {
    policy_id: '4.4.1',
    category: 'AI-Human Interaction',
    subcategory: '4.4 Accessibility',
    policy_rule:
      'Design AI systems to be inclusive and accessible for users with disabilities.',
    severity_level: 2,
    response_template: ['Accessibility features verified: {feature_list}.'],
  },
  {
    policy_id: '4.4.2',
    category: 'AI-Human Interaction',
    subcategory: '4.4 Accessibility',
    policy_rule:
      'Provide alternative input/output methods for users with varying needs, such as voice commands or screen readers.',
    severity_level: 1,
    response_template: [
      'Alternative methods implemented: {method_description}.',
    ],
  },
  {
    policy_id: '4.4.3',
    category: 'AI-Human Interaction',
    subcategory: '4.4 Accessibility',
    policy_rule:
      'Ensure that visual and auditory AI feedback is customizable to accommodate user preferences.',
    severity_level: 2,
    response_template: [
      'Customization enabled: Feedback settings adjusted for user {user_id}.',
    ],
  },
  {
    policy_id: '4.4.4',
    category: 'AI-Human Interaction',
    subcategory: '4.4 Accessibility',
    policy_rule:
      'Regularly update accessibility features to comply with evolving standards and technologies.',
    severity_level: 2,
    response_template: ['Accessibility features updated: {update_summary}.'],
  },
  {
    policy_id: '4.4.5',
    category: 'AI-Human Interaction',
    subcategory: '4.4 Accessibility',
    policy_rule:
      'Conduct usability tests with diverse user groups to ensure inclusivity and effectiveness.',
    severity_level: 1,
    response_template: [
      'Usability testing completed: Feedback from {user_group_description} incorporated.',
    ],
  },
  {
    policy_id: '5.1.1',
    category: 'AI Ethical Framework',
    subcategory: '5.1 Human-Centric Design',
    policy_rule:
      'AI systems must prioritize human well-being by adhering to Union values such as respect for human dignity, democracy, and the rule of law.',
    severity_level: 3,
    response_template: [
      'Framework implemented: AI system aligned with {specific_union_value}.',
    ],
  },
  {
    policy_id: '5.1.2',
    category: 'AI Ethical Framework',
    subcategory: '5.1 Human-Centric Design',
    policy_rule:
      'All AI systems must allow for meaningful human oversight to ensure that users remain in control of high-risk applications.',
    severity_level: 3,
    response_template: [
      'Human oversight mechanisms active for high-risk scenarios.',
    ],
  },
  {
    policy_id: '5.1.3',
    category: 'AI Ethical Framework',
    subcategory: '5.1 Human-Centric Design',
    policy_rule:
      'AI systems must undergo ethical impact assessments to identify and mitigate potential harm to users and stakeholders.',
    severity_level: 2,
    response_template: [
      'Ethical impact assessment completed: {assessment_results}.',
    ],
  },
  {
    policy_id: '5.1.4',
    category: 'AI Ethical Framework',
    subcategory: '5.1 Human-Centric Design',
    policy_rule:
      'Systems should provide mechanisms for users to contest decisions made solely by AI and seek human review.',
    severity_level: 2,
    response_template: [
      'Appeal mechanisms active: Human review enabled for AI decisions.',
    ],
  },
  {
    policy_id: '5.1.5',
    category: 'AI Ethical Framework',
    subcategory: '5.1 Human-Centric Design',
    policy_rule:
      'Promote diversity and inclusivity in AI system development to prevent discrimination and ensure fair representation.',
    severity_level: 2,
    response_template: [
      'Diversity metrics evaluated: Fair representation achieved.',
    ],
  },
  {
    policy_id: '5.2.1',
    category: 'AI Ethical Framework',
    subcategory: '5.2 Transparency',
    policy_rule:
      'Ensure that AI models and decision-making processes are transparent and explainable to end-users.',
    severity_level: 3,
    response_template: [
      'Transparency logs updated: Decision pathways documented.',
    ],
  },
  {
    policy_id: '5.2.2',
    category: 'AI Ethical Framework',
    subcategory: '5.2 Transparency',
    policy_rule:
      'Deployers must provide detailed documentation of AI system capabilities, limitations, and potential risks.',
    severity_level: 2,
    response_template: [
      'Documentation shared with stakeholders: {document_reference}.',
    ],
  },
  {
    policy_id: '5.2.3',
    category: 'AI Ethical Framework',
    subcategory: '5.2 Transparency',
    policy_rule:
      'AI systems must notify users when interacting with non-human agents to ensure informed engagement.',
    severity_level: 1,
    response_template: [
      'Notification sent: User informed about AI interaction.',
    ],
  },
  {
    policy_id: '5.2.4',
    category: 'AI Ethical Framework',
    subcategory: '5.2 Transparency',
    policy_rule:
      'Enable traceability of AI-generated outcomes to identify accountability at all stages of deployment.',
    severity_level: 3,
    response_template: [
      'Traceability logs maintained: Accountability pathways clear.',
    ],
  },
  {
    policy_id: '5.2.5',
    category: 'AI Ethical Framework',
    subcategory: '5.2 Transparency',
    policy_rule:
      'Ensure that data used for training AI models is well-documented, including its origin, preprocessing, and validation methods.',
    severity_level: 2,
    response_template: ['Training dataset documented: {dataset_details}.'],
  },
  {
    policy_id: '5.3.1',
    category: 'AI Ethical Framework',
    subcategory: '5.3 Safety and Robustness',
    policy_rule:
      'AI systems must be rigorously tested for reliability and robustness under varied conditions before deployment.',
    severity_level: 3,
    response_template: [
      'System testing completed: Reliability metrics validated.',
    ],
  },
  {
    policy_id: '5.3.2',
    category: 'AI Ethical Framework',
    subcategory: '5.3 Safety and Robustness',
    policy_rule:
      'Include safeguards to detect and mitigate unintended biases in AI decision-making.',
    severity_level: 3,
    response_template: [
      'Bias mitigation measures active: Monitoring in progress.',
    ],
  },
  {
    policy_id: '5.3.3',
    category: 'AI Ethical Framework',
    subcategory: '5.3 Safety and Robustness',
    policy_rule:
      'Deployers must establish protocols for continuous monitoring and updates to maintain AI safety standards.',
    severity_level: 2,
    response_template: [
      'Monitoring protocols operational: AI safety standards upheld.',
    ],
  },
  {
    policy_id: '5.3.4',
    category: 'AI Ethical Framework',
    subcategory: '5.3 Safety and Robustness',
    policy_rule:
      'AI systems should include fail-safe mechanisms to minimize harm in case of malfunction or misuse.',
    severity_level: 2,
    response_template: [
      'Fail-safe systems operational: Harm minimization confirmed.',
    ],
  },
  {
    policy_id: '5.3.5',
    category: 'AI Ethical Framework',
    subcategory: '5.3 Safety and Robustness',
    policy_rule:
      'Conduct periodic safety audits and ensure alignment with updated ethical guidelines.',
    severity_level: 2,
    response_template: [
      'Safety audit completed: Alignment with ethical guidelines verified.',
    ],
  },
];
