// https://www.terraform.io/docs/providers/azuread/d/application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzureadApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Application ID (also called Client ID)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application.html#application_id DataAzureadApplication#application_id}
  */
  readonly applicationId?: string;
  /**
  * The display name for the application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application.html#display_name DataAzureadApplication#display_name}
  */
  readonly displayName?: string;
  /**
  * The application's object ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application.html#object_id DataAzureadApplication#object_id}
  */
  readonly objectId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application.html#timeouts DataAzureadApplication#timeouts}
  */
  readonly timeouts?: DataAzureadApplicationTimeouts;
}
export class DataAzureadApplicationApiOauth2PermissionScopes extends cdktf.ComplexComputedList {

  // admin_consent_description - computed: true, optional: false, required: false
  public get adminConsentDescription() {
    return this.getStringAttribute('admin_consent_description');
  }

  // admin_consent_display_name - computed: true, optional: false, required: false
  public get adminConsentDisplayName() {
    return this.getStringAttribute('admin_consent_display_name');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_consent_description - computed: true, optional: false, required: false
  public get userConsentDescription() {
    return this.getStringAttribute('user_consent_description');
  }

  // user_consent_display_name - computed: true, optional: false, required: false
  public get userConsentDisplayName() {
    return this.getStringAttribute('user_consent_display_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataAzureadApplicationApi extends cdktf.ComplexComputedList {

  // known_client_applications - computed: true, optional: false, required: false
  public get knownClientApplications() {
    return this.getListAttribute('known_client_applications');
  }

  // mapped_claims_enabled - computed: true, optional: false, required: false
  public get mappedClaimsEnabled() {
    return this.getBooleanAttribute('mapped_claims_enabled') as any;
  }

  // oauth2_permission_scopes - computed: true, optional: false, required: false
  public get oauth2PermissionScopes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('oauth2_permission_scopes') as any;
  }

  // requested_access_token_version - computed: true, optional: false, required: false
  public get requestedAccessTokenVersion() {
    return this.getNumberAttribute('requested_access_token_version');
  }
}
export class DataAzureadApplicationAppRoles extends cdktf.ComplexComputedList {

  // allowed_member_types - computed: true, optional: false, required: false
  public get allowedMemberTypes() {
    return this.getListAttribute('allowed_member_types');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataAzureadApplicationFeatureTags extends cdktf.ComplexComputedList {

  // custom_single_sign_on - computed: true, optional: false, required: false
  public get customSingleSignOn() {
    return this.getBooleanAttribute('custom_single_sign_on') as any;
  }

  // enterprise - computed: true, optional: false, required: false
  public get enterprise() {
    return this.getBooleanAttribute('enterprise') as any;
  }

  // gallery - computed: true, optional: false, required: false
  public get gallery() {
    return this.getBooleanAttribute('gallery') as any;
  }

  // hide - computed: true, optional: false, required: false
  public get hide() {
    return this.getBooleanAttribute('hide') as any;
  }
}
export class DataAzureadApplicationOptionalClaimsAccessToken extends cdktf.ComplexComputedList {

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getListAttribute('additional_properties');
  }

  // essential - computed: true, optional: false, required: false
  public get essential() {
    return this.getBooleanAttribute('essential') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }
}
export class DataAzureadApplicationOptionalClaimsIdToken extends cdktf.ComplexComputedList {

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getListAttribute('additional_properties');
  }

  // essential - computed: true, optional: false, required: false
  public get essential() {
    return this.getBooleanAttribute('essential') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }
}
export class DataAzureadApplicationOptionalClaimsSaml2Token extends cdktf.ComplexComputedList {

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getListAttribute('additional_properties');
  }

  // essential - computed: true, optional: false, required: false
  public get essential() {
    return this.getBooleanAttribute('essential') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }
}
export class DataAzureadApplicationOptionalClaims extends cdktf.ComplexComputedList {

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('access_token') as any;
  }

  // id_token - computed: true, optional: false, required: false
  public get idToken() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('id_token') as any;
  }

  // saml2_token - computed: true, optional: false, required: false
  public get saml2Token() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('saml2_token') as any;
  }
}
export class DataAzureadApplicationPublicClient extends cdktf.ComplexComputedList {

  // redirect_uris - computed: true, optional: false, required: false
  public get redirectUris() {
    return this.getListAttribute('redirect_uris');
  }
}
export class DataAzureadApplicationRequiredResourceAccessResourceAccess extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataAzureadApplicationRequiredResourceAccess extends cdktf.ComplexComputedList {

  // resource_access - computed: true, optional: false, required: false
  public get resourceAccess() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_access') as any;
  }

  // resource_app_id - computed: true, optional: false, required: false
  public get resourceAppId() {
    return this.getStringAttribute('resource_app_id');
  }
}
export class DataAzureadApplicationSinglePageApplication extends cdktf.ComplexComputedList {

  // redirect_uris - computed: true, optional: false, required: false
  public get redirectUris() {
    return this.getListAttribute('redirect_uris');
  }
}
export class DataAzureadApplicationWebImplicitGrant extends cdktf.ComplexComputedList {

  // access_token_issuance_enabled - computed: true, optional: false, required: false
  public get accessTokenIssuanceEnabled() {
    return this.getBooleanAttribute('access_token_issuance_enabled') as any;
  }

