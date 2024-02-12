import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybriddataDatamanagersDataservicesJobdefinitionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: dataServices;

/**
   * List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
   */
readonly customerSecrets?: CustomerSecret[];

/**
   * A generic json used differently by each data service type.
   */
readonly dataServiceInput?: For Bicep, you can use theany()function.;

/**
   * Data Sink Id associated to the job definition.
   */
readonly dataSinkId: string;

/**
   * Data Source Id associated to the job definition.
   */
readonly dataSourceId: string;

/**
   * Last modified time of the job definition.
   */
readonly lastModifiedTime?: string;

/**
   * This is the preferred geo location for the job to run.
   */
readonly runLocation?: 'australiaeast''australiasoutheast''brazilsouth''canadacentral''canadaeast''centralindia''centralus''eastasia''eastus''eastus2''japaneast''japanwest''koreacentral''koreasouth''none''northcentralus''northeurope''southcentralus''southeastasia''southindia''uksouth''ukwest''westcentralus''westeurope''westindia''westus''westus2';

/**
   * Schedule for running the job definition
   */
readonly schedules?: Schedule[];

/**
   * State of the job definition.
   */
readonly state: 'Disabled''Enabled''Supported';

/**
   * Enum to detect if user confirmation is required. If not passed will default to NotRequired.
   */
readonly userConfirmation?: 'NotRequired''Required';

/**
   * The encryption algorithm used to encrypt data.
   */
readonly algorithm: 'None''PlainText''RSA1_5''RSA_OAEP';

/**
   * The identifier to the data service input object which this secret corresponds to.
   */
readonly keyIdentifier: string;

/**
   * It contains the encrypted customer secret.
   */
readonly keyValue: string;

/**
   * A list of repetition intervals in ISO 8601 format.
   */
readonly policyList?: string[];
}

/**
 * HybriddataDatamanagersDataservicesJobdefinitions resource
 */
export class HybriddataDatamanagersDataservicesJobdefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybriddataDatamanagersDataservicesJobdefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridData/dataManagers/dataServices/jobDefinitions@2019-06-01";
  }

  protected getResourceBody(props: HybriddataDatamanagersDataservicesJobdefinitionsProps): string {
    return JSON.stringify(
        {properties: {customerSecrets: [{algorithm: "string", keyIdentifier: "string", keyValue: "string"}], dataSinkId: "string", dataSourceId: "string", lastModifiedTime: "string", runLocation: "string", schedules: [{name: "string", policyList: ["string"]}], state: "string", userConfirmation: "string"}}
    );
  }
}
