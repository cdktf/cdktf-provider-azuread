# `application` Submodule <a name="`application` Submodule" id="@cdktf/provider-azuread.application"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Application <a name="Application" id="@cdktf/provider-azuread.application.Application"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application azuread_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.Application.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.Application(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  api: ApplicationApi = None,
  app_role: typing.Union[IResolvable, typing.List[ApplicationAppRole]] = None,
  description: str = None,
  device_only_auth_enabled: typing.Union[bool, IResolvable] = None,
  fallback_public_client_enabled: typing.Union[bool, IResolvable] = None,
  feature_tags: typing.Union[IResolvable, typing.List[ApplicationFeatureTags]] = None,
  group_membership_claims: typing.List[str] = None,
  id: str = None,
  identifier_uris: typing.List[str] = None,
  logo_image: str = None,
  marketing_url: str = None,
  notes: str = None,
  oauth2_post_response_required: typing.Union[bool, IResolvable] = None,
  optional_claims: ApplicationOptionalClaims = None,
  owners: typing.List[str] = None,
  prevent_duplicate_names: typing.Union[bool, IResolvable] = None,
  privacy_statement_url: str = None,
  public_client: ApplicationPublicClient = None,
  required_resource_access: typing.Union[IResolvable, typing.List[ApplicationRequiredResourceAccess]] = None,
  service_management_reference: str = None,
  sign_in_audience: str = None,
  single_page_application: ApplicationSinglePageApplication = None,
  support_url: str = None,
  tags: typing.List[str] = None,
  template_id: str = None,
  terms_of_service_url: str = None,
  timeouts: ApplicationTimeouts = None,
  web: ApplicationWeb = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name for the application. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.api">api</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a></code> | api block. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.appRole">app_role</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>]]</code> | app_role block. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the application as shown to end users. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.deviceOnlyAuthEnabled">device_only_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether this application supports device authentication without a user. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.fallbackPublicClientEnabled">fallback_public_client_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the application is a public client. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.featureTags">feature_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>]]</code> | feature_tags block. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.groupMembershipClaims">group_membership_claims</a></code> | <code>typing.List[str]</code> | Configures the `groups` claim issued in a user or OAuth 2.0 access token that the app expects. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#id Application#id}. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.identifierUris">identifier_uris</a></code> | <code>typing.List[str]</code> | The user-defined URI(s) that uniquely identify an application within its Azure AD tenant, or within a verified custom domain if the application is multi-tenant. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.logoImage">logo_image</a></code> | <code>str</code> | Base64 encoded logo image in gif, png or jpeg format. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.marketingUrl">marketing_url</a></code> | <code>str</code> | URL of the application's marketing page. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.notes">notes</a></code> | <code>str</code> | User-specified notes relevant for the management of the application. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.oauth2PostResponseRequired">oauth2_post_response_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether, as part of OAuth 2.0 token requests, Azure AD allows POST requests, as opposed to GET requests. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.optionalClaims">optional_claims</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a></code> | optional_claims block. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.owners">owners</a></code> | <code>typing.List[str]</code> | A list of object IDs of principals that will be granted ownership of the application. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.preventDuplicateNames">prevent_duplicate_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, will return an error if an existing application is found with the same name. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.privacyStatementUrl">privacy_statement_url</a></code> | <code>str</code> | URL of the application's privacy statement. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.publicClient">public_client</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a></code> | public_client block. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.requiredResourceAccess">required_resource_access</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>]]</code> | required_resource_access block. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.serviceManagementReference">service_management_reference</a></code> | <code>str</code> | References application or service contact information from a Service or Asset Management database. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.signInAudience">sign_in_audience</a></code> | <code>str</code> | The Microsoft account types that are supported for the current application. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.singlePageApplication">single_page_application</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a></code> | single_page_application block. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.supportUrl">support_url</a></code> | <code>str</code> | URL of the application's support page. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A set of tags to apply to the application. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.templateId">template_id</a></code> | <code>str</code> | Unique ID of the application template from which this application is created. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.termsOfServiceUrl">terms_of_service_url</a></code> | <code>str</code> | URL of the application's terms of service statement. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.web">web</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a></code> | web block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.displayName"></a>

- *Type:* str

The display name for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#display_name Application#display_name}

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.api"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a>

api block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#api Application#api}

---

##### `app_role`<sup>Optional</sup> <a name="app_role" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.appRole"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>]]

app_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#app_role Application#app_role}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.description"></a>

- *Type:* str

Description of the application as shown to end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#description Application#description}

---

##### `device_only_auth_enabled`<sup>Optional</sup> <a name="device_only_auth_enabled" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.deviceOnlyAuthEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether this application supports device authentication without a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#device_only_auth_enabled Application#device_only_auth_enabled}

---

##### `fallback_public_client_enabled`<sup>Optional</sup> <a name="fallback_public_client_enabled" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.fallbackPublicClientEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the application is a public client.

Appropriate for apps using token grant flows that don't use a redirect URI

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#fallback_public_client_enabled Application#fallback_public_client_enabled}

---

##### `feature_tags`<sup>Optional</sup> <a name="feature_tags" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.featureTags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>]]

feature_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#feature_tags Application#feature_tags}

---

##### `group_membership_claims`<sup>Optional</sup> <a name="group_membership_claims" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.groupMembershipClaims"></a>

- *Type:* typing.List[str]

Configures the `groups` claim issued in a user or OAuth 2.0 access token that the app expects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#group_membership_claims Application#group_membership_claims}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#id Application#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier_uris`<sup>Optional</sup> <a name="identifier_uris" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.identifierUris"></a>

- *Type:* typing.List[str]

The user-defined URI(s) that uniquely identify an application within its Azure AD tenant, or within a verified custom domain if the application is multi-tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#identifier_uris Application#identifier_uris}

---

##### `logo_image`<sup>Optional</sup> <a name="logo_image" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.logoImage"></a>

- *Type:* str

Base64 encoded logo image in gif, png or jpeg format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#logo_image Application#logo_image}

---

##### `marketing_url`<sup>Optional</sup> <a name="marketing_url" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.marketingUrl"></a>

- *Type:* str

URL of the application's marketing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#marketing_url Application#marketing_url}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.notes"></a>

- *Type:* str

User-specified notes relevant for the management of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#notes Application#notes}

---

##### `oauth2_post_response_required`<sup>Optional</sup> <a name="oauth2_post_response_required" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.oauth2PostResponseRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether, as part of OAuth 2.0 token requests, Azure AD allows POST requests, as opposed to GET requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#oauth2_post_response_required Application#oauth2_post_response_required}

---

##### `optional_claims`<sup>Optional</sup> <a name="optional_claims" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.optionalClaims"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a>

optional_claims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#optional_claims Application#optional_claims}

---

##### `owners`<sup>Optional</sup> <a name="owners" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.owners"></a>

- *Type:* typing.List[str]

A list of object IDs of principals that will be granted ownership of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#owners Application#owners}

---

##### `prevent_duplicate_names`<sup>Optional</sup> <a name="prevent_duplicate_names" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.preventDuplicateNames"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, will return an error if an existing application is found with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#prevent_duplicate_names Application#prevent_duplicate_names}

---

##### `privacy_statement_url`<sup>Optional</sup> <a name="privacy_statement_url" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.privacyStatementUrl"></a>

- *Type:* str

URL of the application's privacy statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#privacy_statement_url Application#privacy_statement_url}

---

##### `public_client`<sup>Optional</sup> <a name="public_client" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.publicClient"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a>

public_client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#public_client Application#public_client}

---

##### `required_resource_access`<sup>Optional</sup> <a name="required_resource_access" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.requiredResourceAccess"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>]]

required_resource_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#required_resource_access Application#required_resource_access}

---

##### `service_management_reference`<sup>Optional</sup> <a name="service_management_reference" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.serviceManagementReference"></a>

- *Type:* str

References application or service contact information from a Service or Asset Management database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#service_management_reference Application#service_management_reference}

---

##### `sign_in_audience`<sup>Optional</sup> <a name="sign_in_audience" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.signInAudience"></a>

- *Type:* str

The Microsoft account types that are supported for the current application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#sign_in_audience Application#sign_in_audience}

---

##### `single_page_application`<sup>Optional</sup> <a name="single_page_application" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.singlePageApplication"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a>

single_page_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#single_page_application Application#single_page_application}

---

##### `support_url`<sup>Optional</sup> <a name="support_url" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.supportUrl"></a>

- *Type:* str

URL of the application's support page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#support_url Application#support_url}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A set of tags to apply to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#tags Application#tags}

---

##### `template_id`<sup>Optional</sup> <a name="template_id" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.templateId"></a>

- *Type:* str

Unique ID of the application template from which this application is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#template_id Application#template_id}

---

##### `terms_of_service_url`<sup>Optional</sup> <a name="terms_of_service_url" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.termsOfServiceUrl"></a>

- *Type:* str

URL of the application's terms of service statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#terms_of_service_url Application#terms_of_service_url}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#timeouts Application#timeouts}

---

##### `web`<sup>Optional</sup> <a name="web" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.web"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a>

web block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#web Application#web}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.application.Application.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.application.Application.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.application.Application.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.application.Application.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.application.Application.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.application.Application.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.application.Application.putApi">put_api</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putAppRole">put_app_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putFeatureTags">put_feature_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putOptionalClaims">put_optional_claims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putPublicClient">put_public_client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putRequiredResourceAccess">put_required_resource_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putSinglePageApplication">put_single_page_application</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putWeb">put_web</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetApi">reset_api</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetAppRole">reset_app_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetDeviceOnlyAuthEnabled">reset_device_only_auth_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetFallbackPublicClientEnabled">reset_fallback_public_client_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetFeatureTags">reset_feature_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetGroupMembershipClaims">reset_group_membership_claims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetIdentifierUris">reset_identifier_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetLogoImage">reset_logo_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetMarketingUrl">reset_marketing_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetNotes">reset_notes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetOauth2PostResponseRequired">reset_oauth2_post_response_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetOptionalClaims">reset_optional_claims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetOwners">reset_owners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetPreventDuplicateNames">reset_prevent_duplicate_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetPrivacyStatementUrl">reset_privacy_statement_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetPublicClient">reset_public_client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetRequiredResourceAccess">reset_required_resource_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetServiceManagementReference">reset_service_management_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetSignInAudience">reset_sign_in_audience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetSinglePageApplication">reset_single_page_application</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetSupportUrl">reset_support_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetTemplateId">reset_template_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetTermsOfServiceUrl">reset_terms_of_service_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetWeb">reset_web</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.Application.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.application.Application.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.application.Application.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.application.Application.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.application.Application.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.application.Application.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.application.Application.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.application.Application.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.application.Application.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azuread.application.Application.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.application.Application.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.application.Application.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.Application.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.application.Application.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.Application.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.application.Application.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.Application.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.application.Application.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.Application.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.application.Application.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.Application.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.application.Application.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.Application.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.application.Application.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.Application.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.application.Application.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.Application.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.application.Application.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.Application.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azuread.application.Application.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azuread.application.Application.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.Application.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.application.Application.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.application.Application.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.Application.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azuread.application.Application.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.Application.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azuread.application.Application.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.application.Application.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.application.Application.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azuread.application.Application.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.Application.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_api` <a name="put_api" id="@cdktf/provider-azuread.application.Application.putApi"></a>

