import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityAssessmentmetadataProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
   */
readonly assessmentType: 'BuiltIn''CustomPolicy''CustomerManaged''VerifiedPartner';

/**
   * 
   */
readonly categories?: String array containing any of:'Compute''Data''IdentityAndAccess''IoT''Networking';

/**
   * Human readable description of the assessment
   */
readonly description?: string;

/**
   * User friendly display name of the assessment
   */
readonly displayName: string;

/**
   * The implementation effort required to remediate this assessment
   */
readonly implementationEffort?: 'High''Low''Moderate';

/**
   * Describes the partner that created the assessment
   */
readonly partnerData?: SecurityAssessmentMetadataPartnerData;

/**
   * 
   */
readonly plannedDeprecationDate?: stringConstranumbers:Pattern =^[0-9]{2}/[0-9]{4}$;

/**
   * True if this assessment is in preview release status
   */
readonly preview?: bool;

/**
   * 
   */
readonly publishDates?: SecurityAssessmentMetadataPropertiesResponsePublishD...;

/**
   * Human readable description of what you should do to mitigate this security issue
   */
readonly remediationDescription?: string;

/**
   * The severity level of the assessment
   */
readonly severity: 'High''Low''Medium';

/**
   * 
   */
readonly tactics?: String array containing any of:'Collection''Command and Control''Credential Access''Defense Evasion''Discovery''Execution''Exfiltration''Impact''Initial Access''Lateral Movement''Persistence''Privilege Escalation''Reconnaissance''Resource Development';

/**
   * 
   */
readonly techniques?: String array containing any of:'Abuse Elevation Control Mechanism''Access Token Manipulation''Account Discovery''Account Manipulation''Active Scanning''Application Layer Protocol''Audio Capture''Boot or Logon Autostart Execution''Boot or Logon Initialization Scripts''Brute Force''Cloud Infrastructure Discovery''Cloud Service Dashboard''Cloud Service Discovery''Command and Scripting Interpreter''Compromise Client Software Binary''Compromise Infrastructure''Container and Resource Discovery''Create Account''Create or Modify System Process''Credentials from Password Stores''Data Destruction''Data Encrypted for Impact''Data Manipulation''Data Staged''Data from Cloud Storage Object''Data from Configuration Repository''Data from Information Repositories''Data from Local System''Defacement''Deobfuscate/Decode Files or Information''Disk Wipe''Domain Trust Discovery''Drive-by Compromise''Dynamic Resolution''Endponumber Denial of Service''Event Triggered Execution''Exfiltration Over Alternative Protocol''Exploit Public-Facing Application''Exploitation for Client Execution''Exploitation for Credential Access''Exploitation for Defense Evasion''Exploitation for Privilege Escalation''Exploitation of Remote Services''External Remote Services''Fallback Channels''File and Directory Discovery''File and Directory Permissions Modification''Gather Victim Network Information''Hide Artifacts''Hijack Execution Flow''Impair Defenses''Implant Container Image''Indicator Removal on Host''Indirect Command Execution''Ingress Tool Transfer''Input Capture''Inter-Process Communication''Lateral Tool Transfer''Man-in-the-Middle''Masquerading''Modify Authentication Process''Modify Registry''Network Denial of Service''Network Service Scanning''Network Sniffing''Non-Application Layer Protocol''Non-Standard Port''OS Credential Dumping''Obfuscated Files or Information''Obtain Capabilities''Office Application Startup''Permission Groups Discovery''Phishing''Pre-OS Boot''Process Discovery''Process Injection''Protocol Tunneling''Proxy''Query Registry''Remote Access Software''Remote Service Session Hijacking''Remote Services''Remote System Discovery''Resource Hijacking''SQL Stored Procedures''Scheduled Task/Job''Screen Capture''Search Victim-Owned Websites''Server Software Component''Service Stop''Signed Binary Proxy Execution''Software Deployment Tools''Steal or Forge Kerberos Tickets''Subvert Trust Controls''Supply Chain Compromise''System Information Discovery''Tanumber Shared Content''Traffic Signaling''Transfer Data to Cloud Account''Trusted Relationship''Unsecured Credentials''User Execution''Valid Accounts''Windows Management Instrumentation';

/**
   * 
   */
readonly threats?: String array containing any of:'accountBreach''dataExfiltration''dataSpillage''denialOfService''elevationOfPrivilege''maliciousInsider''missingCoverage''threatResistance';

/**
   * The user impact of the assessment
   */
readonly userImpact?: 'High''Low''Moderate';

/**
   * Name of the company of the partner
   */
readonly partnerName: string;

/**
   * Name of the product of the partner that created the assessment
   */
readonly productName?: string;

/**
   * Secret to authenticate the partner and verify it created the assessment - write only
   */
readonly secret: string Constranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * 
   */
readonly GA?: stringConstranumbers:Pattern =^([0-9]{2}/){2}[0-9]{4}$;

/**
   * 
   */
readonly public: string Constranumbers:Pattern =^([0-9]{2}/){2}[0-9]{4}$;
}

/**
 * SecurityAssessmentmetadata resource
 */
export class SecurityAssessmentmetadata extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityAssessmentmetadataProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/assessmentMetadata@2021-06-01";
  }

  protected getResourceBody(props: SecurityAssessmentmetadataProps): string {
    return JSON.stringify(
        {properties: {assessmentType: "string", categories: ["string"], description: "string", displayName: "string", implementationEffort: "string", partnerData: {partnerName: "string", productName: "string", secret: "string"}, plannedDeprecationDate: "string", preview: "${bool}", publishDates: {GA: "string", public: "string"}, remediationDescription: "string", severity: "string", tactics: ["string"], techniques: ["string"], threats: ["string"], userImpact: "string"}}
    );
  }
}
