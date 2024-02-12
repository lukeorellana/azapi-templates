import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * The kind of workbook. Choices are user and shared.
   */
readonly kind?: 'shared''user';

/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Resource etag
   */
readonly etag?: object;

/**
   * Identity used for BYOS
   */
readonly identity?: MyWorkbookManagedIdentity;

/**
   * The identity type.
   */
readonly type?: 'None''UserAssigned';

/**
   * Customer Managed Identity
   */
readonly userAssignedIdentities?: MyWorkbookUserAssignedIdentities;

/**
   * Workbook category, as defined by the user at creation time.
   */
readonly category: string;

/**
   * The user-defined name of the private workbook.
   */
readonly displayName: string;

/**
   * Configuration of this particular private workbook. Configuration data is a string containing valid JSON
   */
readonly serializedData: string;

/**
   * Optional resourceId for a source resource.
   */
readonly sourceId?: string;

/**
   * BYOS Storage Account URI
   */
readonly storageUri?: string;

/**
   * This instance's version of the data model. This can change as new features are added that can be marked private workbook.
   */
readonly version?: string;
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