```python
def put_api(
  known_client_applications: typing.List[str] = None,
  mapped_claims_enabled: typing.Union[bool, IResolvable] = None,
  oauth2_permission_scope: typing.Union[IResolvable, typing.List[ApplicationApiOauth2PermissionScope]] = None,
  requested_access_token_version: typing.Union[int, float] = None
) -> None
```

###### `known_client_applications`<sup>Optional</sup> <a name="known_client_applications" id="@cdktf/provider-azuread.application.Application.putApi.parameter.knownClientApplications"></a>

- *Type:* typing.List[str]

Used for bundling consent if you have a solution that contains two parts: a client app and a custom web API app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#known_client_applications Application#known_client_applications}

---

###### `mapped_claims_enabled`<sup>Optional</sup> <a name="mapped_claims_enabled" id="@cdktf/provider-azuread.application.Application.putApi.parameter.mappedClaimsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows an application to use claims mapping without specifying a custom signing key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#mapped_claims_enabled Application#mapped_claims_enabled}

---

###### `oauth2_permission_scope`<sup>Optional</sup> <a name="oauth2_permission_scope" id="@cdktf/provider-azuread.application.Application.putApi.parameter.oauth2PermissionScope"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>]]

oauth2_permission_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#oauth2_permission_scope Application#oauth2_permission_scope}

---

###### `requested_access_token_version`<sup>Optional</sup> <a name="requested_access_token_version" id="@cdktf/provider-azuread.application.Application.putApi.parameter.requestedAccessTokenVersion"></a>

- *Type:* typing.Union[int, float]

The access token version expected by this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#requested_access_token_version Application#requested_access_token_version}

---

##### `put_app_role` <a name="put_app_role" id="@cdktf/provider-azuread.application.Application.putAppRole"></a>

