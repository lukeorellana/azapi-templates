import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsThreatintelligenceIndicatorsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: threatIntelligence;

/**
   * Etag of the azure resource
   */
readonly etag?: string;

/**
   * Confidence of threat intelligence entity
   */
readonly confidence?: number;

/**
   * Created by
   */
readonly created?: string;

/**
   * Created by reference of threat intelligence entity
   */
readonly createdByRef?: string;

/**
   * Is threat intelligence entity defanged
   */
readonly defanged?: bool;

/**
   * Description of a threat intelligence entity
   */
readonly description?: string;

/**
   * Display name of a threat intelligence entity
   */
readonly displayName?: string;

/**
   * Extensions map
   */
readonly extensions?: object;

/**
   * External ID of threat intelligence entity
   */
readonly externalId?: string;

/**
   * External last updated time in UTC
   */
readonly externalLastUpdatedTimeUtc?: string;

/**
   * External References
   */
readonly externalReferences?: ThreatIntelligenceExternalReference[];

/**
   * Granular Markings
   */
readonly granularMarkings?: ThreatIntelligenceGranularMarkingModel[];

/**
   * Indicator types of threat intelligence entities
   */
readonly indicatorTypes?: string[];

/**
   * Kill chain phases
   */
readonly killChainPhases?: ThreatIntelligenceKillChainPhase[];

/**
   * Labels  of threat intelligence entity
   */
readonly labels?: string[];

/**
   * Language of threat intelligence entity
   */
readonly language?: string;

/**
   * Last updated time in UTC
   */
readonly lastUpdatedTimeUtc?: string;

/**
   * Modified by
   */
readonly modified?: string;

/**
   * Threat intelligence entity object marking references
   */
readonly objectMarkingRefs?: string[];

/**
   * Parsed patterns
   */
readonly parsedPattern?: ThreatIntelligenceParsedPattern[];

/**
   * Pattern of a threat intelligence entity
   */
readonly pattern?: string;

/**
   * Pattern type of a threat intelligence entity
   */
readonly patternType?: string;

/**
   * Pattern version of a threat intelligence entity
   */
readonly patternVersion?: string;

/**
   * Is threat intelligence entity revoked
   */
readonly revoked?: bool;

/**
   * Source of a threat intelligence entity
   */
readonly source?: string;

/**
   * List of tags
   */
readonly threatIntelligenceTags?: string[];

/**
   * Threat types
   */
readonly threatTypes?: string[];

/**
   * Valid from
   */
readonly validFrom?: string;

/**
   * Valid until
   */
readonly validUntil?: string;

/**
   * External reference description
   */
readonly description?: string;

/**
   * External reference ID
   */
readonly externalId?: string;

/**
   * External reference hashes
   */
readonly hashes?: object;

/**
   * External reference source name
   */
readonly sourceName?: string;

/**
   * External reference URL
   */
readonly url?: string;

/**
   * Language granular marking model
   */
readonly language?: string;

/**
   * marking reference granular marking model
   */
readonly markingRef?: number;

/**
   * granular marking model selectors
   */
readonly selectors?: string[];

/**
   * Kill chainName name
   */
readonly killChainName?: string;

/**
   * Phase name
   */
readonly phaseName?: string;

/**
   * Pattern type key
   */
readonly patternTypeKey?: string;

/**
   * Pattern type keys
   */
readonly patternTypeValues?: ThreatIntelligenceParsedPatternTypeValue[];

/**
   * Value of parsed pattern
   */
readonly value?: string;

/**
   * Type of the value
   */
readonly valueType?: string;
}

/**
 * SecurityinsightsThreatintelligenceIndicators resource
 */
export class SecurityinsightsThreatintelligenceIndicators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsThreatintelligenceIndicatorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/threatIntelligence/indicators@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsThreatintelligenceIndicatorsProps): string {
    return JSON.stringify(
        {properties: {confidence: "${int}", created: "string", createdByRef: "string", defanged: "${bool}", description: "string", displayName: "string", extensions: {}, externalId: "string", externalLastUpdatedTimeUtc: "string", externalReferences: [{description: "string", externalId: "string", hashes: {}, sourceName: "string", url: "string"}], granularMarkings: [{language: "string", markingRef: "${int}", selectors: ["string"]}], indicatorTypes: ["string"], killChainPhases: [{killChainName: "string", phaseName: "string"}], labels: ["string"], language: "string", lastUpdatedTimeUtc: "string", modified: "string", objectMarkingRefs: ["string"], parsedPattern: [{patternTypeKey: "string", patternTypeValues: [{value: "string", valueType: "string"}]}], pattern: "string", patternType: "string", patternVersion: "string", revoked: "${bool}", source: "string", threatIntelligenceTags: ["string"], threatTypes: ["string"], validFrom: "string", validUntil: "string"}, etag: "string"}
    );
  }
}
