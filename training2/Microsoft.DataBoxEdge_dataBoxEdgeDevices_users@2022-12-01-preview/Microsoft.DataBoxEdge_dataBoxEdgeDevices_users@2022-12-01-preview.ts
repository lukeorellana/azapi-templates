import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesUsersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:dataBoxEdgeDevices;

/**
   * The password details.
   */
readonly encryptedPassword?: AsymmetricEncryptedSecret;

/**
   * Type of the user.
   */
readonly userType: 'ARM''LocalManagement''Share';

/**
   * The algorithm used to encrypt "Value".
   */
readonly encryptionAlgorithm: 'AES256''None''RSAES_PKCS1_v_1_5';

/**
   * Thumbprint certificate used to encrypt "Value". If the value is unencrypted, it will be null.
   */
readonly encryptionCertThumbprint?: string;

/**
   * The value of the secret.
   */
readonly value: string;
}

/**
 * DataboxedgeDataboxedgedevicesUsers resource
 */
export class DataboxedgeDataboxedgedevicesUsers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataboxedgeDataboxedgedevicesUsersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataBoxEdge/dataBoxEdgeDevices/users@2022-12-01-preview";
  }

  protected getResourceBody(props: DataboxedgeDataboxedgedevicesUsersProps): string {
    return JSON.stringify(
        {properties: {encryptedPassword: {encryptionAlgorithm: "string", encryptionCertThumbprint: "string", value: "string"}, userType: "string"}}
    );
  }
}