```python
def put_app_role(
  value: typing.Union[IResolvable, typing.List[ApplicationAppRole]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putAppRole.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>]]

---

##### `put_feature_tags` <a name="put_feature_tags" id="@cdktf/provider-azuread.application.Application.putFeatureTags"></a>

```python
def put_feature_tags(
  value: typing.Union[IResolvable, typing.List[ApplicationFeatureTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putFeatureTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>]]

---

##### `put_optional_claims` <a name="put_optional_claims" id="@cdktf/provider-azuread.application.Application.putOptionalClaims"></a>

```python
def put_optional_claims(
  access_token: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsAccessToken]] = None,
  id_token: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsIdToken]] = None,
  saml2_token: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsSaml2Token]] = None
) -> None
```

###### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-azuread.application.Application.putOptionalClaims.parameter.accessToken"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>]]

access_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#access_token Application#access_token}

---

###### `id_token`<sup>Optional</sup> <a name="id_token" id="@cdktf/provider-azuread.application.Application.putOptionalClaims.parameter.idToken"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>]]

id_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#id_token Application#id_token}

---

###### `saml2_token`<sup>Optional</sup> <a name="saml2_token" id="@cdktf/provider-azuread.application.Application.putOptionalClaims.parameter.saml2Token"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>]]

saml2_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#saml2_token Application#saml2_token}

---

##### `put_public_client` <a name="put_public_client" id="@cdktf/provider-azuread.application.Application.putPublicClient"></a>

```python
def put_public_client(
  redirect_uris: typing.List[str] = None
) -> None
```

###### `redirect_uris`<sup>Optional</sup> <a name="redirect_uris" id="@cdktf/provider-azuread.application.Application.putPublicClient.parameter.redirectUris"></a>

- *Type:* typing.List[str]

The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#redirect_uris Application#redirect_uris}

---

##### `put_required_resource_access` <a name="put_required_resource_access" id="@cdktf/provider-azuread.application.Application.putRequiredResourceAccess"></a>

```python
def put_required_resource_access(
  value: typing.Union[IResolvable, typing.List[ApplicationRequiredResourceAccess]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putRequiredResourceAccess.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>]]

---

##### `put_single_page_application` <a name="put_single_page_application" id="@cdktf/provider-azuread.application.Application.putSinglePageApplication"></a>

```python
def put_single_page_application(
  redirect_uris: typing.List[str] = None
) -> None
```

###### `redirect_uris`<sup>Optional</sup> <a name="redirect_uris" id="@cdktf/provider-azuread.application.Application.putSinglePageApplication.parameter.redirectUris"></a>

- *Type:* typing.List[str]

The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#redirect_uris Application#redirect_uris}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.application.Application.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.application.Application.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#create Application#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.application.Application.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#delete Application#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.application.Application.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#read Application#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.application.Application.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#update Application#update}.

---

##### `put_web` <a name="put_web" id="@cdktf/provider-azuread.application.Application.putWeb"></a>

```python
def put_web(
  homepage_url: str = None,
  implicit_grant: ApplicationWebImplicitGrant = None,
  logout_url: str = None,
  redirect_uris: typing.List[str] = None
) -> None
```

###### `homepage_url`<sup>Optional</sup> <a name="homepage_url" id="@cdktf/provider-azuread.application.Application.putWeb.parameter.homepageUrl"></a>

- *Type:* str

Home page or landing page of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#homepage_url Application#homepage_url}

---

###### `implicit_grant`<sup>Optional</sup> <a name="implicit_grant" id="@cdktf/provider-azuread.application.Application.putWeb.parameter.implicitGrant"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a>

implicit_grant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#implicit_grant Application#implicit_grant}

---

###### `logout_url`<sup>Optional</sup> <a name="logout_url" id="@cdktf/provider-azuread.application.Application.putWeb.parameter.logoutUrl"></a>

- *Type:* str

The URL that will be used by Microsoft's authorization service to sign out a user using front-channel, back-channel or SAML logout protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#logout_url Application#logout_url}

---

###### `redirect_uris`<sup>Optional</sup> <a name="redirect_uris" id="@cdktf/provider-azuread.application.Application.putWeb.parameter.redirectUris"></a>

- *Type:* typing.List[str]

The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#redirect_uris Application#redirect_uris}

---

##### `reset_api` <a name="reset_api" id="@cdktf/provider-azuread.application.Application.resetApi"></a>

```python
def reset_api() -> None
```

##### `reset_app_role` <a name="reset_app_role" id="@cdktf/provider-azuread.application.Application.resetAppRole"></a>

```python
def reset_app_role() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azuread.application.Application.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_device_only_auth_enabled` <a name="reset_device_only_auth_enabled" id="@cdktf/provider-azuread.application.Application.resetDeviceOnlyAuthEnabled"></a>

```python
def reset_device_only_auth_enabled() -> None
```

##### `reset_fallback_public_client_enabled` <a name="reset_fallback_public_client_enabled" id="@cdktf/provider-azuread.application.Application.resetFallbackPublicClientEnabled"></a>

```python
def reset_fallback_public_client_enabled() -> None
```

##### `reset_feature_tags` <a name="reset_feature_tags" id="@cdktf/provider-azuread.application.Application.resetFeatureTags"></a>

```python
def reset_feature_tags() -> None
```

##### `reset_group_membership_claims` <a name="reset_group_membership_claims" id="@cdktf/provider-azuread.application.Application.resetGroupMembershipClaims"></a>

```python
def reset_group_membership_claims() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.application.Application.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identifier_uris` <a name="reset_identifier_uris" id="@cdktf/provider-azuread.application.Application.resetIdentifierUris"></a>

```python
def reset_identifier_uris() -> None
```

##### `reset_logo_image` <a name="reset_logo_image" id="@cdktf/provider-azuread.application.Application.resetLogoImage"></a>

```python
def reset_logo_image() -> None
```

##### `reset_marketing_url` <a name="reset_marketing_url" id="@cdktf/provider-azuread.application.Application.resetMarketingUrl"></a>

```python
def reset_marketing_url() -> None
```

##### `reset_notes` <a name="reset_notes" id="@cdktf/provider-azuread.application.Application.resetNotes"></a>

```python
def reset_notes() -> None
```

##### `reset_oauth2_post_response_required` <a name="reset_oauth2_post_response_required" id="@cdktf/provider-azuread.application.Application.resetOauth2PostResponseRequired"></a>

```python
def reset_oauth2_post_response_required() -> None
```

##### `reset_optional_claims` <a name="reset_optional_claims" id="@cdktf/provider-azuread.application.Application.resetOptionalClaims"></a>

```python
def reset_optional_claims() -> None
```

##### `reset_owners` <a name="reset_owners" id="@cdktf/provider-azuread.application.Application.resetOwners"></a>

```python
def reset_owners() -> None
```

##### `reset_prevent_duplicate_names` <a name="reset_prevent_duplicate_names" id="@cdktf/provider-azuread.application.Application.resetPreventDuplicateNames"></a>

```python
def reset_prevent_duplicate_names() -> None
```

##### `reset_privacy_statement_url` <a name="reset_privacy_statement_url" id="@cdktf/provider-azuread.application.Application.resetPrivacyStatementUrl"></a>

```python
def reset_privacy_statement_url() -> None
```

##### `reset_public_client` <a name="reset_public_client" id="@cdktf/provider-azuread.application.Application.resetPublicClient"></a>

```python
def reset_public_client() -> None
```

##### `reset_required_resource_access` <a name="reset_required_resource_access" id="@cdktf/provider-azuread.application.Application.resetRequiredResourceAccess"></a>

```python
def reset_required_resource_access() -> None
```

##### `reset_service_management_reference` <a name="reset_service_management_reference" id="@cdktf/provider-azuread.application.Application.resetServiceManagementReference"></a>

```python
def reset_service_management_reference() -> None
```

##### `reset_sign_in_audience` <a name="reset_sign_in_audience" id="@cdktf/provider-azuread.application.Application.resetSignInAudience"></a>

```python
def reset_sign_in_audience() -> None
```

##### `reset_single_page_application` <a name="reset_single_page_application" id="@cdktf/provider-azuread.application.Application.resetSinglePageApplication"></a>

```python
def reset_single_page_application() -> None
```

##### `reset_support_url` <a name="reset_support_url" id="@cdktf/provider-azuread.application.Application.resetSupportUrl"></a>

```python
def reset_support_url() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azuread.application.Application.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_template_id` <a name="reset_template_id" id="@cdktf/provider-azuread.application.Application.resetTemplateId"></a>

```python
def reset_template_id() -> None
```

##### `reset_terms_of_service_url` <a name="reset_terms_of_service_url" id="@cdktf/provider-azuread.application.Application.resetTermsOfServiceUrl"></a>

```python
def reset_terms_of_service_url() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.application.Application.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_web` <a name="reset_web" id="@cdktf/provider-azuread.application.Application.resetWeb"></a>

```python
def reset_web() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.application.Application.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.application.Application.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.Application.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.application.Application.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.application.Application.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.Application.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.application.Application.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.application.Application.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.Application.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.application.Application.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.application.Application.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.Application.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.application.Application.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.application.Application.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Application to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.application.Application.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Application that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.application.Application.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Application to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.api">api</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference">ApplicationApiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.appRole">app_role</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList">ApplicationAppRoleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.appRoleIds">app_role_ids</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.disabledByMicrosoft">disabled_by_microsoft</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.featureTags">feature_tags</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList">ApplicationFeatureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.logoUrl">logo_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.oauth2PermissionScopeIds">oauth2_permission_scope_ids</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.optionalClaims">optional_claims</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference">ApplicationOptionalClaimsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.publicClient">public_client</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference">ApplicationPublicClientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.publisherDomain">publisher_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.requiredResourceAccess">required_resource_access</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList">ApplicationRequiredResourceAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.singlePageApplication">single_page_application</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference">ApplicationSinglePageApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference">ApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.web">web</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference">ApplicationWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.apiInput">api_input</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.appRoleInput">app_role_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.deviceOnlyAuthEnabledInput">device_only_auth_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.fallbackPublicClientEnabledInput">fallback_public_client_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.featureTagsInput">feature_tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.groupMembershipClaimsInput">group_membership_claims_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.identifierUrisInput">identifier_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.logoImageInput">logo_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.marketingUrlInput">marketing_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.notesInput">notes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.oauth2PostResponseRequiredInput">oauth2_post_response_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.optionalClaimsInput">optional_claims_input</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.ownersInput">owners_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.preventDuplicateNamesInput">prevent_duplicate_names_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.privacyStatementUrlInput">privacy_statement_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.publicClientInput">public_client_input</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.requiredResourceAccessInput">required_resource_access_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.serviceManagementReferenceInput">service_management_reference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.signInAudienceInput">sign_in_audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.singlePageApplicationInput">single_page_application_input</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.supportUrlInput">support_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.templateIdInput">template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.termsOfServiceUrlInput">terms_of_service_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.webInput">web_input</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.deviceOnlyAuthEnabled">device_only_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.fallbackPublicClientEnabled">fallback_public_client_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.groupMembershipClaims">group_membership_claims</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.identifierUris">identifier_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.logoImage">logo_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.marketingUrl">marketing_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.notes">notes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.oauth2PostResponseRequired">oauth2_post_response_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.owners">owners</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.preventDuplicateNames">prevent_duplicate_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.privacyStatementUrl">privacy_statement_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.serviceManagementReference">service_management_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.signInAudience">sign_in_audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.supportUrl">support_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.templateId">template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.termsOfServiceUrl">terms_of_service_url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.application.Application.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.application.Application.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.Application.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.application.Application.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.application.Application.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.application.Application.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.application.Application.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.application.Application.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.application.Application.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.application.Application.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.application.Application.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.application.Application.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.application.Application.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.application.Application.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-azuread.application.Application.property.api"></a>

```python
api: ApplicationApiOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference">ApplicationApiOutputReference</a>

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-azuread.application.Application.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `app_role`<sup>Required</sup> <a name="app_role" id="@cdktf/provider-azuread.application.Application.property.appRole"></a>

```python
app_role: ApplicationAppRoleList
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList">ApplicationAppRoleList</a>

---

##### `app_role_ids`<sup>Required</sup> <a name="app_role_ids" id="@cdktf/provider-azuread.application.Application.property.appRoleIds"></a>

```python
app_role_ids: StringMap
```

- *Type:* cdktf.StringMap

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azuread.application.Application.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `disabled_by_microsoft`<sup>Required</sup> <a name="disabled_by_microsoft" id="@cdktf/provider-azuread.application.Application.property.disabledByMicrosoft"></a>

```python
disabled_by_microsoft: str
```

- *Type:* str

---

##### `feature_tags`<sup>Required</sup> <a name="feature_tags" id="@cdktf/provider-azuread.application.Application.property.featureTags"></a>

```python
feature_tags: ApplicationFeatureTagsList
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList">ApplicationFeatureTagsList</a>

---

##### `logo_url`<sup>Required</sup> <a name="logo_url" id="@cdktf/provider-azuread.application.Application.property.logoUrl"></a>

```python
logo_url: str
```

- *Type:* str

---

##### `oauth2_permission_scope_ids`<sup>Required</sup> <a name="oauth2_permission_scope_ids" id="@cdktf/provider-azuread.application.Application.property.oauth2PermissionScopeIds"></a>

```python
oauth2_permission_scope_ids: StringMap
```

- *Type:* cdktf.StringMap

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azuread.application.Application.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `optional_claims`<sup>Required</sup> <a name="optional_claims" id="@cdktf/provider-azuread.application.Application.property.optionalClaims"></a>

```python
optional_claims: ApplicationOptionalClaimsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference">ApplicationOptionalClaimsOutputReference</a>

---

##### `public_client`<sup>Required</sup> <a name="public_client" id="@cdktf/provider-azuread.application.Application.property.publicClient"></a>

```python
public_client: ApplicationPublicClientOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference">ApplicationPublicClientOutputReference</a>

---

##### `publisher_domain`<sup>Required</sup> <a name="publisher_domain" id="@cdktf/provider-azuread.application.Application.property.publisherDomain"></a>

```python
publisher_domain: str
```

- *Type:* str

---

##### `required_resource_access`<sup>Required</sup> <a name="required_resource_access" id="@cdktf/provider-azuread.application.Application.property.requiredResourceAccess"></a>

```python
required_resource_access: ApplicationRequiredResourceAccessList
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList">ApplicationRequiredResourceAccessList</a>

---

##### `single_page_application`<sup>Required</sup> <a name="single_page_application" id="@cdktf/provider-azuread.application.Application.property.singlePageApplication"></a>

```python
single_page_application: ApplicationSinglePageApplicationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference">ApplicationSinglePageApplicationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.application.Application.property.timeouts"></a>

```python
timeouts: ApplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference">ApplicationTimeoutsOutputReference</a>

---

##### `web`<sup>Required</sup> <a name="web" id="@cdktf/provider-azuread.application.Application.property.web"></a>

```python
web: ApplicationWebOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference">ApplicationWebOutputReference</a>

---

##### `api_input`<sup>Optional</sup> <a name="api_input" id="@cdktf/provider-azuread.application.Application.property.apiInput"></a>

```python
api_input: ApplicationApi
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a>

---

##### `app_role_input`<sup>Optional</sup> <a name="app_role_input" id="@cdktf/provider-azuread.application.Application.property.appRoleInput"></a>

```python
app_role_input: typing.Union[IResolvable, typing.List[ApplicationAppRole]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azuread.application.Application.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `device_only_auth_enabled_input`<sup>Optional</sup> <a name="device_only_auth_enabled_input" id="@cdktf/provider-azuread.application.Application.property.deviceOnlyAuthEnabledInput"></a>

```python
device_only_auth_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azuread.application.Application.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `fallback_public_client_enabled_input`<sup>Optional</sup> <a name="fallback_public_client_enabled_input" id="@cdktf/provider-azuread.application.Application.property.fallbackPublicClientEnabledInput"></a>

```python
fallback_public_client_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `feature_tags_input`<sup>Optional</sup> <a name="feature_tags_input" id="@cdktf/provider-azuread.application.Application.property.featureTagsInput"></a>

```python
feature_tags_input: typing.Union[IResolvable, typing.List[ApplicationFeatureTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>]]

---

##### `group_membership_claims_input`<sup>Optional</sup> <a name="group_membership_claims_input" id="@cdktf/provider-azuread.application.Application.property.groupMembershipClaimsInput"></a>

```python
group_membership_claims_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identifier_uris_input`<sup>Optional</sup> <a name="identifier_uris_input" id="@cdktf/provider-azuread.application.Application.property.identifierUrisInput"></a>

```python
identifier_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.application.Application.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `logo_image_input`<sup>Optional</sup> <a name="logo_image_input" id="@cdktf/provider-azuread.application.Application.property.logoImageInput"></a>

```python
logo_image_input: str
```

- *Type:* str

---

##### `marketing_url_input`<sup>Optional</sup> <a name="marketing_url_input" id="@cdktf/provider-azuread.application.Application.property.marketingUrlInput"></a>

```python
marketing_url_input: str
```

- *Type:* str

---

##### `notes_input`<sup>Optional</sup> <a name="notes_input" id="@cdktf/provider-azuread.application.Application.property.notesInput"></a>

```python
notes_input: str
```

- *Type:* str

---

##### `oauth2_post_response_required_input`<sup>Optional</sup> <a name="oauth2_post_response_required_input" id="@cdktf/provider-azuread.application.Application.property.oauth2PostResponseRequiredInput"></a>

```python
oauth2_post_response_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `optional_claims_input`<sup>Optional</sup> <a name="optional_claims_input" id="@cdktf/provider-azuread.application.Application.property.optionalClaimsInput"></a>

```python
optional_claims_input: ApplicationOptionalClaims
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a>

---

##### `owners_input`<sup>Optional</sup> <a name="owners_input" id="@cdktf/provider-azuread.application.Application.property.ownersInput"></a>

```python
owners_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prevent_duplicate_names_input`<sup>Optional</sup> <a name="prevent_duplicate_names_input" id="@cdktf/provider-azuread.application.Application.property.preventDuplicateNamesInput"></a>

```python
prevent_duplicate_names_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `privacy_statement_url_input`<sup>Optional</sup> <a name="privacy_statement_url_input" id="@cdktf/provider-azuread.application.Application.property.privacyStatementUrlInput"></a>

```python
privacy_statement_url_input: str
```

- *Type:* str

---

##### `public_client_input`<sup>Optional</sup> <a name="public_client_input" id="@cdktf/provider-azuread.application.Application.property.publicClientInput"></a>

```python
public_client_input: ApplicationPublicClient
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a>

---

##### `required_resource_access_input`<sup>Optional</sup> <a name="required_resource_access_input" id="@cdktf/provider-azuread.application.Application.property.requiredResourceAccessInput"></a>

```python
required_resource_access_input: typing.Union[IResolvable, typing.List[ApplicationRequiredResourceAccess]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>]]

---

##### `service_management_reference_input`<sup>Optional</sup> <a name="service_management_reference_input" id="@cdktf/provider-azuread.application.Application.property.serviceManagementReferenceInput"></a>

```python
service_management_reference_input: str
```

- *Type:* str

---

##### `sign_in_audience_input`<sup>Optional</sup> <a name="sign_in_audience_input" id="@cdktf/provider-azuread.application.Application.property.signInAudienceInput"></a>

```python
sign_in_audience_input: str
```

- *Type:* str

---

##### `single_page_application_input`<sup>Optional</sup> <a name="single_page_application_input" id="@cdktf/provider-azuread.application.Application.property.singlePageApplicationInput"></a>

```python
single_page_application_input: ApplicationSinglePageApplication
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a>

---

##### `support_url_input`<sup>Optional</sup> <a name="support_url_input" id="@cdktf/provider-azuread.application.Application.property.supportUrlInput"></a>

```python
support_url_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azuread.application.Application.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `template_id_input`<sup>Optional</sup> <a name="template_id_input" id="@cdktf/provider-azuread.application.Application.property.templateIdInput"></a>

```python
template_id_input: str
```

- *Type:* str

---

##### `terms_of_service_url_input`<sup>Optional</sup> <a name="terms_of_service_url_input" id="@cdktf/provider-azuread.application.Application.property.termsOfServiceUrlInput"></a>

