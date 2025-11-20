# `applicationRegistration` Submodule <a name="`applicationRegistration` Submodule" id="@cdktf/provider-azuread.applicationRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationRegistration <a name="ApplicationRegistration" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration azuread_application_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_registration

applicationRegistration.ApplicationRegistration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  description: str = None,
  group_membership_claims: typing.List[str] = None,
  homepage_url: str = None,
  id: str = None,
  implicit_access_token_issuance_enabled: bool | IResolvable = None,
  implicit_id_token_issuance_enabled: bool | IResolvable = None,
  logout_url: str = None,
  marketing_url: str = None,
  notes: str = None,
  privacy_statement_url: str = None,
  requested_access_token_version: typing.Union[int, float] = None,
  service_management_reference: str = None,
  sign_in_audience: str = None,
  support_url: str = None,
  terms_of_service_url: str = None,
  timeouts: ApplicationRegistrationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the application as shown to end users. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.groupMembershipClaims">group_membership_claims</a></code> | <code>typing.List[str]</code> | Configures the `groups` claim that the app expects issued in a user or OAuth access token. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.homepageUrl">homepage_url</a></code> | <code>str</code> | URL of the home page for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#id ApplicationRegistration#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.implicitAccessTokenIssuanceEnabled">implicit_access_token_issuance_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether this application can request an access token using OAuth implicit flow. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.implicitIdTokenIssuanceEnabled">implicit_id_token_issuance_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether this application can request an ID token using OAuth implicit flow. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.logoutUrl">logout_url</a></code> | <code>str</code> | URL of the logout page for the application, where the session is cleared for single sign-out. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.marketingUrl">marketing_url</a></code> | <code>str</code> | URL of the marketing page for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.notes">notes</a></code> | <code>str</code> | User-specified notes relevant for the management of the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.privacyStatementUrl">privacy_statement_url</a></code> | <code>str</code> | URL of the privacy statement for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.requestedAccessTokenVersion">requested_access_token_version</a></code> | <code>typing.Union[int, float]</code> | The access token version expected by this resource. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.serviceManagementReference">service_management_reference</a></code> | <code>str</code> | References application or contact information from a service or asset management database. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.signInAudience">sign_in_audience</a></code> | <code>str</code> | The Microsoft account types that are supported for the current application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.supportUrl">support_url</a></code> | <code>str</code> | URL of the support page for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.termsOfServiceUrl">terms_of_service_url</a></code> | <code>str</code> | URL of the terms of service statement for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.displayName"></a>

- *Type:* str

The display name for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#display_name ApplicationRegistration#display_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.description"></a>

- *Type:* str

Description of the application as shown to end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#description ApplicationRegistration#description}

---

##### `group_membership_claims`<sup>Optional</sup> <a name="group_membership_claims" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.groupMembershipClaims"></a>

- *Type:* typing.List[str]

Configures the `groups` claim that the app expects issued in a user or OAuth access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#group_membership_claims ApplicationRegistration#group_membership_claims}

---

##### `homepage_url`<sup>Optional</sup> <a name="homepage_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.homepageUrl"></a>

- *Type:* str

URL of the home page for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#homepage_url ApplicationRegistration#homepage_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#id ApplicationRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `implicit_access_token_issuance_enabled`<sup>Optional</sup> <a name="implicit_access_token_issuance_enabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.implicitAccessTokenIssuanceEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Whether this application can request an access token using OAuth implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#implicit_access_token_issuance_enabled ApplicationRegistration#implicit_access_token_issuance_enabled}

---

##### `implicit_id_token_issuance_enabled`<sup>Optional</sup> <a name="implicit_id_token_issuance_enabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.implicitIdTokenIssuanceEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Whether this application can request an ID token using OAuth implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#implicit_id_token_issuance_enabled ApplicationRegistration#implicit_id_token_issuance_enabled}

---

##### `logout_url`<sup>Optional</sup> <a name="logout_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.logoutUrl"></a>

- *Type:* str

URL of the logout page for the application, where the session is cleared for single sign-out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#logout_url ApplicationRegistration#logout_url}

---

##### `marketing_url`<sup>Optional</sup> <a name="marketing_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.marketingUrl"></a>

- *Type:* str

URL of the marketing page for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#marketing_url ApplicationRegistration#marketing_url}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.notes"></a>

- *Type:* str

User-specified notes relevant for the management of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#notes ApplicationRegistration#notes}

---

##### `privacy_statement_url`<sup>Optional</sup> <a name="privacy_statement_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.privacyStatementUrl"></a>

