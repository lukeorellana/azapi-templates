import { Construct } from 'constructs';
import { AzAPIBase, IAzAPIBaseProps } from './core-azapi';

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityCustomassessmentautomationsProps extends IAzAPIBaseProps {
  /**
   * Base 64 encoded KQL query representing the assessment automation results required.
   */
  readonly compressedQuery?: string;

  /**
   * The description to relate to the assessments generated by this assessment automation.
   */
  readonly description?: string;

  /**
   * The display name of the assessments generated by this assessment automation.
   */
  readonly displayName?: string;

  /**
   * The remediation description to relate to the assessments generated by this assessment automation.
   */
  readonly remediationDescription?: string;

  /**
   * The severity to relate to the assessments generated by this assessment automation.
   */
  readonly severity?: 'High' | 'Low' | 'Medium';

  /**
   * Relevant cloud for the custom assessment automation.
   */
  readonly supportedCloud?: 'AWS' | 'GCP';
}

/**
 * SecurityCustomassessmentautomations resource
 */
export class SecurityCustomassessmentautomations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityCustomassessmentautomationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return 'Microsoft.Security/customAssessmentAutomations@2021-07-01-preview';
  }

  protected getResourceBody(props: SecurityCustomassessmentautomationsProps): string {
    return JSON.stringify({
      properties: {
        compressedQuery: props.compressedQuery,
        description: props.description,
        displayName: props.displayName,
        remediationDescription: props.remediationDescription,
        severity: props.severity,
        supportedCloud: props.supportedCloud,
      },
    });
  }
}