```python
terms_of_service_url_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.application.Application.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApplicationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a>]

---

##### `web_input`<sup>Optional</sup> <a name="web_input" id="@cdktf/provider-azuread.application.Application.property.webInput"></a>

```python
web_input: ApplicationWeb
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.application.Application.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_only_auth_enabled`<sup>Required</sup> <a name="device_only_auth_enabled" id="@cdktf/provider-azuread.application.Application.property.deviceOnlyAuthEnabled"></a>

```python
device_only_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.application.Application.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fallback_public_client_enabled`<sup>Required</sup> <a name="fallback_public_client_enabled" id="@cdktf/provider-azuread.application.Application.property.fallbackPublicClientEnabled"></a>

```python
fallback_public_client_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_membership_claims`<sup>Required</sup> <a name="group_membership_claims" id="@cdktf/provider-azuread.application.Application.property.groupMembershipClaims"></a>

```python
group_membership_claims: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.Application.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identifier_uris`<sup>Required</sup> <a name="identifier_uris" id="@cdktf/provider-azuread.application.Application.property.identifierUris"></a>

```python
identifier_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logo_image`<sup>Required</sup> <a name="logo_image" id="@cdktf/provider-azuread.application.Application.property.logoImage"></a>

```python
logo_image: str
```

- *Type:* str

---

##### `marketing_url`<sup>Required</sup> <a name="marketing_url" id="@cdktf/provider-azuread.application.Application.property.marketingUrl"></a>

```python
marketing_url: str
```

- *Type:* str

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-azuread.application.Application.property.notes"></a>

```python
notes: str
```

- *Type:* str

---

##### `oauth2_post_response_required`<sup>Required</sup> <a name="oauth2_post_response_required" id="@cdktf/provider-azuread.application.Application.property.oauth2PostResponseRequired"></a>

```python
oauth2_post_response_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktf/provider-azuread.application.Application.property.owners"></a>

```python
owners: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prevent_duplicate_names`<sup>Required</sup> <a name="prevent_duplicate_names" id="@cdktf/provider-azuread.application.Application.property.preventDuplicateNames"></a>

```python
prevent_duplicate_names: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `privacy_statement_url`<sup>Required</sup> <a name="privacy_statement_url" id="@cdktf/provider-azuread.application.Application.property.privacyStatementUrl"></a>

```python
privacy_statement_url: str
```

- *Type:* str

---

##### `service_management_reference`<sup>Required</sup> <a name="service_management_reference" id="@cdktf/provider-azuread.application.Application.property.serviceManagementReference"></a>

```python
service_management_reference: str
```

- *Type:* str

---

##### `sign_in_audience`<sup>Required</sup> <a name="sign_in_audience" id="@cdktf/provider-azuread.application.Application.property.signInAudience"></a>

```python
sign_in_audience: str
```

- *Type:* str

---

##### `support_url`<sup>Required</sup> <a name="support_url" id="@cdktf/provider-azuread.application.Application.property.supportUrl"></a>

```python
support_url: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azuread.application.Application.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktf/provider-azuread.application.Application.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

---

##### `terms_of_service_url`<sup>Required</sup> <a name="terms_of_service_url" id="@cdktf/provider-azuread.application.Application.property.termsOfServiceUrl"></a>

```python
terms_of_service_url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.application.Application.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationApi <a name="ApplicationApi" id="@cdktf/provider-azuread.application.ApplicationApi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationApi.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationApi(
  known_client_applications: typing.List[str] = None,
  mapped_claims_enabled: typing.Union[bool, IResolvable] = None,
  oauth2_permission_scope: typing.Union[IResolvable, typing.List[ApplicationApiOauth2PermissionScope]] = None,
  requested_access_token_version: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApi.property.knownClientApplications">known_client_applications</a></code> | <code>typing.List[str]</code> | Used for bundling consent if you have a solution that contains two parts: a client app and a custom web API app. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApi.property.mappedClaimsEnabled">mapped_claims_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows an application to use claims mapping without specifying a custom signing key. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApi.property.oauth2PermissionScope">oauth2_permission_scope</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>]]</code> | oauth2_permission_scope block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApi.property.requestedAccessTokenVersion">requested_access_token_version</a></code> | <code>typing.Union[int, float]</code> | The access token version expected by this resource. |

---

##### `known_client_applications`<sup>Optional</sup> <a name="known_client_applications" id="@cdktf/provider-azuread.application.ApplicationApi.property.knownClientApplications"></a>

```python
known_client_applications: typing.List[str]
```

- *Type:* typing.List[str]

Used for bundling consent if you have a solution that contains two parts: a client app and a custom web API app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#known_client_applications Application#known_client_applications}

---

##### `mapped_claims_enabled`<sup>Optional</sup> <a name="mapped_claims_enabled" id="@cdktf/provider-azuread.application.ApplicationApi.property.mappedClaimsEnabled"></a>

```python
mapped_claims_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows an application to use claims mapping without specifying a custom signing key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#mapped_claims_enabled Application#mapped_claims_enabled}

---

##### `oauth2_permission_scope`<sup>Optional</sup> <a name="oauth2_permission_scope" id="@cdktf/provider-azuread.application.ApplicationApi.property.oauth2PermissionScope"></a>

```python
oauth2_permission_scope: typing.Union[IResolvable, typing.List[ApplicationApiOauth2PermissionScope]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>]]

oauth2_permission_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#oauth2_permission_scope Application#oauth2_permission_scope}

---

##### `requested_access_token_version`<sup>Optional</sup> <a name="requested_access_token_version" id="@cdktf/provider-azuread.application.ApplicationApi.property.requestedAccessTokenVersion"></a>

```python
requested_access_token_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The access token version expected by this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#requested_access_token_version Application#requested_access_token_version}

---

### ApplicationApiOauth2PermissionScope <a name="ApplicationApiOauth2PermissionScope" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationApiOauth2PermissionScope(
  id: str,
  admin_consent_description: str = None,
  admin_consent_display_name: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  type: str = None,
  user_consent_description: str = None,
  user_consent_display_name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.id">id</a></code> | <code>str</code> | The unique identifier of the delegated permission. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.adminConsentDescription">admin_consent_description</a></code> | <code>str</code> | Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.adminConsentDisplayName">admin_consent_display_name</a></code> | <code>str</code> | Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if the permission scope is enabled. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.type">type</a></code> | <code>str</code> | Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.userConsentDescription">user_consent_description</a></code> | <code>str</code> | Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.userConsentDisplayName">user_consent_display_name</a></code> | <code>str</code> | Display name for the delegated permission that appears in the end user consent experience. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.value">value</a></code> | <code>str</code> | The value that is used for the `scp` claim in OAuth 2.0 access tokens. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.id"></a>

```python
id: str
```

- *Type:* str

The unique identifier of the delegated permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#id Application#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `admin_consent_description`<sup>Optional</sup> <a name="admin_consent_description" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.adminConsentDescription"></a>

```python
admin_consent_description: str
```

- *Type:* str

Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#admin_consent_description Application#admin_consent_description}

---

##### `admin_consent_display_name`<sup>Optional</sup> <a name="admin_consent_display_name" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.adminConsentDisplayName"></a>

```python
admin_consent_display_name: str
```

- *Type:* str

Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#admin_consent_display_name Application#admin_consent_display_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if the permission scope is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#enabled Application#enabled}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.type"></a>

```python
type: str
```

- *Type:* str

Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#type Application#type}

---

##### `user_consent_description`<sup>Optional</sup> <a name="user_consent_description" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.userConsentDescription"></a>

```python
user_consent_description: str
```

- *Type:* str

Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#user_consent_description Application#user_consent_description}

---

##### `user_consent_display_name`<sup>Optional</sup> <a name="user_consent_display_name" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.userConsentDisplayName"></a>

```python
user_consent_display_name: str
```

- *Type:* str

Display name for the delegated permission that appears in the end user consent experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#user_consent_display_name Application#user_consent_display_name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.value"></a>

```python
value: str
```

- *Type:* str

The value that is used for the `scp` claim in OAuth 2.0 access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#value Application#value}

---

### ApplicationAppRole <a name="ApplicationAppRole" id="@cdktf/provider-azuread.application.ApplicationAppRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationAppRole.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationAppRole(
  allowed_member_types: typing.List[str],
  description: str,
  display_name: str,
  id: str,
  enabled: typing.Union[bool, IResolvable] = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.allowedMemberTypes">allowed_member_types</a></code> | <code>typing.List[str]</code> | Specifies whether this app role definition can be assigned to users and groups by setting to `User`, or to other applications (that are accessing this application in a standalone scenario) by setting to `Application`, or to both. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.description">description</a></code> | <code>str</code> | Description of the app role that appears when the role is being assigned and, if the role functions as an application permissions, during the consent experiences. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.displayName">display_name</a></code> | <code>str</code> | Display name for the app role that appears during app role assignment and in consent experiences. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.id">id</a></code> | <code>str</code> | The unique identifier of the app role. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if the app role is enabled. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.value">value</a></code> | <code>str</code> | The value that is used for the `roles` claim in ID tokens and OAuth 2.0 access tokens that are authenticating an assigned service or user principal. |

---

##### `allowed_member_types`<sup>Required</sup> <a name="allowed_member_types" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.allowedMemberTypes"></a>

```python
allowed_member_types: typing.List[str]
```

- *Type:* typing.List[str]

Specifies whether this app role definition can be assigned to users and groups by setting to `User`, or to other applications (that are accessing this application in a standalone scenario) by setting to `Application`, or to both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#allowed_member_types Application#allowed_member_types}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the app role that appears when the role is being assigned and, if the role functions as an application permissions, during the consent experiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#description Application#description}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name for the app role that appears during app role assignment and in consent experiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#display_name Application#display_name}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.id"></a>

```python
id: str
```

- *Type:* str

The unique identifier of the app role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#id Application#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if the app role is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#enabled Application#enabled}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.value"></a>

```python
value: str
```

- *Type:* str

The value that is used for the `roles` claim in ID tokens and OAuth 2.0 access tokens that are authenticating an assigned service or user principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#value Application#value}

---

