// https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConditionalAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#display_name ConditionalAccessPolicy#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#state ConditionalAccessPolicy#state}
  */
  readonly state: string;
  /**
  * conditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#conditions ConditionalAccessPolicy#conditions}
  */
  readonly conditions: ConditionalAccessPolicyConditions[];
  /**
  * grant_controls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#grant_controls ConditionalAccessPolicy#grant_controls}
  */
  readonly grantControls: ConditionalAccessPolicyGrantControls[];
  /**
  * session_controls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#session_controls ConditionalAccessPolicy#session_controls}
  */
  readonly sessionControls?: ConditionalAccessPolicySessionControls[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#timeouts ConditionalAccessPolicy#timeouts}
  */
  readonly timeouts?: ConditionalAccessPolicyTimeouts;
}
export interface ConditionalAccessPolicyConditionsApplications {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#excluded_applications ConditionalAccessPolicy#excluded_applications}
  */
  readonly excludedApplications?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#included_applications ConditionalAccessPolicy#included_applications}
  */
  readonly includedApplications: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#included_user_actions ConditionalAccessPolicy#included_user_actions}
  */
  readonly includedUserActions?: string[];
}

function conditionalAccessPolicyConditionsApplicationsToTerraform(struct?: ConditionalAccessPolicyConditionsApplications): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    excluded_applications: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedApplications),
    included_applications: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedApplications),
    included_user_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedUserActions),
  }
}

export interface ConditionalAccessPolicyConditionsLocations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#excluded_locations ConditionalAccessPolicy#excluded_locations}
  */
  readonly excludedLocations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#included_locations ConditionalAccessPolicy#included_locations}
  */
  readonly includedLocations: string[];
}

function conditionalAccessPolicyConditionsLocationsToTerraform(struct?: ConditionalAccessPolicyConditionsLocations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    excluded_locations: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedLocations),
    included_locations: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedLocations),
  }
}

export interface ConditionalAccessPolicyConditionsPlatforms {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#excluded_platforms ConditionalAccessPolicy#excluded_platforms}
  */
  readonly excludedPlatforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#included_platforms ConditionalAccessPolicy#included_platforms}
  */
  readonly includedPlatforms: string[];
}

function conditionalAccessPolicyConditionsPlatformsToTerraform(struct?: ConditionalAccessPolicyConditionsPlatforms): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    excluded_platforms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedPlatforms),
    included_platforms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedPlatforms),
  }
}

export interface ConditionalAccessPolicyConditionsUsers {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#excluded_groups ConditionalAccessPolicy#excluded_groups}
  */
  readonly excludedGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#excluded_roles ConditionalAccessPolicy#excluded_roles}
  */
  readonly excludedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#excluded_users ConditionalAccessPolicy#excluded_users}
  */
  readonly excludedUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#included_groups ConditionalAccessPolicy#included_groups}
  */
  readonly includedGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#included_roles ConditionalAccessPolicy#included_roles}
  */
  readonly includedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#included_users ConditionalAccessPolicy#included_users}
  */
  readonly includedUsers?: string[];
}

function conditionalAccessPolicyConditionsUsersToTerraform(struct?: ConditionalAccessPolicyConditionsUsers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    excluded_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedGroups),
    excluded_roles: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedRoles),
    excluded_users: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedUsers),
    included_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedGroups),
    included_roles: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedRoles),
    included_users: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedUsers),
  }
}

export interface ConditionalAccessPolicyConditions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#client_app_types ConditionalAccessPolicy#client_app_types}
  */
  readonly clientAppTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#sign_in_risk_levels ConditionalAccessPolicy#sign_in_risk_levels}
  */
  readonly signInRiskLevels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#user_risk_levels ConditionalAccessPolicy#user_risk_levels}
  */
  readonly userRiskLevels?: string[];
  /**
  * applications block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#applications ConditionalAccessPolicy#applications}
  */
  readonly applications: ConditionalAccessPolicyConditionsApplications[];
  /**
  * locations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#locations ConditionalAccessPolicy#locations}
  */
  readonly locations: ConditionalAccessPolicyConditionsLocations[];
  /**
  * platforms block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#platforms ConditionalAccessPolicy#platforms}
  */
  readonly platforms: ConditionalAccessPolicyConditionsPlatforms[];
  /**
  * users block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#users ConditionalAccessPolicy#users}
  */
  readonly users: ConditionalAccessPolicyConditionsUsers[];
}

