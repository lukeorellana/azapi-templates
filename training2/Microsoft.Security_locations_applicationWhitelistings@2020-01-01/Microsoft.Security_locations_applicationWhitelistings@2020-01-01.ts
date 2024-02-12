import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityLocationsApplicationwhitelistingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: locations;

/**
   * The application control policy enforcement/protection mode of the machine group
   */
readonly enforcementMode?: 'Audit''Enforce''None';

/**
   * 
   */
readonly pathRecommendations?: PathRecommendation[];

/**
   * The protection mode of the collection/file types. Exe/Msi/Script are used for Windows, Executable is used for Linux.
   */
readonly protectionMode?: ProtectionMode;

/**
   * 
   */
readonly vmRecommendations?: VmRecommendation[];

/**
   * The recommendation action of the machine or rule
   */
readonly action?: 'Add''Recommended''Remove';

/**
   * Whether the application is commonly run on the machine
   */
readonly common?: bool;

/**
   * The configuration status of the machines group or machine or rule
   */
readonly configurationStatus?: 'Configured''Failed''InProgress''NoStatus''NotConfigured';

/**
   * The type of the file (for Linux files - Executable is used)
   */
readonly fileType?: 'Dll''Exe''Executable''Msi''Script''Unknown';

/**
   * The full path of the file, or an identifier of the application
   */
readonly path?: string;

/**
   * Represents the publisher information of a process/rule
   */
readonly publisherInfo?: PublisherInfo;

/**
   * The type of the rule to be allowed
   */
readonly type?: 'BinarySignature''File''FileHash''ProductSignature''PublisherSignature''VersionAndAboveSignature';

/**
   * 
   */
readonly usernames?: UserRecommendation[];

/**
   * 
   */
readonly userSids?: string[];

/**
   * The "OriginalName" field taken from the file's version resource
   */
readonly binaryName?: string;

/**
   * The product name taken from the file's version resource
   */
readonly productName?: string;

/**
   * The Subject field of the x.509 certificate used to sign the code, using the following fields -  O = Organization, L = Locality, S = State or Province, and C = Country
   */
readonly publisherName?: string;

/**
   * The binary file version taken from the file's version resource
   */
readonly version?: string;

/**
   * The recommendation action of the machine or rule
   */
readonly recommendationAction?: 'Add''Recommended''Remove';

/**
   * Represents a user that is recommended to be allowed for a certain rule
   */
readonly username?: string;

/**
   * The application control policy enforcement/protection mode of the machine group
   */
readonly exe?: 'Audit''Enforce''None';

/**
   * The application control policy enforcement/protection mode of the machine group
   */
readonly executable?: 'Audit''Enforce''None';

/**
   * The application control policy enforcement/protection mode of the machine group
   */
readonly msi?: 'Audit''Enforce''None';

/**
   * The application control policy enforcement/protection mode of the machine group
   */
readonly script?: 'Audit''Enforce''None';

/**
   * The configuration status of the machines group or machine or rule
   */
readonly configurationStatus?: 'Configured''Failed''InProgress''NoStatus''NotConfigured';

/**
   * The machine supportability of Enforce feature
   */
readonly enforcementSupport?: 'NotSupported''Supported''Unknown';

/**
   * The recommendation action of the machine or rule
   */
readonly recommendationAction?: 'Add''Recommended''Remove';

/**
   * The full resource id of the machine
   */
readonly resourceId?: string;
}

/**
 * SecurityLocationsApplicationwhitelistings resource
 */
export class SecurityLocationsApplicationwhitelistings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityLocationsApplicationwhitelistingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/locations/applicationWhitelistings@2020-01-01";
  }

  protected getResourceBody(props: SecurityLocationsApplicationwhitelistingsProps): string {
    return JSON.stringify(
        {properties: {enforcementMode: "string", pathRecommendations: [{action: "string", common: "${bool}", configurationStatus: "string", fileType: "string", path: "string", publisherInfo: {binaryName: "string", productName: "string", publisherName: "string", version: "string"}, type: "string", usernames: [{recommendationAction: "string", username: "string"}], userSids: ["string"]}], protectionMode: {exe: "string", executable: "string", msi: "string", script: "string"}, vmRecommendations: [{configurationStatus: "string", enforcementSupport: "string", recommendationAction: "string", resourceId: "string"}]}}
    );
  }
}