### ApplicationConfig <a name="ApplicationConfig" id="@cdktf/provider-azuread.application.ApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  api: ApplicationApi = None,
  app_role: typing.Union[IResolvable, typing.List[ApplicationAppRole]] = None,
  description: str = None,
  device_only_auth_enabled: typing.Union[bool, IResolvable] = None,
  fallback_public_client_enabled: typing.Union[bool, IResolvable] = None,
  feature_tags: typing.Union[IResolvable, typing.List[ApplicationFeatureTags]] = None,
  group_membership_claims: typing.List[str] = None,
  id: str = None,
  identifier_uris: typing.List[str] = None,
  logo_image: str = None,
  marketing_url: str = None,
  notes: str = None,
  oauth2_post_response_required: typing.Union[bool, IResolvable] = None,
  optional_claims: ApplicationOptionalClaims = None,
  owners: typing.List[str] = None,
  prevent_duplicate_names: typing.Union[bool, IResolvable] = None,
  privacy_statement_url: str = None,
  public_client: ApplicationPublicClient = None,
  required_resource_access: typing.Union[IResolvable, typing.List[ApplicationRequiredResourceAccess]] = None,
  service_management_reference: str = None,
  sign_in_audience: str = None,
  single_page_application: ApplicationSinglePageApplication = None,
  support_url: str = None,
  tags: typing.List[str] = None,
  template_id: str = None,
  terms_of_service_url: str = None,
  timeouts: ApplicationTimeouts = None,
  web: ApplicationWeb = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name for the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.api">api</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a></code> | api block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.appRole">app_role</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>]]</code> | app_role block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.description">description</a></code> | <code>str</code> | Description of the application as shown to end users. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.deviceOnlyAuthEnabled">device_only_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether this application supports device authentication without a user. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.fallbackPublicClientEnabled">fallback_public_client_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the application is a public client. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.featureTags">feature_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>]]</code> | feature_tags block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.groupMembershipClaims">group_membership_claims</a></code> | <code>typing.List[str]</code> | Configures the `groups` claim issued in a user or OAuth 2.0 access token that the app expects. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#id Application#id}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.identifierUris">identifier_uris</a></code> | <code>typing.List[str]</code> | The user-defined URI(s) that uniquely identify an application within its Azure AD tenant, or within a verified custom domain if the application is multi-tenant. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.logoImage">logo_image</a></code> | <code>str</code> | Base64 encoded logo image in gif, png or jpeg format. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.marketingUrl">marketing_url</a></code> | <code>str</code> | URL of the application's marketing page. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.notes">notes</a></code> | <code>str</code> | User-specified notes relevant for the management of the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.oauth2PostResponseRequired">oauth2_post_response_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether, as part of OAuth 2.0 token requests, Azure AD allows POST requests, as opposed to GET requests. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.optionalClaims">optional_claims</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a></code> | optional_claims block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.owners">owners</a></code> | <code>typing.List[str]</code> | A list of object IDs of principals that will be granted ownership of the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.preventDuplicateNames">prevent_duplicate_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, will return an error if an existing application is found with the same name. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.privacyStatementUrl">privacy_statement_url</a></code> | <code>str</code> | URL of the application's privacy statement. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.publicClient">public_client</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a></code> | public_client block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.requiredResourceAccess">required_resource_access</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>]]</code> | required_resource_access block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.serviceManagementReference">service_management_reference</a></code> | <code>str</code> | References application or service contact information from a Service or Asset Management database. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.signInAudience">sign_in_audience</a></code> | <code>str</code> | The Microsoft account types that are supported for the current application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.singlePageApplication">single_page_application</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a></code> | single_page_application block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.supportUrl">support_url</a></code> | <code>str</code> | URL of the application's support page. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A set of tags to apply to the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.templateId">template_id</a></code> | <code>str</code> | Unique ID of the application template from which this application is created. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.termsOfServiceUrl">terms_of_service_url</a></code> | <code>str</code> | URL of the application's terms of service statement. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.web">web</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a></code> | web block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.application.ApplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.application.ApplicationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.application.ApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.application.ApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.application.ApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.application.ApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.application.ApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.application.ApplicationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#display_name Application#display_name}

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktf/provider-azuread.application.ApplicationConfig.property.api"></a>

```python
api: ApplicationApi
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a>

api block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#api Application#api}

---

##### `app_role`<sup>Optional</sup> <a name="app_role" id="@cdktf/provider-azuread.application.ApplicationConfig.property.appRole"></a>

```python
app_role: typing.Union[IResolvable, typing.List[ApplicationAppRole]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>]]

app_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#app_role Application#app_role}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.application.ApplicationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the application as shown to end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#description Application#description}

---

##### `device_only_auth_enabled`<sup>Optional</sup> <a name="device_only_auth_enabled" id="@cdktf/provider-azuread.application.ApplicationConfig.property.deviceOnlyAuthEnabled"></a>

```python
device_only_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether this application supports device authentication without a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#device_only_auth_enabled Application#device_only_auth_enabled}

---

##### `fallback_public_client_enabled`<sup>Optional</sup> <a name="fallback_public_client_enabled" id="@cdktf/provider-azuread.application.ApplicationConfig.property.fallbackPublicClientEnabled"></a>

```python
fallback_public_client_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the application is a public client.

Appropriate for apps using token grant flows that don't use a redirect URI

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#fallback_public_client_enabled Application#fallback_public_client_enabled}

---

##### `feature_tags`<sup>Optional</sup> <a name="feature_tags" id="@cdktf/provider-azuread.application.ApplicationConfig.property.featureTags"></a>

```python
feature_tags: typing.Union[IResolvable, typing.List[ApplicationFeatureTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>]]

feature_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#feature_tags Application#feature_tags}

---

##### `group_membership_claims`<sup>Optional</sup> <a name="group_membership_claims" id="@cdktf/provider-azuread.application.ApplicationConfig.property.groupMembershipClaims"></a>

```python
group_membership_claims: typing.List[str]
```

- *Type:* typing.List[str]

Configures the `groups` claim issued in a user or OAuth 2.0 access token that the app expects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#group_membership_claims Application#group_membership_claims}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.application.ApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#id Application#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier_uris`<sup>Optional</sup> <a name="identifier_uris" id="@cdktf/provider-azuread.application.ApplicationConfig.property.identifierUris"></a>

```python
identifier_uris: typing.List[str]
```

- *Type:* typing.List[str]

The user-defined URI(s) that uniquely identify an application within its Azure AD tenant, or within a verified custom domain if the application is multi-tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#identifier_uris Application#identifier_uris}

---

##### `logo_image`<sup>Optional</sup> <a name="logo_image" id="@cdktf/provider-azuread.application.ApplicationConfig.property.logoImage"></a>

```python
logo_image: str
```

- *Type:* str

Base64 encoded logo image in gif, png or jpeg format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#logo_image Application#logo_image}

---

##### `marketing_url`<sup>Optional</sup> <a name="marketing_url" id="@cdktf/provider-azuread.application.ApplicationConfig.property.marketingUrl"></a>

```python
marketing_url: str
```

- *Type:* str

URL of the application's marketing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#marketing_url Application#marketing_url}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-azuread.application.ApplicationConfig.property.notes"></a>

```python
notes: str
```

- *Type:* str

User-specified notes relevant for the management of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#notes Application#notes}

---

##### `oauth2_post_response_required`<sup>Optional</sup> <a name="oauth2_post_response_required" id="@cdktf/provider-azuread.application.ApplicationConfig.property.oauth2PostResponseRequired"></a>

```python
oauth2_post_response_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether, as part of OAuth 2.0 token requests, Azure AD allows POST requests, as opposed to GET requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#oauth2_post_response_required Application#oauth2_post_response_required}

---

##### `optional_claims`<sup>Optional</sup> <a name="optional_claims" id="@cdktf/provider-azuread.application.ApplicationConfig.property.optionalClaims"></a>

```python
optional_claims: ApplicationOptionalClaims
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a>

optional_claims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#optional_claims Application#optional_claims}

---

##### `owners`<sup>Optional</sup> <a name="owners" id="@cdktf/provider-azuread.application.ApplicationConfig.property.owners"></a>

```python
owners: typing.List[str]
```

- *Type:* typing.List[str]

A list of object IDs of principals that will be granted ownership of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#owners Application#owners}

---

##### `prevent_duplicate_names`<sup>Optional</sup> <a name="prevent_duplicate_names" id="@cdktf/provider-azuread.application.ApplicationConfig.property.preventDuplicateNames"></a>

```python
prevent_duplicate_names: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, will return an error if an existing application is found with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#prevent_duplicate_names Application#prevent_duplicate_names}

---

##### `privacy_statement_url`<sup>Optional</sup> <a name="privacy_statement_url" id="@cdktf/provider-azuread.application.ApplicationConfig.property.privacyStatementUrl"></a>

```python
privacy_statement_url: str
```

- *Type:* str

URL of the application's privacy statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#privacy_statement_url Application#privacy_statement_url}

---

##### `public_client`<sup>Optional</sup> <a name="public_client" id="@cdktf/provider-azuread.application.ApplicationConfig.property.publicClient"></a>

```python
public_client: ApplicationPublicClient
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a>

public_client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#public_client Application#public_client}

---

##### `required_resource_access`<sup>Optional</sup> <a name="required_resource_access" id="@cdktf/provider-azuread.application.ApplicationConfig.property.requiredResourceAccess"></a>

```python
required_resource_access: typing.Union[IResolvable, typing.List[ApplicationRequiredResourceAccess]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>]]

required_resource_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#required_resource_access Application#required_resource_access}

---

##### `service_management_reference`<sup>Optional</sup> <a name="service_management_reference" id="@cdktf/provider-azuread.application.ApplicationConfig.property.serviceManagementReference"></a>

```python
service_management_reference: str
```

- *Type:* str

References application or service contact information from a Service or Asset Management database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#service_management_reference Application#service_management_reference}

---

##### `sign_in_audience`<sup>Optional</sup> <a name="sign_in_audience" id="@cdktf/provider-azuread.application.ApplicationConfig.property.signInAudience"></a>

```python
sign_in_audience: str
```

- *Type:* str

The Microsoft account types that are supported for the current application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#sign_in_audience Application#sign_in_audience}

---

##### `single_page_application`<sup>Optional</sup> <a name="single_page_application" id="@cdktf/provider-azuread.application.ApplicationConfig.property.singlePageApplication"></a>

```python
single_page_application: ApplicationSinglePageApplication
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a>

single_page_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#single_page_application Application#single_page_application}

---

##### `support_url`<sup>Optional</sup> <a name="support_url" id="@cdktf/provider-azuread.application.ApplicationConfig.property.supportUrl"></a>

```python
support_url: str
```

- *Type:* str

URL of the application's support page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#support_url Application#support_url}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azuread.application.ApplicationConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A set of tags to apply to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#tags Application#tags}

---

##### `template_id`<sup>Optional</sup> <a name="template_id" id="@cdktf/provider-azuread.application.ApplicationConfig.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

Unique ID of the application template from which this application is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#template_id Application#template_id}

---

##### `terms_of_service_url`<sup>Optional</sup> <a name="terms_of_service_url" id="@cdktf/provider-azuread.application.ApplicationConfig.property.termsOfServiceUrl"></a>

```python
terms_of_service_url: str
```

- *Type:* str

URL of the application's terms of service statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#terms_of_service_url Application#terms_of_service_url}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.application.ApplicationConfig.property.timeouts"></a>

```python
timeouts: ApplicationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#timeouts Application#timeouts}

---

##### `web`<sup>Optional</sup> <a name="web" id="@cdktf/provider-azuread.application.ApplicationConfig.property.web"></a>

```python
web: ApplicationWeb
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a>

web block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#web Application#web}

---

### ApplicationFeatureTags <a name="ApplicationFeatureTags" id="@cdktf/provider-azuread.application.ApplicationFeatureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationFeatureTags(
  custom_single_sign_on: typing.Union[bool, IResolvable] = None,
  enterprise: typing.Union[bool, IResolvable] = None,
  gallery: typing.Union[bool, IResolvable] = None,
  hide: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags.property.customSingleSignOn">custom_single_sign_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this application represents a custom SAML application for linked service principals. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags.property.enterprise">enterprise</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this application represents an Enterprise Application for linked service principals. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags.property.gallery">gallery</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this application represents a gallery application for linked service principals. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags.property.hide">hide</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this application is invisible to users in My Apps and Office 365 Launcher. |

