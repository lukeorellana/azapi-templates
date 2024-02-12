import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:data;

/**
   * [Required] Uri of the data. Example:https://go.microsoft.com/fwlink/?linkid=2202330
   */
readonly dataUri: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * The asset description text.
   */
readonly description?: string;

/**
   * If the name version are system generated (anonymous registration).
   */
readonly isAnonymous?: bool;

/**
   * Is the asset archived?
   */
readonly isArchived?: bool;

/**
   * Set the object type
   */
readonly dataType: mltableuri_fileuri_folder;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * [Required] Specifies the type of data.
   */
readonly dataType: 'mltable';

/**
   * Uris referenced in the MLTable definition (required for lineage)
   */
readonly referencedUris?: string[];

/**
   * [Required] Specifies the type of data.
   */
readonly dataType: 'uri_file';

/**
   * [Required] Specifies the type of data.
   */
readonly dataType: 'uri_folder';
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