- *Type:* str

URL of the privacy statement for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#privacy_statement_url ApplicationRegistration#privacy_statement_url}

---

##### `requested_access_token_version`<sup>Optional</sup> <a name="requested_access_token_version" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.requestedAccessTokenVersion"></a>

- *Type:* typing.Union[int, float]

The access token version expected by this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#requested_access_token_version ApplicationRegistration#requested_access_token_version}

---

##### `service_management_reference`<sup>Optional</sup> <a name="service_management_reference" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.serviceManagementReference"></a>

- *Type:* str

References application or contact information from a service or asset management database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#service_management_reference ApplicationRegistration#service_management_reference}

---

##### `sign_in_audience`<sup>Optional</sup> <a name="sign_in_audience" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.signInAudience"></a>

- *Type:* str

The Microsoft account types that are supported for the current application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#sign_in_audience ApplicationRegistration#sign_in_audience}

---

##### `support_url`<sup>Optional</sup> <a name="support_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.supportUrl"></a>

- *Type:* str

URL of the support page for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#support_url ApplicationRegistration#support_url}

---

##### `terms_of_service_url`<sup>Optional</sup> <a name="terms_of_service_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.termsOfServiceUrl"></a>

- *Type:* str

URL of the terms of service statement for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#terms_of_service_url ApplicationRegistration#terms_of_service_url}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#timeouts ApplicationRegistration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetGroupMembershipClaims">reset_group_membership_claims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetHomepageUrl">reset_homepage_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetImplicitAccessTokenIssuanceEnabled">reset_implicit_access_token_issuance_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetImplicitIdTokenIssuanceEnabled">reset_implicit_id_token_issuance_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetLogoutUrl">reset_logout_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetMarketingUrl">reset_marketing_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetNotes">reset_notes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetPrivacyStatementUrl">reset_privacy_statement_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetRequestedAccessTokenVersion">reset_requested_access_token_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetServiceManagementReference">reset_service_management_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetSignInAudience">reset_sign_in_audience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetSupportUrl">reset_support_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetTermsOfServiceUrl">reset_terms_of_service_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#create ApplicationRegistration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#delete ApplicationRegistration#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#read ApplicationRegistration#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#update ApplicationRegistration#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_group_membership_claims` <a name="reset_group_membership_claims" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetGroupMembershipClaims"></a>

```python
def reset_group_membership_claims() -> None
```

##### `reset_homepage_url` <a name="reset_homepage_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetHomepageUrl"></a>

```python
def reset_homepage_url() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_implicit_access_token_issuance_enabled` <a name="reset_implicit_access_token_issuance_enabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetImplicitAccessTokenIssuanceEnabled"></a>

```python
def reset_implicit_access_token_issuance_enabled() -> None
```

##### `reset_implicit_id_token_issuance_enabled` <a name="reset_implicit_id_token_issuance_enabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetImplicitIdTokenIssuanceEnabled"></a>

```python
def reset_implicit_id_token_issuance_enabled() -> None
```

##### `reset_logout_url` <a name="reset_logout_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetLogoutUrl"></a>

```python
def reset_logout_url() -> None
```

##### `reset_marketing_url` <a name="reset_marketing_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetMarketingUrl"></a>

```python
def reset_marketing_url() -> None
```

##### `reset_notes` <a name="reset_notes" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetNotes"></a>

```python
def reset_notes() -> None
```

##### `reset_privacy_statement_url` <a name="reset_privacy_statement_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetPrivacyStatementUrl"></a>

```python
def reset_privacy_statement_url() -> None
```

##### `reset_requested_access_token_version` <a name="reset_requested_access_token_version" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetRequestedAccessTokenVersion"></a>

```python
def reset_requested_access_token_version() -> None
```

##### `reset_service_management_reference` <a name="reset_service_management_reference" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetServiceManagementReference"></a>

```python
def reset_service_management_reference() -> None
```

##### `reset_sign_in_audience` <a name="reset_sign_in_audience" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetSignInAudience"></a>

```python
def reset_sign_in_audience() -> None
```

##### `reset_support_url` <a name="reset_support_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetSupportUrl"></a>

```python
def reset_support_url() -> None
```

##### `reset_terms_of_service_url` <a name="reset_terms_of_service_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetTermsOfServiceUrl"></a>

