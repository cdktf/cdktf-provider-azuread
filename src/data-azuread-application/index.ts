// https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzureadApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Application ID (also called Client ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/application#application_id DataAzureadApplication#application_id}
  */
  readonly applicationId?: string;
  /**
  * The display name for the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/application#display_name DataAzureadApplication#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/application#id DataAzureadApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The application's object ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/application#object_id DataAzureadApplication#object_id}
  */
  readonly objectId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/application#timeouts DataAzureadApplication#timeouts}
  */
  readonly timeouts?: DataAzureadApplicationTimeouts;
}
export interface DataAzureadApplicationApiOauth2PermissionScopes {
}

export function dataAzureadApplicationApiOauth2PermissionScopesToTerraform(struct?: DataAzureadApplicationApiOauth2PermissionScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzureadApplicationApiOauth2PermissionScopesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzureadApplicationApiOauth2PermissionScopes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadApplicationApiOauth2PermissionScopes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class DataAzureadApplicationApiOauth2PermissionScopesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzureadApplicationApiOauth2PermissionScopesOutputReference {
    return new DataAzureadApplicationApiOauth2PermissionScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzureadApplicationApi {
}

export function dataAzureadApplicationApiToTerraform(struct?: DataAzureadApplicationApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzureadApplicationApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzureadApplicationApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadApplicationApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // known_client_applications - computed: true, optional: false, required: false
  public get knownClientApplications() {
    return this.getListAttribute('known_client_applications');
  }

  // mapped_claims_enabled - computed: true, optional: false, required: false
  public get mappedClaimsEnabled() {
    return this.getBooleanAttribute('mapped_claims_enabled');
  }

  // oauth2_permission_scopes - computed: true, optional: false, required: false
  private _oauth2PermissionScopes = new DataAzureadApplicationApiOauth2PermissionScopesList(this, "oauth2_permission_scopes", false);
  public get oauth2PermissionScopes() {
    return this._oauth2PermissionScopes;
  }

  // requested_access_token_version - computed: true, optional: false, required: false
  public get requestedAccessTokenVersion() {
    return this.getNumberAttribute('requested_access_token_version');
  }
}

export class DataAzureadApplicationApiList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzureadApplicationApiOutputReference {
    return new DataAzureadApplicationApiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzureadApplicationAppRoles {
}

export function dataAzureadApplicationAppRolesToTerraform(struct?: DataAzureadApplicationAppRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzureadApplicationAppRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzureadApplicationAppRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadApplicationAppRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class DataAzureadApplicationAppRolesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzureadApplicationAppRolesOutputReference {
    return new DataAzureadApplicationAppRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzureadApplicationFeatureTags {
}

export function dataAzureadApplicationFeatureTagsToTerraform(struct?: DataAzureadApplicationFeatureTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzureadApplicationFeatureTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzureadApplicationFeatureTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadApplicationFeatureTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class DataAzureadApplicationFeatureTagsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzureadApplicationFeatureTagsOutputReference {
    return new DataAzureadApplicationFeatureTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzureadApplicationOptionalClaimsAccessToken {
}

export function dataAzureadApplicationOptionalClaimsAccessTokenToTerraform(struct?: DataAzureadApplicationOptionalClaimsAccessToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzureadApplicationOptionalClaimsAccessTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzureadApplicationOptionalClaimsAccessToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadApplicationOptionalClaimsAccessToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getListAttribute('additional_properties');
  }

  // essential - computed: true, optional: false, required: false
  public get essential() {
    return this.getBooleanAttribute('essential');
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

export class DataAzureadApplicationOptionalClaimsAccessTokenList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzureadApplicationOptionalClaimsAccessTokenOutputReference {
    return new DataAzureadApplicationOptionalClaimsAccessTokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzureadApplicationOptionalClaimsIdToken {
}

export function dataAzureadApplicationOptionalClaimsIdTokenToTerraform(struct?: DataAzureadApplicationOptionalClaimsIdToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzureadApplicationOptionalClaimsIdTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzureadApplicationOptionalClaimsIdToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadApplicationOptionalClaimsIdToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getListAttribute('additional_properties');
  }

  // essential - computed: true, optional: false, required: false
  public get essential() {
    return this.getBooleanAttribute('essential');
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

export class DataAzureadApplicationOptionalClaimsIdTokenList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzureadApplicationOptionalClaimsIdTokenOutputReference {
    return new DataAzureadApplicationOptionalClaimsIdTokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzureadApplicationOptionalClaimsSaml2Token {
}

export function dataAzureadApplicationOptionalClaimsSaml2TokenToTerraform(struct?: DataAzureadApplicationOptionalClaimsSaml2Token): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzureadApplicationOptionalClaimsSaml2TokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzureadApplicationOptionalClaimsSaml2Token | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadApplicationOptionalClaimsSaml2Token | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getListAttribute('additional_properties');
  }

  // essential - computed: true, optional: false, required: false
  public get essential() {
    return this.getBooleanAttribute('essential');
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

export class DataAzureadApplicationOptionalClaimsSaml2TokenList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzureadApplicationOptionalClaimsSaml2TokenOutputReference {
    return new DataAzureadApplicationOptionalClaimsSaml2TokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzureadApplicationOptionalClaims {
}

export function dataAzureadApplicationOptionalClaimsToTerraform(struct?: DataAzureadApplicationOptionalClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzureadApplicationOptionalClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzureadApplicationOptionalClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadApplicationOptionalClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_token - computed: true, optional: false, required: false
  private _accessToken = new DataAzureadApplicationOptionalClaimsAccessTokenList(this, "access_token", false);
  public get accessToken() {
    return this._accessToken;
  }

  // id_token - computed: true, optional: false, required: false
  private _idToken = new DataAzureadApplicationOptionalClaimsIdTokenList(this, "id_token", false);
  public get idToken() {
    return this._idToken;
  }

  // saml2_token - computed: true, optional: false, required: false
  private _saml2Token = new DataAzureadApplicationOptionalClaimsSaml2TokenList(this, "saml2_token", false);
  public get saml2Token() {
    return this._saml2Token;
  }
}

export class DataAzureadApplicationOptionalClaimsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzureadApplicationOptionalClaimsOutputReference {
    return new DataAzureadApplicationOptionalClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzureadApplicationPublicClient {
}

export function dataAzureadApplicationPublicClientToTerraform(struct?: DataAzureadApplicationPublicClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzureadApplicationPublicClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzureadApplicationPublicClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadApplicationPublicClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // redirect_uris - computed: true, optional: false, required: false
  public get redirectUris() {
    return this.getListAttribute('redirect_uris');
  }
}

export class DataAzureadApplicationPublicClientList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzureadApplicationPublicClientOutputReference {
    return new DataAzureadApplicationPublicClientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzureadApplicationRequiredResourceAccessResourceAccess {
}

export function dataAzureadApplicationRequiredResourceAccessResourceAccessToTerraform(struct?: DataAzureadApplicationRequiredResourceAccessResourceAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzureadApplicationRequiredResourceAccessResourceAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzureadApplicationRequiredResourceAccessResourceAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadApplicationRequiredResourceAccessResourceAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAzureadApplicationRequiredResourceAccessResourceAccessList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzureadApplicationRequiredResourceAccessResourceAccessOutputReference {
    return new DataAzureadApplicationRequiredResourceAccessResourceAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzureadApplicationRequiredResourceAccess {
}

export function dataAzureadApplicationRequiredResourceAccessToTerraform(struct?: DataAzureadApplicationRequiredResourceAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzureadApplicationRequiredResourceAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzureadApplicationRequiredResourceAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadApplicationRequiredResourceAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_access - computed: true, optional: false, required: false
  private _resourceAccess = new DataAzureadApplicationRequiredResourceAccessResourceAccessList(this, "resource_access", false);
  public get resourceAccess() {
    return this._resourceAccess;
  }

  // resource_app_id - computed: true, optional: false, required: false
  public get resourceAppId() {
    return this.getStringAttribute('resource_app_id');
  }
}

export class DataAzureadApplicationRequiredResourceAccessList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzureadApplicationRequiredResourceAccessOutputReference {
    return new DataAzureadApplicationRequiredResourceAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzureadApplicationSinglePageApplication {
}

export function dataAzureadApplicationSinglePageApplicationToTerraform(struct?: DataAzureadApplicationSinglePageApplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzureadApplicationSinglePageApplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzureadApplicationSinglePageApplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadApplicationSinglePageApplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // redirect_uris - computed: true, optional: false, required: false
  public get redirectUris() {
    return this.getListAttribute('redirect_uris');
  }
}

export class DataAzureadApplicationSinglePageApplicationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzureadApplicationSinglePageApplicationOutputReference {
    return new DataAzureadApplicationSinglePageApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzureadApplicationWebImplicitGrant {
}

export function dataAzureadApplicationWebImplicitGrantToTerraform(struct?: DataAzureadApplicationWebImplicitGrant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzureadApplicationWebImplicitGrantOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzureadApplicationWebImplicitGrant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadApplicationWebImplicitGrant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_token_issuance_enabled - computed: true, optional: false, required: false
  public get accessTokenIssuanceEnabled() {
    return this.getBooleanAttribute('access_token_issuance_enabled');
  }

  // id_token_issuance_enabled - computed: true, optional: false, required: false
  public get idTokenIssuanceEnabled() {
    return this.getBooleanAttribute('id_token_issuance_enabled');
  }
}

export class DataAzureadApplicationWebImplicitGrantList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzureadApplicationWebImplicitGrantOutputReference {
    return new DataAzureadApplicationWebImplicitGrantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzureadApplicationWeb {
}

export function dataAzureadApplicationWebToTerraform(struct?: DataAzureadApplicationWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzureadApplicationWebOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzureadApplicationWeb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadApplicationWeb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // homepage_url - computed: true, optional: false, required: false
  public get homepageUrl() {
    return this.getStringAttribute('homepage_url');
  }

  // implicit_grant - computed: true, optional: false, required: false
  private _implicitGrant = new DataAzureadApplicationWebImplicitGrantList(this, "implicit_grant", false);
  public get implicitGrant() {
    return this._implicitGrant;
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

export class DataAzureadApplicationWebList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzureadApplicationWebOutputReference {
    return new DataAzureadApplicationWebOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzureadApplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/application#read DataAzureadApplication#read}
  */
  readonly read?: string;
}

export function dataAzureadApplicationTimeoutsToTerraform(struct?: DataAzureadApplicationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzureadApplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzureadApplicationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadApplicationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/application azuread_application}
*/
export class DataAzureadApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/application azuread_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzureadApplicationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzureadApplicationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuread_application',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.43.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._objectId = config.objectId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api - computed: true, optional: false, required: false
  private _api = new DataAzureadApplicationApiList(this, "api", false);
  public get api() {
    return this._api;
  }

  // app_role_ids - computed: true, optional: false, required: false
  private _appRoleIds = new cdktf.StringMap(this, "app_role_ids");
  public get appRoleIds() {
    return this._appRoleIds;
  }

  // app_roles - computed: true, optional: false, required: false
  private _appRoles = new DataAzureadApplicationAppRolesList(this, "app_roles", false);
  public get appRoles() {
    return this._appRoles;
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_only_auth_enabled - computed: true, optional: false, required: false
  public get deviceOnlyAuthEnabled() {
    return this.getBooleanAttribute('device_only_auth_enabled');
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
    return this.getBooleanAttribute('fallback_public_client_enabled');
  }

  // feature_tags - computed: true, optional: false, required: false
  private _featureTags = new DataAzureadApplicationFeatureTagsList(this, "feature_tags", false);
  public get featureTags() {
    return this._featureTags;
  }

  // group_membership_claims - computed: true, optional: false, required: false
  public get groupMembershipClaims() {
    return this.getListAttribute('group_membership_claims');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // oauth2_permission_scope_ids - computed: true, optional: false, required: false
  private _oauth2PermissionScopeIds = new cdktf.StringMap(this, "oauth2_permission_scope_ids");
  public get oauth2PermissionScopeIds() {
    return this._oauth2PermissionScopeIds;
  }

  // oauth2_post_response_required - computed: true, optional: false, required: false
  public get oauth2PostResponseRequired() {
    return this.getBooleanAttribute('oauth2_post_response_required');
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
  private _optionalClaims = new DataAzureadApplicationOptionalClaimsList(this, "optional_claims", false);
  public get optionalClaims() {
    return this._optionalClaims;
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
  private _publicClient = new DataAzureadApplicationPublicClientList(this, "public_client", false);
  public get publicClient() {
    return this._publicClient;
  }

  // publisher_domain - computed: true, optional: false, required: false
  public get publisherDomain() {
    return this.getStringAttribute('publisher_domain');
  }

  // required_resource_access - computed: true, optional: false, required: false
  private _requiredResourceAccess = new DataAzureadApplicationRequiredResourceAccessList(this, "required_resource_access", false);
  public get requiredResourceAccess() {
    return this._requiredResourceAccess;
  }

  // service_management_reference - computed: true, optional: false, required: false
  public get serviceManagementReference() {
    return this.getStringAttribute('service_management_reference');
  }

  // sign_in_audience - computed: true, optional: false, required: false
  public get signInAudience() {
    return this.getStringAttribute('sign_in_audience');
  }

  // single_page_application - computed: true, optional: false, required: false
  private _singlePageApplication = new DataAzureadApplicationSinglePageApplicationList(this, "single_page_application", false);
  public get singlePageApplication() {
    return this._singlePageApplication;
  }

  // support_url - computed: true, optional: false, required: false
  public get supportUrl() {
    return this.getStringAttribute('support_url');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // terms_of_service_url - computed: true, optional: false, required: false
  public get termsOfServiceUrl() {
    return this.getStringAttribute('terms_of_service_url');
  }

  // web - computed: true, optional: false, required: false
  private _web = new DataAzureadApplicationWebList(this, "web", false);
  public get web() {
    return this._web;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzureadApplicationTimeoutsOutputReference(this, "timeouts");
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
      id: cdktf.stringToTerraform(this._id),
      object_id: cdktf.stringToTerraform(this._objectId),
      timeouts: dataAzureadApplicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
