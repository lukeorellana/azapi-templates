import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

interface ServerExternalAdministrator {
  /**
   * Type of the server administrator.
   */
  administratorType: 'ActiveDirectory';
  /**
   * Azure Active Directory only Authentication enabled.
   */
  azureADOnlyAuthentication: boolean;
  /**
   * Login name of the server administrator.
   */
  login: string;
  /**
   * Principal Type of the server administrator.
   */
  principalType: 'Application' | 'Group' | 'User';
  /**
   * SID (object ID) of the server administrator.
   */
  sid: string;
  /**
   * Tenant ID of the administrator.
   */
  tenantId: string;
}

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersProps extends IAzAPIBaseProps {
  /**
   * Administrator username for the server. Once created it cannot be changed.
   */
  readonly administratorLogin?: string;

  /**
   * The administrator login password (required for server creation).
   */
  readonly administratorLoginPassword?: string;

  /**
   * The Azure Active Directory administrator of the server. This can only be used at server create time. If used for server update, it will be ignored or it will result in an error. For updates individual APIs will need to be used.
   */
  readonly administrators?: ServerExternalAdministrator;

  /**
   * The Client id used for cross tenant CMK scenario
   */
  readonly federatedClientId?: string;

  /**
   * A CMK URI of the key to use for encryption.
   */
  readonly keyId?: string;

  /**
   * Minimal TLS version. Allowed values: '1.0', '1.1', '1.2'
   */
  readonly minimalTlsVersion?: string;

  /**
   * The resource id of a user assigned identity to be used by default.
   */
  readonly primaryUserAssignedIdentityId?: string;

  /**
   * Whether or not public endpoint access is allowed for this server.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'
   */
  readonly publicNetworkAccess?: 'Disabled' | 'Enabled';

  /**
   * Whether or not to restrict outbound network access for this server.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'
   */
  readonly restrictOutboundNetworkAccess?: 'Disabled' | 'Enabled';

  /**
   * The version of the server.
   */
  readonly version?: string;
}

/**
 * SqlServers resource
 */
export class SqlServers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersProps): string {
    return JSON.stringify({
      properties: {
        administratorLogin: props.administratorLogin,
        administratorLoginPassword: props.administratorLoginPassword,
        administrators: {
          administratorType: props.administrators?.administratorType,
          azureADOnlyAuthentication: props.administrators?.azureADOnlyAuthentication,
          login: props.administrators?.login,
          principalType: props.administrators?.principalType,
          sid: props.administrators?.sid,
          tenantId: props.administrators?.tenantId
        },
        federatedClientId: props.federatedClientId,
        keyId: props.keyId,
        minimalTlsVersion: props.minimalTlsVersion,
        primaryUserAssignedIdentityId: props.primaryUserAssignedIdentityId,
        publicNetworkAccess: props.publicNetworkAccess,
        restrictOutboundNetworkAccess: props.restrictOutboundNetworkAccess,
        version: props.version
      }
    });
  }
}