---

##### `custom_single_sign_on`<sup>Optional</sup> <a name="custom_single_sign_on" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.property.customSingleSignOn"></a>

```python
custom_single_sign_on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this application represents a custom SAML application for linked service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#custom_single_sign_on Application#custom_single_sign_on}

---

##### `enterprise`<sup>Optional</sup> <a name="enterprise" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.property.enterprise"></a>

```python
enterprise: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this application represents an Enterprise Application for linked service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#enterprise Application#enterprise}

---

##### `gallery`<sup>Optional</sup> <a name="gallery" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.property.gallery"></a>

```python
gallery: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this application represents a gallery application for linked service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#gallery Application#gallery}

---

##### `hide`<sup>Optional</sup> <a name="hide" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.property.hide"></a>

```python
hide: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this application is invisible to users in My Apps and Office 365 Launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#hide Application#hide}

---

### ApplicationOptionalClaims <a name="ApplicationOptionalClaims" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationOptionalClaims(
  access_token: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsAccessToken]] = None,
  id_token: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsIdToken]] = None,
  saml2_token: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsSaml2Token]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.accessToken">access_token</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>]]</code> | access_token block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.idToken">id_token</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>]]</code> | id_token block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.saml2Token">saml2_token</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>]]</code> | saml2_token block. |

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.accessToken"></a>

```python
access_token: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsAccessToken]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>]]

access_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#access_token Application#access_token}

---

##### `id_token`<sup>Optional</sup> <a name="id_token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.idToken"></a>

```python
id_token: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsIdToken]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>]]

id_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#id_token Application#id_token}

---

##### `saml2_token`<sup>Optional</sup> <a name="saml2_token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.saml2Token"></a>

```python
saml2_token: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsSaml2Token]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>]]

saml2_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#saml2_token Application#saml2_token}

---

### ApplicationOptionalClaimsAccessToken <a name="ApplicationOptionalClaimsAccessToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationOptionalClaimsAccessToken(
  name: str,
  additional_properties: typing.List[str] = None,
  essential: typing.Union[bool, IResolvable] = None,
  source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.name">name</a></code> | <code>str</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.additionalProperties">additional_properties</a></code> | <code>typing.List[str]</code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.essential">essential</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.source">source</a></code> | <code>str</code> | The source of the claim. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#name Application#name}

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.additionalProperties"></a>

```python
additional_properties: typing.List[str]
```

- *Type:* typing.List[str]

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#additional_properties Application#additional_properties}

---

##### `essential`<sup>Optional</sup> <a name="essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.essential"></a>

```python
essential: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#essential Application#essential}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.source"></a>

```python
source: str
```

- *Type:* str

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#source Application#source}

---

### ApplicationOptionalClaimsIdToken <a name="ApplicationOptionalClaimsIdToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationOptionalClaimsIdToken(
  name: str,
  additional_properties: typing.List[str] = None,
  essential: typing.Union[bool, IResolvable] = None,
  source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.name">name</a></code> | <code>str</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.additionalProperties">additional_properties</a></code> | <code>typing.List[str]</code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.essential">essential</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.source">source</a></code> | <code>str</code> | The source of the claim. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#name Application#name}

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.additionalProperties"></a>

```python
additional_properties: typing.List[str]
```

- *Type:* typing.List[str]

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#additional_properties Application#additional_properties}

---

##### `essential`<sup>Optional</sup> <a name="essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.essential"></a>

```python
essential: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#essential Application#essential}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.source"></a>

```python
source: str
```

- *Type:* str

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#source Application#source}

---

### ApplicationOptionalClaimsSaml2Token <a name="ApplicationOptionalClaimsSaml2Token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationOptionalClaimsSaml2Token(
  name: str,
  additional_properties: typing.List[str] = None,
  essential: typing.Union[bool, IResolvable] = None,
  source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.name">name</a></code> | <code>str</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.additionalProperties">additional_properties</a></code> | <code>typing.List[str]</code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.essential">essential</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.source">source</a></code> | <code>str</code> | The source of the claim. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#name Application#name}

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.additionalProperties"></a>

```python
additional_properties: typing.List[str]
```

- *Type:* typing.List[str]

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#additional_properties Application#additional_properties}

---

##### `essential`<sup>Optional</sup> <a name="essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.essential"></a>

```python
essential: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#essential Application#essential}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.source"></a>

```python
source: str
```

- *Type:* str

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#source Application#source}

---

### ApplicationPublicClient <a name="ApplicationPublicClient" id="@cdktf/provider-azuread.application.ApplicationPublicClient"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationPublicClient.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationPublicClient(
  redirect_uris: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClient.property.redirectUris">redirect_uris</a></code> | <code>typing.List[str]</code> | The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent. |

---

##### `redirect_uris`<sup>Optional</sup> <a name="redirect_uris" id="@cdktf/provider-azuread.application.ApplicationPublicClient.property.redirectUris"></a>

```python
redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#redirect_uris Application#redirect_uris}

---

### ApplicationRequiredResourceAccess <a name="ApplicationRequiredResourceAccess" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationRequiredResourceAccess(
  resource_access: typing.Union[IResolvable, typing.List[ApplicationRequiredResourceAccessResourceAccess]],
  resource_app_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.property.resourceAccess">resource_access</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>]]</code> | resource_access block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.property.resourceAppId">resource_app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#resource_app_id Application#resource_app_id}. |

---

##### `resource_access`<sup>Required</sup> <a name="resource_access" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.property.resourceAccess"></a>

```python
resource_access: typing.Union[IResolvable, typing.List[ApplicationRequiredResourceAccessResourceAccess]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>]]

resource_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#resource_access Application#resource_access}

---

##### `resource_app_id`<sup>Required</sup> <a name="resource_app_id" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.property.resourceAppId"></a>

```python
resource_app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#resource_app_id Application#resource_app_id}.

---

### ApplicationRequiredResourceAccessResourceAccess <a name="ApplicationRequiredResourceAccessResourceAccess" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationRequiredResourceAccessResourceAccess(
  id: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#id Application#id}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#type Application#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#id Application#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#type Application#type}.

---

### ApplicationSinglePageApplication <a name="ApplicationSinglePageApplication" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplication.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationSinglePageApplication(
  redirect_uris: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication.property.redirectUris">redirect_uris</a></code> | <code>typing.List[str]</code> | The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent. |

---

##### `redirect_uris`<sup>Optional</sup> <a name="redirect_uris" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplication.property.redirectUris"></a>

```python
redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#redirect_uris Application#redirect_uris}

---

### ApplicationTimeouts <a name="ApplicationTimeouts" id="@cdktf/provider-azuread.application.ApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#create Application#create}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#delete Application#delete}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#read Application#read}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#update Application#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.application.ApplicationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#create Application#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.application.ApplicationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#delete Application#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.application.ApplicationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#read Application#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.application.ApplicationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#update Application#update}.

---

### ApplicationWeb <a name="ApplicationWeb" id="@cdktf/provider-azuread.application.ApplicationWeb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationWeb.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationWeb(
  homepage_url: str = None,
  implicit_grant: ApplicationWebImplicitGrant = None,
  logout_url: str = None,
  redirect_uris: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb.property.homepageUrl">homepage_url</a></code> | <code>str</code> | Home page or landing page of the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb.property.implicitGrant">implicit_grant</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a></code> | implicit_grant block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb.property.logoutUrl">logout_url</a></code> | <code>str</code> | The URL that will be used by Microsoft's authorization service to sign out a user using front-channel, back-channel or SAML logout protocols. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb.property.redirectUris">redirect_uris</a></code> | <code>typing.List[str]</code> | The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent. |

---

##### `homepage_url`<sup>Optional</sup> <a name="homepage_url" id="@cdktf/provider-azuread.application.ApplicationWeb.property.homepageUrl"></a>

```python
homepage_url: str
```

- *Type:* str

Home page or landing page of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#homepage_url Application#homepage_url}

---

##### `implicit_grant`<sup>Optional</sup> <a name="implicit_grant" id="@cdktf/provider-azuread.application.ApplicationWeb.property.implicitGrant"></a>

```python
implicit_grant: ApplicationWebImplicitGrant
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a>

implicit_grant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#implicit_grant Application#implicit_grant}

---

##### `logout_url`<sup>Optional</sup> <a name="logout_url" id="@cdktf/provider-azuread.application.ApplicationWeb.property.logoutUrl"></a>

```python
logout_url: str
```

- *Type:* str

The URL that will be used by Microsoft's authorization service to sign out a user using front-channel, back-channel or SAML logout protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#logout_url Application#logout_url}

---

##### `redirect_uris`<sup>Optional</sup> <a name="redirect_uris" id="@cdktf/provider-azuread.application.ApplicationWeb.property.redirectUris"></a>

```python
redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#redirect_uris Application#redirect_uris}

---

### ApplicationWebImplicitGrant <a name="ApplicationWebImplicitGrant" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationWebImplicitGrant(
  access_token_issuance_enabled: typing.Union[bool, IResolvable] = None,
  id_token_issuance_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.property.accessTokenIssuanceEnabled">access_token_issuance_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this web application can request an access token using OAuth 2.0 implicit flow. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.property.idTokenIssuanceEnabled">id_token_issuance_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this web application can request an ID token using OAuth 2.0 implicit flow. |

---

##### `access_token_issuance_enabled`<sup>Optional</sup> <a name="access_token_issuance_enabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.property.accessTokenIssuanceEnabled"></a>

```python
access_token_issuance_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this web application can request an access token using OAuth 2.0 implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#access_token_issuance_enabled Application#access_token_issuance_enabled}

---

##### `id_token_issuance_enabled`<sup>Optional</sup> <a name="id_token_issuance_enabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.property.idTokenIssuanceEnabled"></a>

```python
id_token_issuance_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this web application can request an ID token using OAuth 2.0 implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#id_token_issuance_enabled Application#id_token_issuance_enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationApiOauth2PermissionScopeList <a name="ApplicationApiOauth2PermissionScopeList" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationApiOauth2PermissionScopeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApplicationApiOauth2PermissionScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApplicationApiOauth2PermissionScope]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>]]

---


### ApplicationApiOauth2PermissionScopeOutputReference <a name="ApplicationApiOauth2PermissionScopeOutputReference" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationApiOauth2PermissionScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetAdminConsentDescription">reset_admin_consent_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetAdminConsentDisplayName">reset_admin_consent_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetUserConsentDescription">reset_user_consent_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetUserConsentDisplayName">reset_user_consent_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_admin_consent_description` <a name="reset_admin_consent_description" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetAdminConsentDescription"></a>

```python
def reset_admin_consent_description() -> None
```

##### `reset_admin_consent_display_name` <a name="reset_admin_consent_display_name" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetAdminConsentDisplayName"></a>

```python
def reset_admin_consent_display_name() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_user_consent_description` <a name="reset_user_consent_description" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetUserConsentDescription"></a>

```python
def reset_user_consent_description() -> None
```

