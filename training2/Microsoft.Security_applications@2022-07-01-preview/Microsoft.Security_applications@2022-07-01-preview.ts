import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityApplicationsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * The application conditionSets - see examples
   */
readonly conditionSets: any[];

/**
   * description of the application
   */
readonly description?: string;

/**
   * display name of the application
   */
readonly displayName?: string;

/**
   * The application source, what it affects, e.g. Assessments
   */
readonly sourceResourceType: 'Assessments';
}

/**
 * SecurityApplications resource
 */
export class SecurityApplications extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityApplicationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/applications@2022-07-01-preview";
  }

  protected getResourceBody(props: SecurityApplicationsProps): string {
    return JSON.stringify(
        {properties: {conditionSets: ["${object}"], description: "string", displayName: "string", sourceResourceType: "Assessments"}}
    );
  }
}
