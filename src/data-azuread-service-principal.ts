// https://www.terraform.io/docs/providers/azuread/d/service_principal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzureadServicePrincipalConfig extends cdktf.TerraformMetaArguments {
  /**
  * The application ID (client ID) of the application associated with this service principal
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principal#application_id DataAzureadServicePrincipal#application_id}
  */
  readonly applicationId?: string;
  /**
  * The display name of the application associated with this service principal
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principal#display_name DataAzureadServicePrincipal#display_name}
  */
  readonly displayName?: string;
  /**
  * The object ID of the service principal
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principal#object_id DataAzureadServicePrincipal#object_id}
  */
  readonly objectId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principal#timeouts DataAzureadServicePrincipal#timeouts}
  */
  readonly timeouts?: DataAzureadServicePrincipalTimeouts;
}
export class DataAzureadServicePrincipalAppRoles extends cdktf.ComplexComputedList {

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
    return this.getBooleanAttribute('enabled');
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
export class DataAzureadServicePrincipalFeatureTags extends cdktf.ComplexComputedList {

  // custom_single_sign_on - computed: true, optional: false, required: false
  public get customSingleSignOn() {
    return this.getBooleanAttribute('custom_single_sign_on');
  }

  // enterprise - computed: true, optional: false, required: false
  public get enterprise() {
    return this.getBooleanAttribute('enterprise');
  }

  // gallery - computed: true, optional: false, required: false
  public get gallery() {
    return this.getBooleanAttribute('gallery');
  }

  // hide - computed: true, optional: false, required: false
  public get hide() {
    return this.getBooleanAttribute('hide');
  }
}
export class DataAzureadServicePrincipalFeatures extends cdktf.ComplexComputedList {

  // custom_single_sign_on_app - computed: true, optional: false, required: false
  public get customSingleSignOnApp() {
    return this.getBooleanAttribute('custom_single_sign_on_app');
  }

  // enterprise_application - computed: true, optional: false, required: false
  public get enterpriseApplication() {
    return this.getBooleanAttribute('enterprise_application');
  }

  // gallery_application - computed: true, optional: false, required: false
  public get galleryApplication() {
    return this.getBooleanAttribute('gallery_application');
  }

  // visible_to_users - computed: true, optional: false, required: false
  public get visibleToUsers() {
    return this.getBooleanAttribute('visible_to_users');
  }
}
export class DataAzureadServicePrincipalOauth2PermissionScopes extends cdktf.ComplexComputedList {

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
    return this.getBooleanAttribute('enabled');
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
export class DataAzureadServicePrincipalSamlSingleSignOn extends cdktf.ComplexComputedList {

  // relay_state - computed: true, optional: false, required: false
  public get relayState() {
    return this.getStringAttribute('relay_state');
  }
}
export interface DataAzureadServicePrincipalTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principal#read DataAzureadServicePrincipal#read}
  */
  readonly read?: string;
}

export function dataAzureadServicePrincipalTimeoutsToTerraform(struct?: DataAzureadServicePrincipalTimeoutsOutputReference | DataAzureadServicePrincipalTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzureadServicePrincipalTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataAzureadServicePrincipalTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadServicePrincipalTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azuread/d/service_principal azuread_service_principal}
*/
export class DataAzureadServicePrincipal extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_service_principal";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/d/service_principal azuread_service_principal} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzureadServicePrincipalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzureadServicePrincipalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuread_service_principal',
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

  // account_enabled - computed: true, optional: false, required: false
  public get accountEnabled() {
    return this.getBooleanAttribute('account_enabled');
  }

  // alternative_names - computed: true, optional: false, required: false
  public get alternativeNames() {
    return this.getListAttribute('alternative_names');
  }

  // app_role_assignment_required - computed: true, optional: false, required: false
  public get appRoleAssignmentRequired() {
    return this.getBooleanAttribute('app_role_assignment_required');
  }

  // app_role_ids - computed: true, optional: false, required: false
  public appRoleIds(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'app_role_ids').lookup(key);
  }

  // app_roles - computed: true, optional: false, required: false
  public appRoles(index: string) {
    return new DataAzureadServicePrincipalAppRoles(this, 'app_roles', index, false);
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

  // application_tenant_id - computed: true, optional: false, required: false
  public get applicationTenantId() {
    return this.getStringAttribute('application_tenant_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // feature_tags - computed: true, optional: false, required: false
  public featureTags(index: string) {
    return new DataAzureadServicePrincipalFeatureTags(this, 'feature_tags', index, false);
  }

  // features - computed: true, optional: false, required: false
  public features(index: string) {
    return new DataAzureadServicePrincipalFeatures(this, 'features', index, false);
  }

  // homepage_url - computed: true, optional: false, required: false
  public get homepageUrl() {
    return this.getStringAttribute('homepage_url');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // login_url - computed: true, optional: false, required: false
  public get loginUrl() {
    return this.getStringAttribute('login_url');
  }

  // logout_url - computed: true, optional: false, required: false
  public get logoutUrl() {
    return this.getStringAttribute('logout_url');
  }

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // notification_email_addresses - computed: true, optional: false, required: false
  public get notificationEmailAddresses() {
    return this.getListAttribute('notification_email_addresses');
  }

  // oauth2_permission_scope_ids - computed: true, optional: false, required: false
  public oauth2PermissionScopeIds(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'oauth2_permission_scope_ids').lookup(key);
  }

  // oauth2_permission_scopes - computed: true, optional: false, required: false
  public oauth2PermissionScopes(index: string) {
    return new DataAzureadServicePrincipalOauth2PermissionScopes(this, 'oauth2_permission_scopes', index, false);
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

  // preferred_single_sign_on_mode - computed: true, optional: false, required: false
  public get preferredSingleSignOnMode() {
    return this.getStringAttribute('preferred_single_sign_on_mode');
  }

  // redirect_uris - computed: true, optional: false, required: false
  public get redirectUris() {
    return this.getListAttribute('redirect_uris');
  }

  // saml_metadata_url - computed: true, optional: false, required: false
  public get samlMetadataUrl() {
    return this.getStringAttribute('saml_metadata_url');
  }

  // saml_single_sign_on - computed: true, optional: false, required: false
  public samlSingleSignOn(index: string) {
    return new DataAzureadServicePrincipalSamlSingleSignOn(this, 'saml_single_sign_on', index, false);
  }

  // service_principal_names - computed: true, optional: false, required: false
  public get servicePrincipalNames() {
    return this.getListAttribute('service_principal_names');
  }

  // sign_in_audience - computed: true, optional: false, required: false
  public get signInAudience() {
    return this.getStringAttribute('sign_in_audience');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzureadServicePrincipalTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzureadServicePrincipalTimeouts) {
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
      timeouts: dataAzureadServicePrincipalTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