##### `reset_user_consent_display_name` <a name="reset_user_consent_display_name" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetUserConsentDisplayName"></a>

```python
def reset_user_consent_display_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDescriptionInput">admin_consent_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDisplayNameInput">admin_consent_display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDescriptionInput">user_consent_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDisplayNameInput">user_consent_display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDescription">admin_consent_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDisplayName">admin_consent_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDescription">user_consent_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDisplayName">user_consent_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_consent_description_input`<sup>Optional</sup> <a name="admin_consent_description_input" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDescriptionInput"></a>

```python
admin_consent_description_input: str
```

- *Type:* str

---

##### `admin_consent_display_name_input`<sup>Optional</sup> <a name="admin_consent_display_name_input" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDisplayNameInput"></a>

```python
admin_consent_display_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_consent_description_input`<sup>Optional</sup> <a name="user_consent_description_input" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDescriptionInput"></a>

```python
user_consent_description_input: str
```

- *Type:* str

---

##### `user_consent_display_name_input`<sup>Optional</sup> <a name="user_consent_display_name_input" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDisplayNameInput"></a>

```python
user_consent_display_name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `admin_consent_description`<sup>Required</sup> <a name="admin_consent_description" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDescription"></a>

```python
admin_consent_description: str
```

- *Type:* str

---

##### `admin_consent_display_name`<sup>Required</sup> <a name="admin_consent_display_name" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDisplayName"></a>

```python
admin_consent_display_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_consent_description`<sup>Required</sup> <a name="user_consent_description" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDescription"></a>

```python
user_consent_description: str
```

- *Type:* str

---

##### `user_consent_display_name`<sup>Required</sup> <a name="user_consent_display_name" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDisplayName"></a>

```python
user_consent_display_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationApiOauth2PermissionScope]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>]

---


### ApplicationApiOutputReference <a name="ApplicationApiOutputReference" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationApiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.putOauth2PermissionScope">put_oauth2_permission_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetKnownClientApplications">reset_known_client_applications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetMappedClaimsEnabled">reset_mapped_claims_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetOauth2PermissionScope">reset_oauth2_permission_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetRequestedAccessTokenVersion">reset_requested_access_token_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_oauth2_permission_scope` <a name="put_oauth2_permission_scope" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.putOauth2PermissionScope"></a>

```python
def put_oauth2_permission_scope(
  value: typing.Union[IResolvable, typing.List[ApplicationApiOauth2PermissionScope]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.putOauth2PermissionScope.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>]]

---

##### `reset_known_client_applications` <a name="reset_known_client_applications" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetKnownClientApplications"></a>

```python
def reset_known_client_applications() -> None
```

##### `reset_mapped_claims_enabled` <a name="reset_mapped_claims_enabled" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetMappedClaimsEnabled"></a>

```python
def reset_mapped_claims_enabled() -> None
```

##### `reset_oauth2_permission_scope` <a name="reset_oauth2_permission_scope" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetOauth2PermissionScope"></a>

```python
def reset_oauth2_permission_scope() -> None
```

##### `reset_requested_access_token_version` <a name="reset_requested_access_token_version" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetRequestedAccessTokenVersion"></a>

```python
def reset_requested_access_token_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.oauth2PermissionScope">oauth2_permission_scope</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList">ApplicationApiOauth2PermissionScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.knownClientApplicationsInput">known_client_applications_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.mappedClaimsEnabledInput">mapped_claims_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.oauth2PermissionScopeInput">oauth2_permission_scope_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.requestedAccessTokenVersionInput">requested_access_token_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.knownClientApplications">known_client_applications</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.mappedClaimsEnabled">mapped_claims_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.requestedAccessTokenVersion">requested_access_token_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth2_permission_scope`<sup>Required</sup> <a name="oauth2_permission_scope" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.oauth2PermissionScope"></a>

```python
oauth2_permission_scope: ApplicationApiOauth2PermissionScopeList
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList">ApplicationApiOauth2PermissionScopeList</a>

---

##### `known_client_applications_input`<sup>Optional</sup> <a name="known_client_applications_input" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.knownClientApplicationsInput"></a>

```python
known_client_applications_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mapped_claims_enabled_input`<sup>Optional</sup> <a name="mapped_claims_enabled_input" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.mappedClaimsEnabledInput"></a>

```python
mapped_claims_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `oauth2_permission_scope_input`<sup>Optional</sup> <a name="oauth2_permission_scope_input" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.oauth2PermissionScopeInput"></a>

```python
oauth2_permission_scope_input: typing.Union[IResolvable, typing.List[ApplicationApiOauth2PermissionScope]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>]]

---

##### `requested_access_token_version_input`<sup>Optional</sup> <a name="requested_access_token_version_input" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.requestedAccessTokenVersionInput"></a>

```python
requested_access_token_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `known_client_applications`<sup>Required</sup> <a name="known_client_applications" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.knownClientApplications"></a>

```python
known_client_applications: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mapped_claims_enabled`<sup>Required</sup> <a name="mapped_claims_enabled" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.mappedClaimsEnabled"></a>

```python
mapped_claims_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `requested_access_token_version`<sup>Required</sup> <a name="requested_access_token_version" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.requestedAccessTokenVersion"></a>

```python
requested_access_token_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.internalValue"></a>

```python
internal_value: ApplicationApi
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a>

---


### ApplicationAppRoleList <a name="ApplicationAppRoleList" id="@cdktf/provider-azuread.application.ApplicationAppRoleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationAppRoleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApplicationAppRoleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApplicationAppRole]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>]]

---


### ApplicationAppRoleOutputReference <a name="ApplicationAppRoleOutputReference" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationAppRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.allowedMemberTypesInput">allowed_member_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.allowedMemberTypes">allowed_member_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_member_types_input`<sup>Optional</sup> <a name="allowed_member_types_input" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.allowedMemberTypesInput"></a>

```python
allowed_member_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `allowed_member_types`<sup>Required</sup> <a name="allowed_member_types" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.allowedMemberTypes"></a>

```python
allowed_member_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationAppRole]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>]

---


### ApplicationFeatureTagsList <a name="ApplicationFeatureTagsList" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationFeatureTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApplicationFeatureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApplicationFeatureTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>]]

---


### ApplicationFeatureTagsOutputReference <a name="ApplicationFeatureTagsOutputReference" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationFeatureTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetCustomSingleSignOn">reset_custom_single_sign_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetEnterprise">reset_enterprise</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetGallery">reset_gallery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetHide">reset_hide</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_single_sign_on` <a name="reset_custom_single_sign_on" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetCustomSingleSignOn"></a>

```python
def reset_custom_single_sign_on() -> None
```

##### `reset_enterprise` <a name="reset_enterprise" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetEnterprise"></a>

```python
def reset_enterprise() -> None
```

##### `reset_gallery` <a name="reset_gallery" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetGallery"></a>

```python
def reset_gallery() -> None
```

##### `reset_hide` <a name="reset_hide" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetHide"></a>

```python
def reset_hide() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.customSingleSignOnInput">custom_single_sign_on_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.enterpriseInput">enterprise_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.galleryInput">gallery_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.hideInput">hide_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.customSingleSignOn">custom_single_sign_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.enterprise">enterprise</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.gallery">gallery</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.hide">hide</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_single_sign_on_input`<sup>Optional</sup> <a name="custom_single_sign_on_input" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.customSingleSignOnInput"></a>

```python
custom_single_sign_on_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enterprise_input`<sup>Optional</sup> <a name="enterprise_input" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.enterpriseInput"></a>

```python
enterprise_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gallery_input`<sup>Optional</sup> <a name="gallery_input" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.galleryInput"></a>

```python
gallery_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_input`<sup>Optional</sup> <a name="hide_input" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.hideInput"></a>

```python
hide_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_single_sign_on`<sup>Required</sup> <a name="custom_single_sign_on" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.customSingleSignOn"></a>

```python
custom_single_sign_on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enterprise`<sup>Required</sup> <a name="enterprise" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.enterprise"></a>

```python
enterprise: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gallery`<sup>Required</sup> <a name="gallery" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.gallery"></a>

```python
gallery: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide`<sup>Required</sup> <a name="hide" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.hide"></a>

```python
hide: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationFeatureTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>]

---


### ApplicationOptionalClaimsAccessTokenList <a name="ApplicationOptionalClaimsAccessTokenList" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationOptionalClaimsAccessTokenList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApplicationOptionalClaimsAccessTokenOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsAccessToken]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>]]

---


### ApplicationOptionalClaimsAccessTokenOutputReference <a name="ApplicationOptionalClaimsAccessTokenOutputReference" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationOptionalClaimsAccessTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetEssential">reset_essential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_essential` <a name="reset_essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetEssential"></a>

```python
def reset_essential() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.essentialInput">essential_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.additionalProperties">additional_properties</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.essential">essential</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `essential_input`<sup>Optional</sup> <a name="essential_input" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.essentialInput"></a>

```python
essential_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.additionalProperties"></a>

```python
additional_properties: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.essential"></a>

```python
essential: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationOptionalClaimsAccessToken]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>]

---


### ApplicationOptionalClaimsIdTokenList <a name="ApplicationOptionalClaimsIdTokenList" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationOptionalClaimsIdTokenList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApplicationOptionalClaimsIdTokenOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsIdToken]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>]]

---


### ApplicationOptionalClaimsIdTokenOutputReference <a name="ApplicationOptionalClaimsIdTokenOutputReference" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationOptionalClaimsIdTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetEssential">reset_essential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_essential` <a name="reset_essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetEssential"></a>

```python
def reset_essential() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.essentialInput">essential_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.additionalProperties">additional_properties</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.essential">essential</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `essential_input`<sup>Optional</sup> <a name="essential_input" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.essentialInput"></a>

```python
essential_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.additionalProperties"></a>

```python
additional_properties: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.essential"></a>

```python
essential: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationOptionalClaimsIdToken]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>]

---


### ApplicationOptionalClaimsOutputReference <a name="ApplicationOptionalClaimsOutputReference" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationOptionalClaimsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putAccessToken">put_access_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putIdToken">put_id_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putSaml2Token">put_saml2_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetAccessToken">reset_access_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetIdToken">reset_id_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetSaml2Token">reset_saml2_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_token` <a name="put_access_token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putAccessToken"></a>

```python
def put_access_token(
  value: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsAccessToken]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putAccessToken.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>]]

---

##### `put_id_token` <a name="put_id_token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putIdToken"></a>

```python
def put_id_token(
  value: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsIdToken]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putIdToken.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>]]

---

##### `put_saml2_token` <a name="put_saml2_token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putSaml2Token"></a>

```python
def put_saml2_token(
  value: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsSaml2Token]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putSaml2Token.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>]]

---

##### `reset_access_token` <a name="reset_access_token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetAccessToken"></a>

```python
def reset_access_token() -> None
```

##### `reset_id_token` <a name="reset_id_token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetIdToken"></a>

```python
def reset_id_token() -> None
```

##### `reset_saml2_token` <a name="reset_saml2_token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetSaml2Token"></a>

```python
def reset_saml2_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.accessToken">access_token</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList">ApplicationOptionalClaimsAccessTokenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.idToken">id_token</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList">ApplicationOptionalClaimsIdTokenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.saml2Token">saml2_token</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList">ApplicationOptionalClaimsSaml2TokenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.accessTokenInput">access_token_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.idTokenInput">id_token_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.saml2TokenInput">saml2_token_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.accessToken"></a>