```python
def reset_terms_of_service_url() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApplicationRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import application_registration

applicationRegistration.ApplicationRegistration.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import application_registration

applicationRegistration.ApplicationRegistration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import application_registration

applicationRegistration.ApplicationRegistration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import application_registration

applicationRegistration.ApplicationRegistration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApplicationRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApplicationRegistration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApplicationRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.disabledByMicrosoft">disabled_by_microsoft</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.publisherDomain">publisher_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference">ApplicationRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.groupMembershipClaimsInput">group_membership_claims_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.homepageUrlInput">homepage_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitAccessTokenIssuanceEnabledInput">implicit_access_token_issuance_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitIdTokenIssuanceEnabledInput">implicit_id_token_issuance_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.logoutUrlInput">logout_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.marketingUrlInput">marketing_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.notesInput">notes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.privacyStatementUrlInput">privacy_statement_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.requestedAccessTokenVersionInput">requested_access_token_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.serviceManagementReferenceInput">service_management_reference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.signInAudienceInput">sign_in_audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.supportUrlInput">support_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.termsOfServiceUrlInput">terms_of_service_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.groupMembershipClaims">group_membership_claims</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.homepageUrl">homepage_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitAccessTokenIssuanceEnabled">implicit_access_token_issuance_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitIdTokenIssuanceEnabled">implicit_id_token_issuance_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.logoutUrl">logout_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.marketingUrl">marketing_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.notes">notes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.privacyStatementUrl">privacy_statement_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.requestedAccessTokenVersion">requested_access_token_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.serviceManagementReference">service_management_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.signInAudience">sign_in_audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.supportUrl">support_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.termsOfServiceUrl">terms_of_service_url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `disabled_by_microsoft`<sup>Required</sup> <a name="disabled_by_microsoft" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.disabledByMicrosoft"></a>

```python
disabled_by_microsoft: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `publisher_domain`<sup>Required</sup> <a name="publisher_domain" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.publisherDomain"></a>

```python
publisher_domain: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.timeouts"></a>

```python
timeouts: ApplicationRegistrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference">ApplicationRegistrationTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `group_membership_claims_input`<sup>Optional</sup> <a name="group_membership_claims_input" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.groupMembershipClaimsInput"></a>

```python
group_membership_claims_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `homepage_url_input`<sup>Optional</sup> <a name="homepage_url_input" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.homepageUrlInput"></a>

```python
homepage_url_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `implicit_access_token_issuance_enabled_input`<sup>Optional</sup> <a name="implicit_access_token_issuance_enabled_input" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitAccessTokenIssuanceEnabledInput"></a>

```python
implicit_access_token_issuance_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `implicit_id_token_issuance_enabled_input`<sup>Optional</sup> <a name="implicit_id_token_issuance_enabled_input" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitIdTokenIssuanceEnabledInput"></a>

```python
implicit_id_token_issuance_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `logout_url_input`<sup>Optional</sup> <a name="logout_url_input" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.logoutUrlInput"></a>

```python
logout_url_input: str
```

- *Type:* str

---

##### `marketing_url_input`<sup>Optional</sup> <a name="marketing_url_input" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.marketingUrlInput"></a>

```python
marketing_url_input: str
```

- *Type:* str

---

##### `notes_input`<sup>Optional</sup> <a name="notes_input" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.notesInput"></a>

```python
notes_input: str
```

- *Type:* str

---

##### `privacy_statement_url_input`<sup>Optional</sup> <a name="privacy_statement_url_input" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.privacyStatementUrlInput"></a>

```python
privacy_statement_url_input: str
```

- *Type:* str

---

##### `requested_access_token_version_input`<sup>Optional</sup> <a name="requested_access_token_version_input" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.requestedAccessTokenVersionInput"></a>

```python
requested_access_token_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_management_reference_input`<sup>Optional</sup> <a name="service_management_reference_input" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.serviceManagementReferenceInput"></a>

```python
service_management_reference_input: str
```

- *Type:* str

---

##### `sign_in_audience_input`<sup>Optional</sup> <a name="sign_in_audience_input" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.signInAudienceInput"></a>

```python
sign_in_audience_input: str
```

- *Type:* str

---

##### `support_url_input`<sup>Optional</sup> <a name="support_url_input" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.supportUrlInput"></a>

```python
support_url_input: str
```

- *Type:* str

---

##### `terms_of_service_url_input`<sup>Optional</sup> <a name="terms_of_service_url_input" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.termsOfServiceUrlInput"></a>

```python
terms_of_service_url_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApplicationRegistrationTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `group_membership_claims`<sup>Required</sup> <a name="group_membership_claims" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.groupMembershipClaims"></a>

```python
group_membership_claims: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `homepage_url`<sup>Required</sup> <a name="homepage_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.homepageUrl"></a>

