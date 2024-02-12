import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Additional data regarding the assessment
   */
readonly additionalData?: SecurityAssessmentPropertiesBaseAdditionalData;

/**
   * Describes properties of an assessment metadata.
   */
readonly metadata?: SecurityAssessmentMetadataProperties;

/**
   * Data regarding 3rd party partner integration
   */
readonly partnersData?: SecurityAssessmentPartnerData;

/**
   * Details of the resource that was assessed
   */
readonly resourceDetails: ResourceDetails;

/**
   * The result of the assessment
   */
readonly status: AssessmentStatusOrAssessmentStatusResponse;

/**
   * 
   */
readonly {customized property}?: string;

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
   * True if this assessment is in preview release status
   */
readonly preview?: bool;

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
   * Name of the company of the partner
   */
readonly partnerName: string;

/**
   * secret to authenticate the partner - write only
   */
readonly secret: string Constranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * Set the object type
   */
readonly source: AzureOnPremiseSql;

/**
   * The platform where the assessed resource resides
   */
readonly source: 'Azure';

/**
   * The platform where the assessed resource resides
   */
readonly source: 'OnPremiseSql';

/**
   * The Sql database name installed on the machine
   */
readonly databaseName: string;

/**
   * The name of the machine
   */
readonly machineName: string;

/**
   * The Sql server name installed on the machine
   */
readonly serverName: string;

/**
   * The oms agent Id installed on the machine
   */
readonly sourceComputerId: string;

/**
   * The unique Id of the machine
   */
readonly vmuuid: string;

/**
   * Azure resource Id of the workspace the machine is attached to
   */
readonly workspaceId: string;

/**
   * Programmatic code for the cause of the assessment status
   */
readonly cause?: string;

/**
   * Programmatic code for the status of the assessment
   */
readonly code: 'Healthy''NotApplicable''Unhealthy';

/**
   * Human readable description of the assessment status
   */
readonly description?: string;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