  // id_token_issuance_enabled - computed: true, optional: false, required: false
  public get idTokenIssuanceEnabled() {
    return this.getBooleanAttribute('id_token_issuance_enabled') as any;
  }
}
export class DataAzureadApplicationWeb extends cdktf.ComplexComputedList {

  // homepage_url - computed: true, optional: false, required: false
  public get homepageUrl() {
    return this.getStringAttribute('homepage_url');
  }

  // implicit_grant - computed: true, optional: false, required: false
  public get implicitGrant() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('implicit_grant') as any;
  }

  // logout_url - computed: true, optional: false, required: false
  public get logoutUrl() {
    return this.getStringAttribute('logout_url');
  }

  // redirect_uris - computed: true, optional: false, required: false
  public get redirectUris() {
    return this.getListAttribute('redirect_uris');
  }
}
export interface DataAzureadApplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application.html#read DataAzureadApplication#read}
  */
  readonly read?: string;
}

export function dataAzureadApplicationTimeoutsToTerraform(struct?: DataAzureadApplicationTimeoutsOutputReference | DataAzureadApplicationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzureadApplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataAzureadApplicationTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadApplicationTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._read = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/d/application.html azuread_application}
*/
export class DataAzureadApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/d/application.html azuread_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzureadApplicationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzureadApplicationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuread_application',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationId = config.applicationId;
    this._displayName = config.displayName;
    this._objectId = config.objectId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api - computed: true, optional: false, required: false
  public api(index: string) {
    return new DataAzureadApplicationApi(this, 'api', index);
  }

  // app_role_ids - computed: true, optional: false, required: false
  public appRoleIds(key: string): string {
    return new cdktf.StringMap(this, 'app_role_ids').lookup(key);
  }

  // app_roles - computed: true, optional: false, required: false
  public appRoles(index: string) {
    return new DataAzureadApplicationAppRoles(this, 'app_roles', index);
  }

  // application_id - computed: true, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // device_only_auth_enabled - computed: true, optional: false, required: false
  public get deviceOnlyAuthEnabled() {
    return this.getBooleanAttribute('device_only_auth_enabled') as any;
  }

  // disabled_by_microsoft - computed: true, optional: false, required: false
  public get disabledByMicrosoft() {
    return this.getStringAttribute('disabled_by_microsoft');
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // fallback_public_client_enabled - computed: true, optional: false, required: false
  public get fallbackPublicClientEnabled() {
    return this.getBooleanAttribute('fallback_public_client_enabled') as any;
  }

  // feature_tags - computed: true, optional: false, required: false
  public featureTags(index: string) {
    return new DataAzureadApplicationFeatureTags(this, 'feature_tags', index);
  }

  // group_membership_claims - computed: true, optional: false, required: false
  public get groupMembershipClaims() {
    return this.getListAttribute('group_membership_claims');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier_uris - computed: true, optional: false, required: false
  public get identifierUris() {
    return this.getListAttribute('identifier_uris');
  }

  // logo_url - computed: true, optional: false, required: false
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }

  // marketing_url - computed: true, optional: false, required: false
  public get marketingUrl() {
    return this.getStringAttribute('marketing_url');
  }

  // oauth2_permission_scope_ids - computed: true, optional: false, required: false
  public oauth2PermissionScopeIds(key: string): string {
    return new cdktf.StringMap(this, 'oauth2_permission_scope_ids').lookup(key);
  }

  // oauth2_post_response_required - computed: true, optional: false, required: false
  public get oauth2PostResponseRequired() {
    return this.getBooleanAttribute('oauth2_post_response_required') as any;
  }

  // object_id - computed: true, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // optional_claims - computed: true, optional: false, required: false
  public optionalClaims(index: string) {
    return new DataAzureadApplicationOptionalClaims(this, 'optional_claims', index);
  }

  // owners - computed: true, optional: false, required: false
  public get owners() {
    return this.getListAttribute('owners');
  }

  // privacy_statement_url - computed: true, optional: false, required: false
  public get privacyStatementUrl() {
    return this.getStringAttribute('privacy_statement_url');
  }

  // public_client - computed: true, optional: false, required: false
  public publicClient(index: string) {
    return new DataAzureadApplicationPublicClient(this, 'public_client', index);
  }

  // publisher_domain - computed: true, optional: false, required: false
  public get publisherDomain() {
    return this.getStringAttribute('publisher_domain');
  }

  // required_resource_access - computed: true, optional: false, required: false
  public requiredResourceAccess(index: string) {
    return new DataAzureadApplicationRequiredResourceAccess(this, 'required_resource_access', index);
  }

  // sign_in_audience - computed: true, optional: false, required: false
  public get signInAudience() {
    return this.getStringAttribute('sign_in_audience');
  }

  // single_page_application - computed: true, optional: false, required: false
  public singlePageApplication(index: string) {
    return new DataAzureadApplicationSinglePageApplication(this, 'single_page_application', index);
  }

  // support_url - computed: true, optional: false, required: false
  public get supportUrl() {
    return this.getStringAttribute('support_url');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // terms_of_service_url - computed: true, optional: false, required: false
  public get termsOfServiceUrl() {
    return this.getStringAttribute('terms_of_service_url');
  }

  // web - computed: true, optional: false, required: false
  public web(index: string) {
    return new DataAzureadApplicationWeb(this, 'web', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzureadApplicationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzureadApplicationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      display_name: cdktf.stringToTerraform(this._displayName),
      object_id: cdktf.stringToTerraform(this._objectId),
      timeouts: dataAzureadApplicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