```python
access_token: ApplicationOptionalClaimsAccessTokenList
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList">ApplicationOptionalClaimsAccessTokenList</a>

---

##### `id_token`<sup>Required</sup> <a name="id_token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.idToken"></a>

```python
id_token: ApplicationOptionalClaimsIdTokenList
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList">ApplicationOptionalClaimsIdTokenList</a>

---

##### `saml2_token`<sup>Required</sup> <a name="saml2_token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.saml2Token"></a>

```python
saml2_token: ApplicationOptionalClaimsSaml2TokenList
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList">ApplicationOptionalClaimsSaml2TokenList</a>

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.accessTokenInput"></a>

```python
access_token_input: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsAccessToken]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>]]

---

##### `id_token_input`<sup>Optional</sup> <a name="id_token_input" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.idTokenInput"></a>

```python
id_token_input: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsIdToken]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>]]

---

##### `saml2_token_input`<sup>Optional</sup> <a name="saml2_token_input" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.saml2TokenInput"></a>

```python
saml2_token_input: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsSaml2Token]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.internalValue"></a>

```python
internal_value: ApplicationOptionalClaims
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a>

---


### ApplicationOptionalClaimsSaml2TokenList <a name="ApplicationOptionalClaimsSaml2TokenList" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationOptionalClaimsSaml2TokenList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApplicationOptionalClaimsSaml2TokenOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApplicationOptionalClaimsSaml2Token]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>]]

---


### ApplicationOptionalClaimsSaml2TokenOutputReference <a name="ApplicationOptionalClaimsSaml2TokenOutputReference" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationOptionalClaimsSaml2TokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetEssential">reset_essential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_essential` <a name="reset_essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetEssential"></a>

```python
def reset_essential() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.essentialInput">essential_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.additionalProperties">additional_properties</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.essential">essential</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `essential_input`<sup>Optional</sup> <a name="essential_input" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.essentialInput"></a>

```python
essential_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.additionalProperties"></a>

```python
additional_properties: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.essential"></a>

```python
essential: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationOptionalClaimsSaml2Token]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>]

---


### ApplicationPublicClientOutputReference <a name="ApplicationPublicClientOutputReference" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationPublicClientOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resetRedirectUris">reset_redirect_uris</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_redirect_uris` <a name="reset_redirect_uris" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resetRedirectUris"></a>

```python
def reset_redirect_uris() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.redirectUrisInput">redirect_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.redirectUris">redirect_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `redirect_uris_input`<sup>Optional</sup> <a name="redirect_uris_input" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.redirectUrisInput"></a>

```python
redirect_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `redirect_uris`<sup>Required</sup> <a name="redirect_uris" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.redirectUris"></a>

```python
redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.internalValue"></a>

```python
internal_value: ApplicationPublicClient
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a>

---


### ApplicationRequiredResourceAccessList <a name="ApplicationRequiredResourceAccessList" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationRequiredResourceAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApplicationRequiredResourceAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApplicationRequiredResourceAccess]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>]]

---


### ApplicationRequiredResourceAccessOutputReference <a name="ApplicationRequiredResourceAccessOutputReference" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationRequiredResourceAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.putResourceAccess">put_resource_access</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_resource_access` <a name="put_resource_access" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.putResourceAccess"></a>

```python
def put_resource_access(
  value: typing.Union[IResolvable, typing.List[ApplicationRequiredResourceAccessResourceAccess]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.putResourceAccess.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAccess">resource_access</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList">ApplicationRequiredResourceAccessResourceAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAccessInput">resource_access_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAppIdInput">resource_app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAppId">resource_app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_access`<sup>Required</sup> <a name="resource_access" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAccess"></a>

```python
resource_access: ApplicationRequiredResourceAccessResourceAccessList
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList">ApplicationRequiredResourceAccessResourceAccessList</a>

---

##### `resource_access_input`<sup>Optional</sup> <a name="resource_access_input" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAccessInput"></a>

```python
resource_access_input: typing.Union[IResolvable, typing.List[ApplicationRequiredResourceAccessResourceAccess]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>]]

---

##### `resource_app_id_input`<sup>Optional</sup> <a name="resource_app_id_input" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAppIdInput"></a>

```python
resource_app_id_input: str
```

- *Type:* str

---

##### `resource_app_id`<sup>Required</sup> <a name="resource_app_id" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAppId"></a>

```python
resource_app_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationRequiredResourceAccess]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>]

---


### ApplicationRequiredResourceAccessResourceAccessList <a name="ApplicationRequiredResourceAccessResourceAccessList" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationRequiredResourceAccessResourceAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApplicationRequiredResourceAccessResourceAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApplicationRequiredResourceAccessResourceAccess]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>]]

---


### ApplicationRequiredResourceAccessResourceAccessOutputReference <a name="ApplicationRequiredResourceAccessResourceAccessOutputReference" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationRequiredResourceAccessResourceAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationRequiredResourceAccessResourceAccess]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>]

---


### ApplicationSinglePageApplicationOutputReference <a name="ApplicationSinglePageApplicationOutputReference" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationSinglePageApplicationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resetRedirectUris">reset_redirect_uris</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_redirect_uris` <a name="reset_redirect_uris" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resetRedirectUris"></a>

```python
def reset_redirect_uris() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.redirectUrisInput">redirect_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.redirectUris">redirect_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `redirect_uris_input`<sup>Optional</sup> <a name="redirect_uris_input" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.redirectUrisInput"></a>

```python
redirect_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `redirect_uris`<sup>Required</sup> <a name="redirect_uris" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.redirectUris"></a>

```python
redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.internalValue"></a>

```python
internal_value: ApplicationSinglePageApplication
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a>

---


### ApplicationTimeoutsOutputReference <a name="ApplicationTimeoutsOutputReference" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a>]

---


### ApplicationWebImplicitGrantOutputReference <a name="ApplicationWebImplicitGrantOutputReference" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationWebImplicitGrantOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resetAccessTokenIssuanceEnabled">reset_access_token_issuance_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resetIdTokenIssuanceEnabled">reset_id_token_issuance_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_token_issuance_enabled` <a name="reset_access_token_issuance_enabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resetAccessTokenIssuanceEnabled"></a>

```python
def reset_access_token_issuance_enabled() -> None
```

##### `reset_id_token_issuance_enabled` <a name="reset_id_token_issuance_enabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resetIdTokenIssuanceEnabled"></a>

```python
def reset_id_token_issuance_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.accessTokenIssuanceEnabledInput">access_token_issuance_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.idTokenIssuanceEnabledInput">id_token_issuance_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.accessTokenIssuanceEnabled">access_token_issuance_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.idTokenIssuanceEnabled">id_token_issuance_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_token_issuance_enabled_input`<sup>Optional</sup> <a name="access_token_issuance_enabled_input" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.accessTokenIssuanceEnabledInput"></a>

```python
access_token_issuance_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_token_issuance_enabled_input`<sup>Optional</sup> <a name="id_token_issuance_enabled_input" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.idTokenIssuanceEnabledInput"></a>

```python
id_token_issuance_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_token_issuance_enabled`<sup>Required</sup> <a name="access_token_issuance_enabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.accessTokenIssuanceEnabled"></a>

```python
access_token_issuance_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_token_issuance_enabled`<sup>Required</sup> <a name="id_token_issuance_enabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.idTokenIssuanceEnabled"></a>

```python
id_token_issuance_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.internalValue"></a>

```python
internal_value: ApplicationWebImplicitGrant
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a>

---


### ApplicationWebOutputReference <a name="ApplicationWebOutputReference" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application

application.ApplicationWebOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.putImplicitGrant">put_implicit_grant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetHomepageUrl">reset_homepage_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetImplicitGrant">reset_implicit_grant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetLogoutUrl">reset_logout_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetRedirectUris">reset_redirect_uris</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_implicit_grant` <a name="put_implicit_grant" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.putImplicitGrant"></a>

```python
def put_implicit_grant(
  access_token_issuance_enabled: typing.Union[bool, IResolvable] = None,
  id_token_issuance_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `access_token_issuance_enabled`<sup>Optional</sup> <a name="access_token_issuance_enabled" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.putImplicitGrant.parameter.accessTokenIssuanceEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this web application can request an access token using OAuth 2.0 implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#access_token_issuance_enabled Application#access_token_issuance_enabled}

---

###### `id_token_issuance_enabled`<sup>Optional</sup> <a name="id_token_issuance_enabled" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.putImplicitGrant.parameter.idTokenIssuanceEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this web application can request an ID token using OAuth 2.0 implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/application#id_token_issuance_enabled Application#id_token_issuance_enabled}

---

##### `reset_homepage_url` <a name="reset_homepage_url" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetHomepageUrl"></a>

```python
def reset_homepage_url() -> None
```

##### `reset_implicit_grant` <a name="reset_implicit_grant" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetImplicitGrant"></a>

```python
def reset_implicit_grant() -> None
```

##### `reset_logout_url` <a name="reset_logout_url" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetLogoutUrl"></a>

```python
def reset_logout_url() -> None
```

##### `reset_redirect_uris` <a name="reset_redirect_uris" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetRedirectUris"></a>

```python
def reset_redirect_uris() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.implicitGrant">implicit_grant</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference">ApplicationWebImplicitGrantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.homepageUrlInput">homepage_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.implicitGrantInput">implicit_grant_input</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.logoutUrlInput">logout_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.redirectUrisInput">redirect_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.homepageUrl">homepage_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.logoutUrl">logout_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.redirectUris">redirect_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `implicit_grant`<sup>Required</sup> <a name="implicit_grant" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.implicitGrant"></a>

```python
implicit_grant: ApplicationWebImplicitGrantOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference">ApplicationWebImplicitGrantOutputReference</a>

---

##### `homepage_url_input`<sup>Optional</sup> <a name="homepage_url_input" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.homepageUrlInput"></a>

```python
homepage_url_input: str
```

- *Type:* str

---

##### `implicit_grant_input`<sup>Optional</sup> <a name="implicit_grant_input" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.implicitGrantInput"></a>

```python
implicit_grant_input: ApplicationWebImplicitGrant
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a>

---

##### `logout_url_input`<sup>Optional</sup> <a name="logout_url_input" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.logoutUrlInput"></a>

```python
logout_url_input: str
```

- *Type:* str

---

##### `redirect_uris_input`<sup>Optional</sup> <a name="redirect_uris_input" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.redirectUrisInput"></a>

```python
redirect_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `homepage_url`<sup>Required</sup> <a name="homepage_url" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.homepageUrl"></a>

```python
homepage_url: str
```

- *Type:* str

---

##### `logout_url`<sup>Required</sup> <a name="logout_url" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.logoutUrl"></a>

```python
logout_url: str
```

- *Type:* str

---

##### `redirect_uris`<sup>Required</sup> <a name="redirect_uris" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.redirectUris"></a>

```python
redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.internalValue"></a>

```python
internal_value: ApplicationWeb
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a>

---