```python
homepage_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `implicit_access_token_issuance_enabled`<sup>Required</sup> <a name="implicit_access_token_issuance_enabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitAccessTokenIssuanceEnabled"></a>

```python
implicit_access_token_issuance_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `implicit_id_token_issuance_enabled`<sup>Required</sup> <a name="implicit_id_token_issuance_enabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.implicitIdTokenIssuanceEnabled"></a>

```python
implicit_id_token_issuance_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `logout_url`<sup>Required</sup> <a name="logout_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.logoutUrl"></a>

```python
logout_url: str
```

- *Type:* str

---

##### `marketing_url`<sup>Required</sup> <a name="marketing_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.marketingUrl"></a>

```python
marketing_url: str
```

- *Type:* str

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.notes"></a>

```python
notes: str
```

- *Type:* str

---

##### `privacy_statement_url`<sup>Required</sup> <a name="privacy_statement_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.privacyStatementUrl"></a>

```python
privacy_statement_url: str
```

- *Type:* str

---

##### `requested_access_token_version`<sup>Required</sup> <a name="requested_access_token_version" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.requestedAccessTokenVersion"></a>

```python
requested_access_token_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_management_reference`<sup>Required</sup> <a name="service_management_reference" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.serviceManagementReference"></a>

```python
service_management_reference: str
```

- *Type:* str

---

##### `sign_in_audience`<sup>Required</sup> <a name="sign_in_audience" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.signInAudience"></a>

```python
sign_in_audience: str
```

- *Type:* str

---

##### `support_url`<sup>Required</sup> <a name="support_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.supportUrl"></a>

```python
support_url: str
```

- *Type:* str

---

##### `terms_of_service_url`<sup>Required</sup> <a name="terms_of_service_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.termsOfServiceUrl"></a>

```python
terms_of_service_url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationRegistrationConfig <a name="ApplicationRegistrationConfig" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_registration

applicationRegistration.ApplicationRegistrationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  description: str = None,
  group_membership_claims: typing.List[str] = None,
  homepage_url: str = None,
  id: str = None,
  implicit_access_token_issuance_enabled: bool | IResolvable = None,
  implicit_id_token_issuance_enabled: bool | IResolvable = None,
  logout_url: str = None,
  marketing_url: str = None,
  notes: str = None,
  privacy_statement_url: str = None,
  requested_access_token_version: typing.Union[int, float] = None,
  service_management_reference: str = None,
  sign_in_audience: str = None,
  support_url: str = None,
  terms_of_service_url: str = None,
  timeouts: ApplicationRegistrationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.description">description</a></code> | <code>str</code> | Description of the application as shown to end users. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.groupMembershipClaims">group_membership_claims</a></code> | <code>typing.List[str]</code> | Configures the `groups` claim that the app expects issued in a user or OAuth access token. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.homepageUrl">homepage_url</a></code> | <code>str</code> | URL of the home page for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#id ApplicationRegistration#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.implicitAccessTokenIssuanceEnabled">implicit_access_token_issuance_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether this application can request an access token using OAuth implicit flow. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.implicitIdTokenIssuanceEnabled">implicit_id_token_issuance_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether this application can request an ID token using OAuth implicit flow. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.logoutUrl">logout_url</a></code> | <code>str</code> | URL of the logout page for the application, where the session is cleared for single sign-out. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.marketingUrl">marketing_url</a></code> | <code>str</code> | URL of the marketing page for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.notes">notes</a></code> | <code>str</code> | User-specified notes relevant for the management of the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.privacyStatementUrl">privacy_statement_url</a></code> | <code>str</code> | URL of the privacy statement for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.requestedAccessTokenVersion">requested_access_token_version</a></code> | <code>typing.Union[int, float]</code> | The access token version expected by this resource. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.serviceManagementReference">service_management_reference</a></code> | <code>str</code> | References application or contact information from a service or asset management database. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.signInAudience">sign_in_audience</a></code> | <code>str</code> | The Microsoft account types that are supported for the current application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.supportUrl">support_url</a></code> | <code>str</code> | URL of the support page for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.termsOfServiceUrl">terms_of_service_url</a></code> | <code>str</code> | URL of the terms of service statement for the application. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#display_name ApplicationRegistration#display_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the application as shown to end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#description ApplicationRegistration#description}

---

