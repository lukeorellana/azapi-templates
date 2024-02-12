import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybriddataDatamanagersDatastoresProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:dataManagers;

/**
   * List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
   */
readonly customerSecrets?: CustomerSecret[];

/**
   * The arm id of the data store type.
   */
readonly dataStoreTypeId: string;

/**
   * A generic json used differently by each data source type.
   */
readonly extendedProperties?: For Bicep, you can use theany()function.;

/**
   * Arm Id for the manager resource to which the data source is associated. This is optional.
   */
readonly repositoryId?: string;

/**
   * State of the data source.
   */
readonly state: 'Disabled''Enabled''Supported';

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
}

/**
 * HybriddataDatamanagersDatastores resource
 */
export class HybriddataDatamanagersDatastores extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybriddataDatamanagersDatastoresProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridData/dataManagers/dataStores@2019-06-01";
  }

  protected getResourceBody(props: HybriddataDatamanagersDatastoresProps): string {
    return JSON.stringify(
        {properties: {customerSecrets: [{algorithm: "string", keyIdentifier: "string", keyValue: "string"}], dataStoreTypeId: "string", repositoryId: "string", state: "string"}}
    );
  }
}