function conditionalAccessPolicyConditionsToTerraform(struct?: ConditionalAccessPolicyConditions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_app_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.clientAppTypes),
    sign_in_risk_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.signInRiskLevels),
    user_risk_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.userRiskLevels),
    applications: cdktf.listMapper(conditionalAccessPolicyConditionsApplicationsToTerraform)(struct!.applications),
    locations: cdktf.listMapper(conditionalAccessPolicyConditionsLocationsToTerraform)(struct!.locations),
    platforms: cdktf.listMapper(conditionalAccessPolicyConditionsPlatformsToTerraform)(struct!.platforms),
    users: cdktf.listMapper(conditionalAccessPolicyConditionsUsersToTerraform)(struct!.users),
  }
}

export interface ConditionalAccessPolicyGrantControls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#built_in_controls ConditionalAccessPolicy#built_in_controls}
  */
  readonly builtInControls: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#custom_authentication_factors ConditionalAccessPolicy#custom_authentication_factors}
  */
  readonly customAuthenticationFactors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#operator ConditionalAccessPolicy#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#terms_of_use ConditionalAccessPolicy#terms_of_use}
  */
  readonly termsOfUse?: string[];
}

function conditionalAccessPolicyGrantControlsToTerraform(struct?: ConditionalAccessPolicyGrantControls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    built_in_controls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.builtInControls),
    custom_authentication_factors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.customAuthenticationFactors),
    operator: cdktf.stringToTerraform(struct!.operator),
    terms_of_use: cdktf.listMapper(cdktf.stringToTerraform)(struct!.termsOfUse),
  }
}

export interface ConditionalAccessPolicySessionControls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#application_enforced_restrictions_enabled ConditionalAccessPolicy#application_enforced_restrictions_enabled}
  */
  readonly applicationEnforcedRestrictionsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#cloud_app_security_policy ConditionalAccessPolicy#cloud_app_security_policy}
  */
  readonly cloudAppSecurityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#sign_in_frequency ConditionalAccessPolicy#sign_in_frequency}
  */
  readonly signInFrequency?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#sign_in_frequency_period ConditionalAccessPolicy#sign_in_frequency_period}
  */
  readonly signInFrequencyPeriod?: string;
}

function conditionalAccessPolicySessionControlsToTerraform(struct?: ConditionalAccessPolicySessionControls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    application_enforced_restrictions_enabled: cdktf.booleanToTerraform(struct!.applicationEnforcedRestrictionsEnabled),
    cloud_app_security_policy: cdktf.stringToTerraform(struct!.cloudAppSecurityPolicy),
    sign_in_frequency: cdktf.numberToTerraform(struct!.signInFrequency),
    sign_in_frequency_period: cdktf.stringToTerraform(struct!.signInFrequencyPeriod),
  }
}

export interface ConditionalAccessPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#create ConditionalAccessPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#delete ConditionalAccessPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#read ConditionalAccessPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html#update ConditionalAccessPolicy#update}
  */
  readonly update?: string;
}

function conditionalAccessPolicyTimeoutsToTerraform(struct?: ConditionalAccessPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html azuread_conditional_access_policy}
*/
export class ConditionalAccessPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_conditional_access_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/conditional_access_policy.html azuread_conditional_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConditionalAccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ConditionalAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_conditional_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._state = config.state;
    this._conditions = config.conditions;
    this._grantControls = config.grantControls;
    this._sessionControls = config.sessionControls;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // state - computed: false, optional: false, required: true
  private _state: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions: ConditionalAccessPolicyConditions[];
  public get conditions() {
    return this.interpolationForAttribute('conditions') as any;
  }
  public set conditions(value: ConditionalAccessPolicyConditions[]) {
    this._conditions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions
  }

  // grant_controls - computed: false, optional: false, required: true
  private _grantControls: ConditionalAccessPolicyGrantControls[];
  public get grantControls() {
    return this.interpolationForAttribute('grant_controls') as any;
  }
  public set grantControls(value: ConditionalAccessPolicyGrantControls[]) {
    this._grantControls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantControlsInput() {
    return this._grantControls
  }

  // session_controls - computed: false, optional: true, required: false
  private _sessionControls?: ConditionalAccessPolicySessionControls[];
  public get sessionControls() {
    return this.interpolationForAttribute('session_controls') as any;
  }
  public set sessionControls(value: ConditionalAccessPolicySessionControls[] ) {
    this._sessionControls = value;
  }
  public resetSessionControls() {
    this._sessionControls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionControlsInput() {
    return this._sessionControls
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ConditionalAccessPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ConditionalAccessPolicyTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      state: cdktf.stringToTerraform(this._state),
      conditions: cdktf.listMapper(conditionalAccessPolicyConditionsToTerraform)(this._conditions),
      grant_controls: cdktf.listMapper(conditionalAccessPolicyGrantControlsToTerraform)(this._grantControls),
      session_controls: cdktf.listMapper(conditionalAccessPolicySessionControlsToTerraform)(this._sessionControls),
      timeouts: conditionalAccessPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