##### `group_membership_claims`<sup>Optional</sup> <a name="group_membership_claims" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.groupMembershipClaims"></a>

```python
group_membership_claims: typing.List[str]
```

- *Type:* typing.List[str]

Configures the `groups` claim that the app expects issued in a user or OAuth access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#group_membership_claims ApplicationRegistration#group_membership_claims}

---

##### `homepage_url`<sup>Optional</sup> <a name="homepage_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.homepageUrl"></a>

```python
homepage_url: str
```

- *Type:* str

URL of the home page for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#homepage_url ApplicationRegistration#homepage_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#id ApplicationRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `implicit_access_token_issuance_enabled`<sup>Optional</sup> <a name="implicit_access_token_issuance_enabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.implicitAccessTokenIssuanceEnabled"></a>

```python
implicit_access_token_issuance_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether this application can request an access token using OAuth implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#implicit_access_token_issuance_enabled ApplicationRegistration#implicit_access_token_issuance_enabled}

---

##### `implicit_id_token_issuance_enabled`<sup>Optional</sup> <a name="implicit_id_token_issuance_enabled" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.implicitIdTokenIssuanceEnabled"></a>

```python
implicit_id_token_issuance_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether this application can request an ID token using OAuth implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#implicit_id_token_issuance_enabled ApplicationRegistration#implicit_id_token_issuance_enabled}

---

##### `logout_url`<sup>Optional</sup> <a name="logout_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.logoutUrl"></a>

```python
logout_url: str
```

- *Type:* str

URL of the logout page for the application, where the session is cleared for single sign-out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#logout_url ApplicationRegistration#logout_url}

---

##### `marketing_url`<sup>Optional</sup> <a name="marketing_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.marketingUrl"></a>

```python
marketing_url: str
```

- *Type:* str

URL of the marketing page for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#marketing_url ApplicationRegistration#marketing_url}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.notes"></a>

```python
notes: str
```

- *Type:* str

User-specified notes relevant for the management of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#notes ApplicationRegistration#notes}

---

##### `privacy_statement_url`<sup>Optional</sup> <a name="privacy_statement_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.privacyStatementUrl"></a>

```python
privacy_statement_url: str
```

- *Type:* str

URL of the privacy statement for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#privacy_statement_url ApplicationRegistration#privacy_statement_url}

---

##### `requested_access_token_version`<sup>Optional</sup> <a name="requested_access_token_version" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.requestedAccessTokenVersion"></a>

```python
requested_access_token_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The access token version expected by this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#requested_access_token_version ApplicationRegistration#requested_access_token_version}

---

##### `service_management_reference`<sup>Optional</sup> <a name="service_management_reference" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.serviceManagementReference"></a>

```python
service_management_reference: str
```

- *Type:* str

References application or contact information from a service or asset management database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#service_management_reference ApplicationRegistration#service_management_reference}

---

##### `sign_in_audience`<sup>Optional</sup> <a name="sign_in_audience" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.signInAudience"></a>

```python
sign_in_audience: str
```

- *Type:* str

The Microsoft account types that are supported for the current application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#sign_in_audience ApplicationRegistration#sign_in_audience}

---

##### `support_url`<sup>Optional</sup> <a name="support_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.supportUrl"></a>

```python
support_url: str
```

- *Type:* str

URL of the support page for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#support_url ApplicationRegistration#support_url}

---

##### `terms_of_service_url`<sup>Optional</sup> <a name="terms_of_service_url" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.termsOfServiceUrl"></a>

```python
terms_of_service_url: str
```

- *Type:* str

URL of the terms of service statement for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#terms_of_service_url ApplicationRegistration#terms_of_service_url}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationConfig.property.timeouts"></a>

```python
timeouts: ApplicationRegistrationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#timeouts ApplicationRegistration#timeouts}

---

### ApplicationRegistrationTimeouts <a name="ApplicationRegistrationTimeouts" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_registration

applicationRegistration.ApplicationRegistrationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#create ApplicationRegistration#create}. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#delete ApplicationRegistration#delete}. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#read ApplicationRegistration#read}. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#update ApplicationRegistration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#create ApplicationRegistration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#delete ApplicationRegistration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#read ApplicationRegistration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_registration#update ApplicationRegistration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationRegistrationTimeoutsOutputReference <a name="ApplicationRegistrationTimeoutsOutputReference" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_registration

applicationRegistration.ApplicationRegistrationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApplicationRegistrationTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.applicationRegistration.ApplicationRegistrationTimeouts">ApplicationRegistrationTimeouts</a>

---



