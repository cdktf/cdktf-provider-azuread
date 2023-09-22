# `azuread_application`

Refer to the Terraform Registory for docs: [`azuread_application`](https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application).

# `application` Submodule <a name="`application` Submodule" id="@cdktf/provider-azuread.application"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Application <a name="Application" id="@cdktf/provider-azuread.application.Application"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application azuread_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.Application.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.Application;

Application.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .displayName(java.lang.String)
//  .api(ApplicationApi)
//  .appRole(IResolvable)
//  .appRole(java.util.List<ApplicationAppRole>)
//  .description(java.lang.String)
//  .deviceOnlyAuthEnabled(java.lang.Boolean)
//  .deviceOnlyAuthEnabled(IResolvable)
//  .fallbackPublicClientEnabled(java.lang.Boolean)
//  .fallbackPublicClientEnabled(IResolvable)
//  .featureTags(IResolvable)
//  .featureTags(java.util.List<ApplicationFeatureTags>)
//  .groupMembershipClaims(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .identifierUris(java.util.List<java.lang.String>)
//  .logoImage(java.lang.String)
//  .marketingUrl(java.lang.String)
//  .notes(java.lang.String)
//  .oauth2PostResponseRequired(java.lang.Boolean)
//  .oauth2PostResponseRequired(IResolvable)
//  .optionalClaims(ApplicationOptionalClaims)
//  .owners(java.util.List<java.lang.String>)
//  .preventDuplicateNames(java.lang.Boolean)
//  .preventDuplicateNames(IResolvable)
//  .privacyStatementUrl(java.lang.String)
//  .publicClient(ApplicationPublicClient)
//  .requiredResourceAccess(IResolvable)
//  .requiredResourceAccess(java.util.List<ApplicationRequiredResourceAccess>)
//  .serviceManagementReference(java.lang.String)
//  .signInAudience(java.lang.String)
//  .singlePageApplication(ApplicationSinglePageApplication)
//  .supportUrl(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .templateId(java.lang.String)
//  .termsOfServiceUrl(java.lang.String)
//  .timeouts(ApplicationTimeouts)
//  .web(ApplicationWeb)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the application. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.api">api</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a></code> | api block. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.appRole">appRole</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>></code> | app_role block. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the application as shown to end users. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.deviceOnlyAuthEnabled">deviceOnlyAuthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether this application supports device authentication without a user. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.fallbackPublicClientEnabled">fallbackPublicClientEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether the application is a public client. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.featureTags">featureTags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>></code> | feature_tags block. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.groupMembershipClaims">groupMembershipClaims</a></code> | <code>java.util.List<java.lang.String></code> | Configures the `groups` claim issued in a user or OAuth 2.0 access token that the app expects. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#id Application#id}. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.identifierUris">identifierUris</a></code> | <code>java.util.List<java.lang.String></code> | The user-defined URI(s) that uniquely identify an application within its Azure AD tenant, or within a verified custom domain if the application is multi-tenant. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.logoImage">logoImage</a></code> | <code>java.lang.String</code> | Base64 encoded logo image in gif, png or jpeg format. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.marketingUrl">marketingUrl</a></code> | <code>java.lang.String</code> | URL of the application's marketing page. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.notes">notes</a></code> | <code>java.lang.String</code> | User-specified notes relevant for the management of the application. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.oauth2PostResponseRequired">oauth2PostResponseRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether, as part of OAuth 2.0 token requests, Azure AD allows POST requests, as opposed to GET requests. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.optionalClaims">optionalClaims</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a></code> | optional_claims block. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.owners">owners</a></code> | <code>java.util.List<java.lang.String></code> | A list of object IDs of principals that will be granted ownership of the application. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.preventDuplicateNames">preventDuplicateNames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, will return an error if an existing application is found with the same name. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.privacyStatementUrl">privacyStatementUrl</a></code> | <code>java.lang.String</code> | URL of the application's privacy statement. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.publicClient">publicClient</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a></code> | public_client block. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.requiredResourceAccess">requiredResourceAccess</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>></code> | required_resource_access block. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.serviceManagementReference">serviceManagementReference</a></code> | <code>java.lang.String</code> | References application or service contact information from a Service or Asset Management database. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.signInAudience">signInAudience</a></code> | <code>java.lang.String</code> | The Microsoft account types that are supported for the current application. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.singlePageApplication">singlePageApplication</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a></code> | single_page_application block. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | URL of the application's support page. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A set of tags to apply to the application. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.templateId">templateId</a></code> | <code>java.lang.String</code> | Unique ID of the application template from which this application is created. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.termsOfServiceUrl">termsOfServiceUrl</a></code> | <code>java.lang.String</code> | URL of the application's terms of service statement. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.web">web</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a></code> | web block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#display_name Application#display_name}

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.api"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a>

api block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#api Application#api}

---

##### `appRole`<sup>Optional</sup> <a name="appRole" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.appRole"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>>

app_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#app_role Application#app_role}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the application as shown to end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#description Application#description}

---

##### `deviceOnlyAuthEnabled`<sup>Optional</sup> <a name="deviceOnlyAuthEnabled" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.deviceOnlyAuthEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether this application supports device authentication without a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#device_only_auth_enabled Application#device_only_auth_enabled}

---

##### `fallbackPublicClientEnabled`<sup>Optional</sup> <a name="fallbackPublicClientEnabled" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.fallbackPublicClientEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether the application is a public client.

Appropriate for apps using token grant flows that don't use a redirect URI

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#fallback_public_client_enabled Application#fallback_public_client_enabled}

---

##### `featureTags`<sup>Optional</sup> <a name="featureTags" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.featureTags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>>

feature_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#feature_tags Application#feature_tags}

---

##### `groupMembershipClaims`<sup>Optional</sup> <a name="groupMembershipClaims" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.groupMembershipClaims"></a>

- *Type:* java.util.List<java.lang.String>

Configures the `groups` claim issued in a user or OAuth 2.0 access token that the app expects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#group_membership_claims Application#group_membership_claims}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#id Application#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifierUris`<sup>Optional</sup> <a name="identifierUris" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.identifierUris"></a>

- *Type:* java.util.List<java.lang.String>

The user-defined URI(s) that uniquely identify an application within its Azure AD tenant, or within a verified custom domain if the application is multi-tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#identifier_uris Application#identifier_uris}

---

##### `logoImage`<sup>Optional</sup> <a name="logoImage" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.logoImage"></a>

- *Type:* java.lang.String

Base64 encoded logo image in gif, png or jpeg format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#logo_image Application#logo_image}

---

##### `marketingUrl`<sup>Optional</sup> <a name="marketingUrl" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.marketingUrl"></a>

- *Type:* java.lang.String

URL of the application's marketing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#marketing_url Application#marketing_url}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.notes"></a>

- *Type:* java.lang.String

User-specified notes relevant for the management of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#notes Application#notes}

---

##### `oauth2PostResponseRequired`<sup>Optional</sup> <a name="oauth2PostResponseRequired" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.oauth2PostResponseRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether, as part of OAuth 2.0 token requests, Azure AD allows POST requests, as opposed to GET requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#oauth2_post_response_required Application#oauth2_post_response_required}

---

##### `optionalClaims`<sup>Optional</sup> <a name="optionalClaims" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.optionalClaims"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a>

optional_claims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#optional_claims Application#optional_claims}

---

##### `owners`<sup>Optional</sup> <a name="owners" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.owners"></a>

- *Type:* java.util.List<java.lang.String>

A list of object IDs of principals that will be granted ownership of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#owners Application#owners}

---

##### `preventDuplicateNames`<sup>Optional</sup> <a name="preventDuplicateNames" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.preventDuplicateNames"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, will return an error if an existing application is found with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#prevent_duplicate_names Application#prevent_duplicate_names}

---

##### `privacyStatementUrl`<sup>Optional</sup> <a name="privacyStatementUrl" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.privacyStatementUrl"></a>

- *Type:* java.lang.String

URL of the application's privacy statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#privacy_statement_url Application#privacy_statement_url}

---

##### `publicClient`<sup>Optional</sup> <a name="publicClient" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.publicClient"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a>

public_client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#public_client Application#public_client}

---

##### `requiredResourceAccess`<sup>Optional</sup> <a name="requiredResourceAccess" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.requiredResourceAccess"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>>

required_resource_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#required_resource_access Application#required_resource_access}

---

##### `serviceManagementReference`<sup>Optional</sup> <a name="serviceManagementReference" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.serviceManagementReference"></a>

- *Type:* java.lang.String

References application or service contact information from a Service or Asset Management database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#service_management_reference Application#service_management_reference}

---

##### `signInAudience`<sup>Optional</sup> <a name="signInAudience" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.signInAudience"></a>

- *Type:* java.lang.String

The Microsoft account types that are supported for the current application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#sign_in_audience Application#sign_in_audience}

---

##### `singlePageApplication`<sup>Optional</sup> <a name="singlePageApplication" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.singlePageApplication"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a>

single_page_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#single_page_application Application#single_page_application}

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.supportUrl"></a>

- *Type:* java.lang.String

URL of the application's support page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#support_url Application#support_url}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

A set of tags to apply to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#tags Application#tags}

---

##### `templateId`<sup>Optional</sup> <a name="templateId" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.templateId"></a>

- *Type:* java.lang.String

Unique ID of the application template from which this application is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#template_id Application#template_id}

---

##### `termsOfServiceUrl`<sup>Optional</sup> <a name="termsOfServiceUrl" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.termsOfServiceUrl"></a>

- *Type:* java.lang.String

URL of the application's terms of service statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#terms_of_service_url Application#terms_of_service_url}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#timeouts Application#timeouts}

---

##### `web`<sup>Optional</sup> <a name="web" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.web"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a>

web block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#web Application#web}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.application.Application.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.application.Application.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.application.Application.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putApi">putApi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putAppRole">putAppRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putFeatureTags">putFeatureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putOptionalClaims">putOptionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putPublicClient">putPublicClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putRequiredResourceAccess">putRequiredResourceAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putSinglePageApplication">putSinglePageApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putWeb">putWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetApi">resetApi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetAppRole">resetAppRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetDeviceOnlyAuthEnabled">resetDeviceOnlyAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetFallbackPublicClientEnabled">resetFallbackPublicClientEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetFeatureTags">resetFeatureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetGroupMembershipClaims">resetGroupMembershipClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetIdentifierUris">resetIdentifierUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetLogoImage">resetLogoImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetMarketingUrl">resetMarketingUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetOauth2PostResponseRequired">resetOauth2PostResponseRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetOptionalClaims">resetOptionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetOwners">resetOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetPreventDuplicateNames">resetPreventDuplicateNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetPrivacyStatementUrl">resetPrivacyStatementUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetPublicClient">resetPublicClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetRequiredResourceAccess">resetRequiredResourceAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetServiceManagementReference">resetServiceManagementReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetSignInAudience">resetSignInAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetSinglePageApplication">resetSinglePageApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetSupportUrl">resetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetTemplateId">resetTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetTermsOfServiceUrl">resetTermsOfServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetWeb">resetWeb</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.Application.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.application.Application.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.application.Application.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.application.Application.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.application.Application.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.application.Application.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.application.Application.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.application.Application.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.Application.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.Application.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.Application.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.Application.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.Application.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.Application.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.Application.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.Application.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.Application.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.Application.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putApi` <a name="putApi" id="@cdktf/provider-azuread.application.Application.putApi"></a>

```java
public void putApi(ApplicationApi value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putApi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a>

---

##### `putAppRole` <a name="putAppRole" id="@cdktf/provider-azuread.application.Application.putAppRole"></a>

```java
public void putAppRole(IResolvable OR java.util.List<ApplicationAppRole> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putAppRole.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>>

---

##### `putFeatureTags` <a name="putFeatureTags" id="@cdktf/provider-azuread.application.Application.putFeatureTags"></a>

```java
public void putFeatureTags(IResolvable OR java.util.List<ApplicationFeatureTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putFeatureTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>>

---

##### `putOptionalClaims` <a name="putOptionalClaims" id="@cdktf/provider-azuread.application.Application.putOptionalClaims"></a>

```java
public void putOptionalClaims(ApplicationOptionalClaims value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putOptionalClaims.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a>

---

##### `putPublicClient` <a name="putPublicClient" id="@cdktf/provider-azuread.application.Application.putPublicClient"></a>

```java
public void putPublicClient(ApplicationPublicClient value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putPublicClient.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a>

---

##### `putRequiredResourceAccess` <a name="putRequiredResourceAccess" id="@cdktf/provider-azuread.application.Application.putRequiredResourceAccess"></a>

```java
public void putRequiredResourceAccess(IResolvable OR java.util.List<ApplicationRequiredResourceAccess> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putRequiredResourceAccess.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>>

---

##### `putSinglePageApplication` <a name="putSinglePageApplication" id="@cdktf/provider-azuread.application.Application.putSinglePageApplication"></a>

```java
public void putSinglePageApplication(ApplicationSinglePageApplication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putSinglePageApplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.application.Application.putTimeouts"></a>

```java
public void putTimeouts(ApplicationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a>

---

##### `putWeb` <a name="putWeb" id="@cdktf/provider-azuread.application.Application.putWeb"></a>

```java
public void putWeb(ApplicationWeb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putWeb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a>

---

##### `resetApi` <a name="resetApi" id="@cdktf/provider-azuread.application.Application.resetApi"></a>

```java
public void resetApi()
```

##### `resetAppRole` <a name="resetAppRole" id="@cdktf/provider-azuread.application.Application.resetAppRole"></a>

```java
public void resetAppRole()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azuread.application.Application.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDeviceOnlyAuthEnabled` <a name="resetDeviceOnlyAuthEnabled" id="@cdktf/provider-azuread.application.Application.resetDeviceOnlyAuthEnabled"></a>

```java
public void resetDeviceOnlyAuthEnabled()
```

##### `resetFallbackPublicClientEnabled` <a name="resetFallbackPublicClientEnabled" id="@cdktf/provider-azuread.application.Application.resetFallbackPublicClientEnabled"></a>

```java
public void resetFallbackPublicClientEnabled()
```

##### `resetFeatureTags` <a name="resetFeatureTags" id="@cdktf/provider-azuread.application.Application.resetFeatureTags"></a>

```java
public void resetFeatureTags()
```

##### `resetGroupMembershipClaims` <a name="resetGroupMembershipClaims" id="@cdktf/provider-azuread.application.Application.resetGroupMembershipClaims"></a>

```java
public void resetGroupMembershipClaims()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.application.Application.resetId"></a>

```java
public void resetId()
```

##### `resetIdentifierUris` <a name="resetIdentifierUris" id="@cdktf/provider-azuread.application.Application.resetIdentifierUris"></a>

```java
public void resetIdentifierUris()
```

##### `resetLogoImage` <a name="resetLogoImage" id="@cdktf/provider-azuread.application.Application.resetLogoImage"></a>

```java
public void resetLogoImage()
```

##### `resetMarketingUrl` <a name="resetMarketingUrl" id="@cdktf/provider-azuread.application.Application.resetMarketingUrl"></a>

```java
public void resetMarketingUrl()
```

##### `resetNotes` <a name="resetNotes" id="@cdktf/provider-azuread.application.Application.resetNotes"></a>

```java
public void resetNotes()
```

##### `resetOauth2PostResponseRequired` <a name="resetOauth2PostResponseRequired" id="@cdktf/provider-azuread.application.Application.resetOauth2PostResponseRequired"></a>

```java
public void resetOauth2PostResponseRequired()
```

##### `resetOptionalClaims` <a name="resetOptionalClaims" id="@cdktf/provider-azuread.application.Application.resetOptionalClaims"></a>

```java
public void resetOptionalClaims()
```

##### `resetOwners` <a name="resetOwners" id="@cdktf/provider-azuread.application.Application.resetOwners"></a>

```java
public void resetOwners()
```

##### `resetPreventDuplicateNames` <a name="resetPreventDuplicateNames" id="@cdktf/provider-azuread.application.Application.resetPreventDuplicateNames"></a>

```java
public void resetPreventDuplicateNames()
```

##### `resetPrivacyStatementUrl` <a name="resetPrivacyStatementUrl" id="@cdktf/provider-azuread.application.Application.resetPrivacyStatementUrl"></a>

```java
public void resetPrivacyStatementUrl()
```

##### `resetPublicClient` <a name="resetPublicClient" id="@cdktf/provider-azuread.application.Application.resetPublicClient"></a>

```java
public void resetPublicClient()
```

##### `resetRequiredResourceAccess` <a name="resetRequiredResourceAccess" id="@cdktf/provider-azuread.application.Application.resetRequiredResourceAccess"></a>

```java
public void resetRequiredResourceAccess()
```

##### `resetServiceManagementReference` <a name="resetServiceManagementReference" id="@cdktf/provider-azuread.application.Application.resetServiceManagementReference"></a>

```java
public void resetServiceManagementReference()
```

##### `resetSignInAudience` <a name="resetSignInAudience" id="@cdktf/provider-azuread.application.Application.resetSignInAudience"></a>

```java
public void resetSignInAudience()
```

##### `resetSinglePageApplication` <a name="resetSinglePageApplication" id="@cdktf/provider-azuread.application.Application.resetSinglePageApplication"></a>

```java
public void resetSinglePageApplication()
```

##### `resetSupportUrl` <a name="resetSupportUrl" id="@cdktf/provider-azuread.application.Application.resetSupportUrl"></a>

```java
public void resetSupportUrl()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azuread.application.Application.resetTags"></a>

```java
public void resetTags()
```

##### `resetTemplateId` <a name="resetTemplateId" id="@cdktf/provider-azuread.application.Application.resetTemplateId"></a>

```java
public void resetTemplateId()
```

##### `resetTermsOfServiceUrl` <a name="resetTermsOfServiceUrl" id="@cdktf/provider-azuread.application.Application.resetTermsOfServiceUrl"></a>

```java
public void resetTermsOfServiceUrl()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.application.Application.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWeb` <a name="resetWeb" id="@cdktf/provider-azuread.application.Application.resetWeb"></a>

```java
public void resetWeb()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.application.Application.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.application.Application.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.Application;

Application.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.application.Application.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.Application;

Application.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.application.Application.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.application.Application.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.Application;

Application.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.application.Application.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.api">api</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference">ApplicationApiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.appRole">appRole</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList">ApplicationAppRoleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.appRoleIds">appRoleIds</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.disabledByMicrosoft">disabledByMicrosoft</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.featureTags">featureTags</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList">ApplicationFeatureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.logoUrl">logoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.oauth2PermissionScopeIds">oauth2PermissionScopeIds</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.optionalClaims">optionalClaims</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference">ApplicationOptionalClaimsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.publicClient">publicClient</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference">ApplicationPublicClientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.publisherDomain">publisherDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.requiredResourceAccess">requiredResourceAccess</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList">ApplicationRequiredResourceAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.singlePageApplication">singlePageApplication</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference">ApplicationSinglePageApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference">ApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.web">web</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference">ApplicationWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.apiInput">apiInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.appRoleInput">appRoleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.deviceOnlyAuthEnabledInput">deviceOnlyAuthEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.fallbackPublicClientEnabledInput">fallbackPublicClientEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.featureTagsInput">featureTagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.groupMembershipClaimsInput">groupMembershipClaimsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.identifierUrisInput">identifierUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.logoImageInput">logoImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.marketingUrlInput">marketingUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.notesInput">notesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.oauth2PostResponseRequiredInput">oauth2PostResponseRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.optionalClaimsInput">optionalClaimsInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.ownersInput">ownersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.preventDuplicateNamesInput">preventDuplicateNamesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.privacyStatementUrlInput">privacyStatementUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.publicClientInput">publicClientInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.requiredResourceAccessInput">requiredResourceAccessInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.serviceManagementReferenceInput">serviceManagementReferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.signInAudienceInput">signInAudienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.singlePageApplicationInput">singlePageApplicationInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.supportUrlInput">supportUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.templateIdInput">templateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.termsOfServiceUrlInput">termsOfServiceUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.webInput">webInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.deviceOnlyAuthEnabled">deviceOnlyAuthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.fallbackPublicClientEnabled">fallbackPublicClientEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.groupMembershipClaims">groupMembershipClaims</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.identifierUris">identifierUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.logoImage">logoImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.marketingUrl">marketingUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.notes">notes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.oauth2PostResponseRequired">oauth2PostResponseRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.owners">owners</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.preventDuplicateNames">preventDuplicateNames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.privacyStatementUrl">privacyStatementUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.serviceManagementReference">serviceManagementReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.signInAudience">signInAudience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.templateId">templateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.termsOfServiceUrl">termsOfServiceUrl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.application.Application.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.application.Application.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.Application.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.application.Application.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.application.Application.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.application.Application.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.application.Application.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.application.Application.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.application.Application.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.application.Application.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.application.Application.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.application.Application.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.application.Application.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.application.Application.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-azuread.application.Application.property.api"></a>

```java
public ApplicationApiOutputReference getApi();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference">ApplicationApiOutputReference</a>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azuread.application.Application.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `appRole`<sup>Required</sup> <a name="appRole" id="@cdktf/provider-azuread.application.Application.property.appRole"></a>

```java
public ApplicationAppRoleList getAppRole();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList">ApplicationAppRoleList</a>

---

##### `appRoleIds`<sup>Required</sup> <a name="appRoleIds" id="@cdktf/provider-azuread.application.Application.property.appRoleIds"></a>

```java
public StringMap getAppRoleIds();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `disabledByMicrosoft`<sup>Required</sup> <a name="disabledByMicrosoft" id="@cdktf/provider-azuread.application.Application.property.disabledByMicrosoft"></a>

```java
public java.lang.String getDisabledByMicrosoft();
```

- *Type:* java.lang.String

---

##### `featureTags`<sup>Required</sup> <a name="featureTags" id="@cdktf/provider-azuread.application.Application.property.featureTags"></a>

```java
public ApplicationFeatureTagsList getFeatureTags();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList">ApplicationFeatureTagsList</a>

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-azuread.application.Application.property.logoUrl"></a>

```java
public java.lang.String getLogoUrl();
```

- *Type:* java.lang.String

---

##### `oauth2PermissionScopeIds`<sup>Required</sup> <a name="oauth2PermissionScopeIds" id="@cdktf/provider-azuread.application.Application.property.oauth2PermissionScopeIds"></a>

```java
public StringMap getOauth2PermissionScopeIds();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.application.Application.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `optionalClaims`<sup>Required</sup> <a name="optionalClaims" id="@cdktf/provider-azuread.application.Application.property.optionalClaims"></a>

```java
public ApplicationOptionalClaimsOutputReference getOptionalClaims();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference">ApplicationOptionalClaimsOutputReference</a>

---

##### `publicClient`<sup>Required</sup> <a name="publicClient" id="@cdktf/provider-azuread.application.Application.property.publicClient"></a>

```java
public ApplicationPublicClientOutputReference getPublicClient();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference">ApplicationPublicClientOutputReference</a>

---

##### `publisherDomain`<sup>Required</sup> <a name="publisherDomain" id="@cdktf/provider-azuread.application.Application.property.publisherDomain"></a>

```java
public java.lang.String getPublisherDomain();
```

- *Type:* java.lang.String

---

##### `requiredResourceAccess`<sup>Required</sup> <a name="requiredResourceAccess" id="@cdktf/provider-azuread.application.Application.property.requiredResourceAccess"></a>

```java
public ApplicationRequiredResourceAccessList getRequiredResourceAccess();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList">ApplicationRequiredResourceAccessList</a>

---

##### `singlePageApplication`<sup>Required</sup> <a name="singlePageApplication" id="@cdktf/provider-azuread.application.Application.property.singlePageApplication"></a>

```java
public ApplicationSinglePageApplicationOutputReference getSinglePageApplication();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference">ApplicationSinglePageApplicationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.application.Application.property.timeouts"></a>

```java
public ApplicationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference">ApplicationTimeoutsOutputReference</a>

---

##### `web`<sup>Required</sup> <a name="web" id="@cdktf/provider-azuread.application.Application.property.web"></a>

```java
public ApplicationWebOutputReference getWeb();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference">ApplicationWebOutputReference</a>

---

##### `apiInput`<sup>Optional</sup> <a name="apiInput" id="@cdktf/provider-azuread.application.Application.property.apiInput"></a>

```java
public ApplicationApi getApiInput();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a>

---

##### `appRoleInput`<sup>Optional</sup> <a name="appRoleInput" id="@cdktf/provider-azuread.application.Application.property.appRoleInput"></a>

```java
public java.lang.Object getAppRoleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azuread.application.Application.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `deviceOnlyAuthEnabledInput`<sup>Optional</sup> <a name="deviceOnlyAuthEnabledInput" id="@cdktf/provider-azuread.application.Application.property.deviceOnlyAuthEnabledInput"></a>

```java
public java.lang.Object getDeviceOnlyAuthEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azuread.application.Application.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `fallbackPublicClientEnabledInput`<sup>Optional</sup> <a name="fallbackPublicClientEnabledInput" id="@cdktf/provider-azuread.application.Application.property.fallbackPublicClientEnabledInput"></a>

```java
public java.lang.Object getFallbackPublicClientEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `featureTagsInput`<sup>Optional</sup> <a name="featureTagsInput" id="@cdktf/provider-azuread.application.Application.property.featureTagsInput"></a>

```java
public java.lang.Object getFeatureTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>>

---

##### `groupMembershipClaimsInput`<sup>Optional</sup> <a name="groupMembershipClaimsInput" id="@cdktf/provider-azuread.application.Application.property.groupMembershipClaimsInput"></a>

```java
public java.util.List<java.lang.String> getGroupMembershipClaimsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identifierUrisInput`<sup>Optional</sup> <a name="identifierUrisInput" id="@cdktf/provider-azuread.application.Application.property.identifierUrisInput"></a>

```java
public java.util.List<java.lang.String> getIdentifierUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.application.Application.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logoImageInput`<sup>Optional</sup> <a name="logoImageInput" id="@cdktf/provider-azuread.application.Application.property.logoImageInput"></a>

```java
public java.lang.String getLogoImageInput();
```

- *Type:* java.lang.String

---

##### `marketingUrlInput`<sup>Optional</sup> <a name="marketingUrlInput" id="@cdktf/provider-azuread.application.Application.property.marketingUrlInput"></a>

```java
public java.lang.String getMarketingUrlInput();
```

- *Type:* java.lang.String

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktf/provider-azuread.application.Application.property.notesInput"></a>

```java
public java.lang.String getNotesInput();
```

- *Type:* java.lang.String

---

##### `oauth2PostResponseRequiredInput`<sup>Optional</sup> <a name="oauth2PostResponseRequiredInput" id="@cdktf/provider-azuread.application.Application.property.oauth2PostResponseRequiredInput"></a>

```java
public java.lang.Object getOauth2PostResponseRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `optionalClaimsInput`<sup>Optional</sup> <a name="optionalClaimsInput" id="@cdktf/provider-azuread.application.Application.property.optionalClaimsInput"></a>

```java
public ApplicationOptionalClaims getOptionalClaimsInput();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a>

---

##### `ownersInput`<sup>Optional</sup> <a name="ownersInput" id="@cdktf/provider-azuread.application.Application.property.ownersInput"></a>

```java
public java.util.List<java.lang.String> getOwnersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preventDuplicateNamesInput`<sup>Optional</sup> <a name="preventDuplicateNamesInput" id="@cdktf/provider-azuread.application.Application.property.preventDuplicateNamesInput"></a>

```java
public java.lang.Object getPreventDuplicateNamesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `privacyStatementUrlInput`<sup>Optional</sup> <a name="privacyStatementUrlInput" id="@cdktf/provider-azuread.application.Application.property.privacyStatementUrlInput"></a>

```java
public java.lang.String getPrivacyStatementUrlInput();
```

- *Type:* java.lang.String

---

##### `publicClientInput`<sup>Optional</sup> <a name="publicClientInput" id="@cdktf/provider-azuread.application.Application.property.publicClientInput"></a>

```java
public ApplicationPublicClient getPublicClientInput();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a>

---

##### `requiredResourceAccessInput`<sup>Optional</sup> <a name="requiredResourceAccessInput" id="@cdktf/provider-azuread.application.Application.property.requiredResourceAccessInput"></a>

```java
public java.lang.Object getRequiredResourceAccessInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>>

---

##### `serviceManagementReferenceInput`<sup>Optional</sup> <a name="serviceManagementReferenceInput" id="@cdktf/provider-azuread.application.Application.property.serviceManagementReferenceInput"></a>

```java
public java.lang.String getServiceManagementReferenceInput();
```

- *Type:* java.lang.String

---

##### `signInAudienceInput`<sup>Optional</sup> <a name="signInAudienceInput" id="@cdktf/provider-azuread.application.Application.property.signInAudienceInput"></a>

```java
public java.lang.String getSignInAudienceInput();
```

- *Type:* java.lang.String

---

##### `singlePageApplicationInput`<sup>Optional</sup> <a name="singlePageApplicationInput" id="@cdktf/provider-azuread.application.Application.property.singlePageApplicationInput"></a>

```java
public ApplicationSinglePageApplication getSinglePageApplicationInput();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a>

---

##### `supportUrlInput`<sup>Optional</sup> <a name="supportUrlInput" id="@cdktf/provider-azuread.application.Application.property.supportUrlInput"></a>

```java
public java.lang.String getSupportUrlInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azuread.application.Application.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `templateIdInput`<sup>Optional</sup> <a name="templateIdInput" id="@cdktf/provider-azuread.application.Application.property.templateIdInput"></a>

```java
public java.lang.String getTemplateIdInput();
```

- *Type:* java.lang.String

---

##### `termsOfServiceUrlInput`<sup>Optional</sup> <a name="termsOfServiceUrlInput" id="@cdktf/provider-azuread.application.Application.property.termsOfServiceUrlInput"></a>

```java
public java.lang.String getTermsOfServiceUrlInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.application.Application.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a>

---

##### `webInput`<sup>Optional</sup> <a name="webInput" id="@cdktf/provider-azuread.application.Application.property.webInput"></a>

```java
public ApplicationWeb getWebInput();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.application.Application.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `deviceOnlyAuthEnabled`<sup>Required</sup> <a name="deviceOnlyAuthEnabled" id="@cdktf/provider-azuread.application.Application.property.deviceOnlyAuthEnabled"></a>

```java
public java.lang.Object getDeviceOnlyAuthEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.application.Application.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `fallbackPublicClientEnabled`<sup>Required</sup> <a name="fallbackPublicClientEnabled" id="@cdktf/provider-azuread.application.Application.property.fallbackPublicClientEnabled"></a>

```java
public java.lang.Object getFallbackPublicClientEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupMembershipClaims`<sup>Required</sup> <a name="groupMembershipClaims" id="@cdktf/provider-azuread.application.Application.property.groupMembershipClaims"></a>

```java
public java.util.List<java.lang.String> getGroupMembershipClaims();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.Application.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identifierUris`<sup>Required</sup> <a name="identifierUris" id="@cdktf/provider-azuread.application.Application.property.identifierUris"></a>

```java
public java.util.List<java.lang.String> getIdentifierUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logoImage`<sup>Required</sup> <a name="logoImage" id="@cdktf/provider-azuread.application.Application.property.logoImage"></a>

```java
public java.lang.String getLogoImage();
```

- *Type:* java.lang.String

---

##### `marketingUrl`<sup>Required</sup> <a name="marketingUrl" id="@cdktf/provider-azuread.application.Application.property.marketingUrl"></a>

```java
public java.lang.String getMarketingUrl();
```

- *Type:* java.lang.String

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-azuread.application.Application.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

---

##### `oauth2PostResponseRequired`<sup>Required</sup> <a name="oauth2PostResponseRequired" id="@cdktf/provider-azuread.application.Application.property.oauth2PostResponseRequired"></a>

```java
public java.lang.Object getOauth2PostResponseRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktf/provider-azuread.application.Application.property.owners"></a>

```java
public java.util.List<java.lang.String> getOwners();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preventDuplicateNames`<sup>Required</sup> <a name="preventDuplicateNames" id="@cdktf/provider-azuread.application.Application.property.preventDuplicateNames"></a>

```java
public java.lang.Object getPreventDuplicateNames();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `privacyStatementUrl`<sup>Required</sup> <a name="privacyStatementUrl" id="@cdktf/provider-azuread.application.Application.property.privacyStatementUrl"></a>

```java
public java.lang.String getPrivacyStatementUrl();
```

- *Type:* java.lang.String

---

##### `serviceManagementReference`<sup>Required</sup> <a name="serviceManagementReference" id="@cdktf/provider-azuread.application.Application.property.serviceManagementReference"></a>

```java
public java.lang.String getServiceManagementReference();
```

- *Type:* java.lang.String

---

##### `signInAudience`<sup>Required</sup> <a name="signInAudience" id="@cdktf/provider-azuread.application.Application.property.signInAudience"></a>

```java
public java.lang.String getSignInAudience();
```

- *Type:* java.lang.String

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktf/provider-azuread.application.Application.property.supportUrl"></a>

```java
public java.lang.String getSupportUrl();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azuread.application.Application.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktf/provider-azuread.application.Application.property.templateId"></a>

```java
public java.lang.String getTemplateId();
```

- *Type:* java.lang.String

---

##### `termsOfServiceUrl`<sup>Required</sup> <a name="termsOfServiceUrl" id="@cdktf/provider-azuread.application.Application.property.termsOfServiceUrl"></a>

```java
public java.lang.String getTermsOfServiceUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.application.Application.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationApi <a name="ApplicationApi" id="@cdktf/provider-azuread.application.ApplicationApi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationApi.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationApi;

ApplicationApi.builder()
//  .knownClientApplications(java.util.List<java.lang.String>)
//  .mappedClaimsEnabled(java.lang.Boolean)
//  .mappedClaimsEnabled(IResolvable)
//  .oauth2PermissionScope(IResolvable)
//  .oauth2PermissionScope(java.util.List<ApplicationApiOauth2PermissionScope>)
//  .requestedAccessTokenVersion(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApi.property.knownClientApplications">knownClientApplications</a></code> | <code>java.util.List<java.lang.String></code> | Used for bundling consent if you have a solution that contains two parts: a client app and a custom web API app. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApi.property.mappedClaimsEnabled">mappedClaimsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allows an application to use claims mapping without specifying a custom signing key. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApi.property.oauth2PermissionScope">oauth2PermissionScope</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>></code> | oauth2_permission_scope block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApi.property.requestedAccessTokenVersion">requestedAccessTokenVersion</a></code> | <code>java.lang.Number</code> | The access token version expected by this resource. |

---

##### `knownClientApplications`<sup>Optional</sup> <a name="knownClientApplications" id="@cdktf/provider-azuread.application.ApplicationApi.property.knownClientApplications"></a>

```java
public java.util.List<java.lang.String> getKnownClientApplications();
```

- *Type:* java.util.List<java.lang.String>

Used for bundling consent if you have a solution that contains two parts: a client app and a custom web API app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#known_client_applications Application#known_client_applications}

---

##### `mappedClaimsEnabled`<sup>Optional</sup> <a name="mappedClaimsEnabled" id="@cdktf/provider-azuread.application.ApplicationApi.property.mappedClaimsEnabled"></a>

```java
public java.lang.Object getMappedClaimsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allows an application to use claims mapping without specifying a custom signing key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#mapped_claims_enabled Application#mapped_claims_enabled}

---

##### `oauth2PermissionScope`<sup>Optional</sup> <a name="oauth2PermissionScope" id="@cdktf/provider-azuread.application.ApplicationApi.property.oauth2PermissionScope"></a>

```java
public java.lang.Object getOauth2PermissionScope();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>>

oauth2_permission_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#oauth2_permission_scope Application#oauth2_permission_scope}

---

##### `requestedAccessTokenVersion`<sup>Optional</sup> <a name="requestedAccessTokenVersion" id="@cdktf/provider-azuread.application.ApplicationApi.property.requestedAccessTokenVersion"></a>

```java
public java.lang.Number getRequestedAccessTokenVersion();
```

- *Type:* java.lang.Number

The access token version expected by this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#requested_access_token_version Application#requested_access_token_version}

---

### ApplicationApiOauth2PermissionScope <a name="ApplicationApiOauth2PermissionScope" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationApiOauth2PermissionScope;

ApplicationApiOauth2PermissionScope.builder()
    .id(java.lang.String)
//  .adminConsentDescription(java.lang.String)
//  .adminConsentDisplayName(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .type(java.lang.String)
//  .userConsentDescription(java.lang.String)
//  .userConsentDisplayName(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.id">id</a></code> | <code>java.lang.String</code> | The unique identifier of the delegated permission. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.adminConsentDescription">adminConsentDescription</a></code> | <code>java.lang.String</code> | Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.adminConsentDisplayName">adminConsentDisplayName</a></code> | <code>java.lang.String</code> | Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines if the permission scope is enabled. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.type">type</a></code> | <code>java.lang.String</code> | Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.userConsentDescription">userConsentDescription</a></code> | <code>java.lang.String</code> | Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.userConsentDisplayName">userConsentDisplayName</a></code> | <code>java.lang.String</code> | Display name for the delegated permission that appears in the end user consent experience. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.value">value</a></code> | <code>java.lang.String</code> | The value that is used for the `scp` claim in OAuth 2.0 access tokens. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The unique identifier of the delegated permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#id Application#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `adminConsentDescription`<sup>Optional</sup> <a name="adminConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.adminConsentDescription"></a>

```java
public java.lang.String getAdminConsentDescription();
```

- *Type:* java.lang.String

Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#admin_consent_description Application#admin_consent_description}

---

##### `adminConsentDisplayName`<sup>Optional</sup> <a name="adminConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.adminConsentDisplayName"></a>

```java
public java.lang.String getAdminConsentDisplayName();
```

- *Type:* java.lang.String

Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#admin_consent_display_name Application#admin_consent_display_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines if the permission scope is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#enabled Application#enabled}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#type Application#type}

---

##### `userConsentDescription`<sup>Optional</sup> <a name="userConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.userConsentDescription"></a>

```java
public java.lang.String getUserConsentDescription();
```

- *Type:* java.lang.String

Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#user_consent_description Application#user_consent_description}

---

##### `userConsentDisplayName`<sup>Optional</sup> <a name="userConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.userConsentDisplayName"></a>

```java
public java.lang.String getUserConsentDisplayName();
```

- *Type:* java.lang.String

Display name for the delegated permission that appears in the end user consent experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#user_consent_display_name Application#user_consent_display_name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value that is used for the `scp` claim in OAuth 2.0 access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#value Application#value}

---

### ApplicationAppRole <a name="ApplicationAppRole" id="@cdktf/provider-azuread.application.ApplicationAppRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationAppRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationAppRole;

ApplicationAppRole.builder()
    .allowedMemberTypes(java.util.List<java.lang.String>)
    .description(java.lang.String)
    .displayName(java.lang.String)
    .id(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.allowedMemberTypes">allowedMemberTypes</a></code> | <code>java.util.List<java.lang.String></code> | Specifies whether this app role definition can be assigned to users and groups by setting to `User`, or to other applications (that are accessing this application in a standalone scenario) by setting to `Application`, or to both. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.description">description</a></code> | <code>java.lang.String</code> | Description of the app role that appears when the role is being assigned and, if the role functions as an application permissions, during the consent experiences. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name for the app role that appears during app role assignment and in consent experiences. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.id">id</a></code> | <code>java.lang.String</code> | The unique identifier of the app role. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines if the app role is enabled. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.value">value</a></code> | <code>java.lang.String</code> | The value that is used for the `roles` claim in ID tokens and OAuth 2.0 access tokens that are authenticating an assigned service or user principal. |

---

##### `allowedMemberTypes`<sup>Required</sup> <a name="allowedMemberTypes" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.allowedMemberTypes"></a>

```java
public java.util.List<java.lang.String> getAllowedMemberTypes();
```

- *Type:* java.util.List<java.lang.String>

Specifies whether this app role definition can be assigned to users and groups by setting to `User`, or to other applications (that are accessing this application in a standalone scenario) by setting to `Application`, or to both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#allowed_member_types Application#allowed_member_types}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the app role that appears when the role is being assigned and, if the role functions as an application permissions, during the consent experiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#description Application#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name for the app role that appears during app role assignment and in consent experiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#display_name Application#display_name}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The unique identifier of the app role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#id Application#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines if the app role is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#enabled Application#enabled}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value that is used for the `roles` claim in ID tokens and OAuth 2.0 access tokens that are authenticating an assigned service or user principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#value Application#value}

---

### ApplicationConfig <a name="ApplicationConfig" id="@cdktf/provider-azuread.application.ApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationConfig;

ApplicationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .displayName(java.lang.String)
//  .api(ApplicationApi)
//  .appRole(IResolvable)
//  .appRole(java.util.List<ApplicationAppRole>)
//  .description(java.lang.String)
//  .deviceOnlyAuthEnabled(java.lang.Boolean)
//  .deviceOnlyAuthEnabled(IResolvable)
//  .fallbackPublicClientEnabled(java.lang.Boolean)
//  .fallbackPublicClientEnabled(IResolvable)
//  .featureTags(IResolvable)
//  .featureTags(java.util.List<ApplicationFeatureTags>)
//  .groupMembershipClaims(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .identifierUris(java.util.List<java.lang.String>)
//  .logoImage(java.lang.String)
//  .marketingUrl(java.lang.String)
//  .notes(java.lang.String)
//  .oauth2PostResponseRequired(java.lang.Boolean)
//  .oauth2PostResponseRequired(IResolvable)
//  .optionalClaims(ApplicationOptionalClaims)
//  .owners(java.util.List<java.lang.String>)
//  .preventDuplicateNames(java.lang.Boolean)
//  .preventDuplicateNames(IResolvable)
//  .privacyStatementUrl(java.lang.String)
//  .publicClient(ApplicationPublicClient)
//  .requiredResourceAccess(IResolvable)
//  .requiredResourceAccess(java.util.List<ApplicationRequiredResourceAccess>)
//  .serviceManagementReference(java.lang.String)
//  .signInAudience(java.lang.String)
//  .singlePageApplication(ApplicationSinglePageApplication)
//  .supportUrl(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .templateId(java.lang.String)
//  .termsOfServiceUrl(java.lang.String)
//  .timeouts(ApplicationTimeouts)
//  .web(ApplicationWeb)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.api">api</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a></code> | api block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.appRole">appRole</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>></code> | app_role block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the application as shown to end users. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.deviceOnlyAuthEnabled">deviceOnlyAuthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether this application supports device authentication without a user. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.fallbackPublicClientEnabled">fallbackPublicClientEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether the application is a public client. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.featureTags">featureTags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>></code> | feature_tags block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.groupMembershipClaims">groupMembershipClaims</a></code> | <code>java.util.List<java.lang.String></code> | Configures the `groups` claim issued in a user or OAuth 2.0 access token that the app expects. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#id Application#id}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.identifierUris">identifierUris</a></code> | <code>java.util.List<java.lang.String></code> | The user-defined URI(s) that uniquely identify an application within its Azure AD tenant, or within a verified custom domain if the application is multi-tenant. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.logoImage">logoImage</a></code> | <code>java.lang.String</code> | Base64 encoded logo image in gif, png or jpeg format. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.marketingUrl">marketingUrl</a></code> | <code>java.lang.String</code> | URL of the application's marketing page. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.notes">notes</a></code> | <code>java.lang.String</code> | User-specified notes relevant for the management of the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.oauth2PostResponseRequired">oauth2PostResponseRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether, as part of OAuth 2.0 token requests, Azure AD allows POST requests, as opposed to GET requests. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.optionalClaims">optionalClaims</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a></code> | optional_claims block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.owners">owners</a></code> | <code>java.util.List<java.lang.String></code> | A list of object IDs of principals that will be granted ownership of the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.preventDuplicateNames">preventDuplicateNames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, will return an error if an existing application is found with the same name. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.privacyStatementUrl">privacyStatementUrl</a></code> | <code>java.lang.String</code> | URL of the application's privacy statement. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.publicClient">publicClient</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a></code> | public_client block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.requiredResourceAccess">requiredResourceAccess</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>></code> | required_resource_access block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.serviceManagementReference">serviceManagementReference</a></code> | <code>java.lang.String</code> | References application or service contact information from a Service or Asset Management database. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.signInAudience">signInAudience</a></code> | <code>java.lang.String</code> | The Microsoft account types that are supported for the current application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.singlePageApplication">singlePageApplication</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a></code> | single_page_application block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | URL of the application's support page. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A set of tags to apply to the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.templateId">templateId</a></code> | <code>java.lang.String</code> | Unique ID of the application template from which this application is created. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.termsOfServiceUrl">termsOfServiceUrl</a></code> | <code>java.lang.String</code> | URL of the application's terms of service statement. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.web">web</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a></code> | web block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.application.ApplicationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.application.ApplicationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.application.ApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.application.ApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.application.ApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.application.ApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.application.ApplicationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.application.ApplicationConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#display_name Application#display_name}

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktf/provider-azuread.application.ApplicationConfig.property.api"></a>

```java
public ApplicationApi getApi();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a>

api block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#api Application#api}

---

##### `appRole`<sup>Optional</sup> <a name="appRole" id="@cdktf/provider-azuread.application.ApplicationConfig.property.appRole"></a>

```java
public java.lang.Object getAppRole();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>>

app_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#app_role Application#app_role}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.application.ApplicationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the application as shown to end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#description Application#description}

---

##### `deviceOnlyAuthEnabled`<sup>Optional</sup> <a name="deviceOnlyAuthEnabled" id="@cdktf/provider-azuread.application.ApplicationConfig.property.deviceOnlyAuthEnabled"></a>

```java
public java.lang.Object getDeviceOnlyAuthEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether this application supports device authentication without a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#device_only_auth_enabled Application#device_only_auth_enabled}

---

##### `fallbackPublicClientEnabled`<sup>Optional</sup> <a name="fallbackPublicClientEnabled" id="@cdktf/provider-azuread.application.ApplicationConfig.property.fallbackPublicClientEnabled"></a>

```java
public java.lang.Object getFallbackPublicClientEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether the application is a public client.

Appropriate for apps using token grant flows that don't use a redirect URI

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#fallback_public_client_enabled Application#fallback_public_client_enabled}

---

##### `featureTags`<sup>Optional</sup> <a name="featureTags" id="@cdktf/provider-azuread.application.ApplicationConfig.property.featureTags"></a>

```java
public java.lang.Object getFeatureTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>>

feature_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#feature_tags Application#feature_tags}

---

##### `groupMembershipClaims`<sup>Optional</sup> <a name="groupMembershipClaims" id="@cdktf/provider-azuread.application.ApplicationConfig.property.groupMembershipClaims"></a>

```java
public java.util.List<java.lang.String> getGroupMembershipClaims();
```

- *Type:* java.util.List<java.lang.String>

Configures the `groups` claim issued in a user or OAuth 2.0 access token that the app expects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#group_membership_claims Application#group_membership_claims}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.application.ApplicationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#id Application#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifierUris`<sup>Optional</sup> <a name="identifierUris" id="@cdktf/provider-azuread.application.ApplicationConfig.property.identifierUris"></a>

```java
public java.util.List<java.lang.String> getIdentifierUris();
```

- *Type:* java.util.List<java.lang.String>

The user-defined URI(s) that uniquely identify an application within its Azure AD tenant, or within a verified custom domain if the application is multi-tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#identifier_uris Application#identifier_uris}

---

##### `logoImage`<sup>Optional</sup> <a name="logoImage" id="@cdktf/provider-azuread.application.ApplicationConfig.property.logoImage"></a>

```java
public java.lang.String getLogoImage();
```

- *Type:* java.lang.String

Base64 encoded logo image in gif, png or jpeg format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#logo_image Application#logo_image}

---

##### `marketingUrl`<sup>Optional</sup> <a name="marketingUrl" id="@cdktf/provider-azuread.application.ApplicationConfig.property.marketingUrl"></a>

```java
public java.lang.String getMarketingUrl();
```

- *Type:* java.lang.String

URL of the application's marketing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#marketing_url Application#marketing_url}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-azuread.application.ApplicationConfig.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

User-specified notes relevant for the management of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#notes Application#notes}

---

##### `oauth2PostResponseRequired`<sup>Optional</sup> <a name="oauth2PostResponseRequired" id="@cdktf/provider-azuread.application.ApplicationConfig.property.oauth2PostResponseRequired"></a>

```java
public java.lang.Object getOauth2PostResponseRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether, as part of OAuth 2.0 token requests, Azure AD allows POST requests, as opposed to GET requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#oauth2_post_response_required Application#oauth2_post_response_required}

---

##### `optionalClaims`<sup>Optional</sup> <a name="optionalClaims" id="@cdktf/provider-azuread.application.ApplicationConfig.property.optionalClaims"></a>

```java
public ApplicationOptionalClaims getOptionalClaims();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a>

optional_claims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#optional_claims Application#optional_claims}

---

##### `owners`<sup>Optional</sup> <a name="owners" id="@cdktf/provider-azuread.application.ApplicationConfig.property.owners"></a>

```java
public java.util.List<java.lang.String> getOwners();
```

- *Type:* java.util.List<java.lang.String>

A list of object IDs of principals that will be granted ownership of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#owners Application#owners}

---

##### `preventDuplicateNames`<sup>Optional</sup> <a name="preventDuplicateNames" id="@cdktf/provider-azuread.application.ApplicationConfig.property.preventDuplicateNames"></a>

```java
public java.lang.Object getPreventDuplicateNames();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, will return an error if an existing application is found with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#prevent_duplicate_names Application#prevent_duplicate_names}

---

##### `privacyStatementUrl`<sup>Optional</sup> <a name="privacyStatementUrl" id="@cdktf/provider-azuread.application.ApplicationConfig.property.privacyStatementUrl"></a>

```java
public java.lang.String getPrivacyStatementUrl();
```

- *Type:* java.lang.String

URL of the application's privacy statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#privacy_statement_url Application#privacy_statement_url}

---

##### `publicClient`<sup>Optional</sup> <a name="publicClient" id="@cdktf/provider-azuread.application.ApplicationConfig.property.publicClient"></a>

```java
public ApplicationPublicClient getPublicClient();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a>

public_client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#public_client Application#public_client}

---

##### `requiredResourceAccess`<sup>Optional</sup> <a name="requiredResourceAccess" id="@cdktf/provider-azuread.application.ApplicationConfig.property.requiredResourceAccess"></a>

```java
public java.lang.Object getRequiredResourceAccess();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>>

required_resource_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#required_resource_access Application#required_resource_access}

---

##### `serviceManagementReference`<sup>Optional</sup> <a name="serviceManagementReference" id="@cdktf/provider-azuread.application.ApplicationConfig.property.serviceManagementReference"></a>

```java
public java.lang.String getServiceManagementReference();
```

- *Type:* java.lang.String

References application or service contact information from a Service or Asset Management database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#service_management_reference Application#service_management_reference}

---

##### `signInAudience`<sup>Optional</sup> <a name="signInAudience" id="@cdktf/provider-azuread.application.ApplicationConfig.property.signInAudience"></a>

```java
public java.lang.String getSignInAudience();
```

- *Type:* java.lang.String

The Microsoft account types that are supported for the current application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#sign_in_audience Application#sign_in_audience}

---

##### `singlePageApplication`<sup>Optional</sup> <a name="singlePageApplication" id="@cdktf/provider-azuread.application.ApplicationConfig.property.singlePageApplication"></a>

```java
public ApplicationSinglePageApplication getSinglePageApplication();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a>

single_page_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#single_page_application Application#single_page_application}

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktf/provider-azuread.application.ApplicationConfig.property.supportUrl"></a>

```java
public java.lang.String getSupportUrl();
```

- *Type:* java.lang.String

URL of the application's support page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#support_url Application#support_url}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azuread.application.ApplicationConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

A set of tags to apply to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#tags Application#tags}

---

##### `templateId`<sup>Optional</sup> <a name="templateId" id="@cdktf/provider-azuread.application.ApplicationConfig.property.templateId"></a>

```java
public java.lang.String getTemplateId();
```

- *Type:* java.lang.String

Unique ID of the application template from which this application is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#template_id Application#template_id}

---

##### `termsOfServiceUrl`<sup>Optional</sup> <a name="termsOfServiceUrl" id="@cdktf/provider-azuread.application.ApplicationConfig.property.termsOfServiceUrl"></a>

```java
public java.lang.String getTermsOfServiceUrl();
```

- *Type:* java.lang.String

URL of the application's terms of service statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#terms_of_service_url Application#terms_of_service_url}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.application.ApplicationConfig.property.timeouts"></a>

```java
public ApplicationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#timeouts Application#timeouts}

---

##### `web`<sup>Optional</sup> <a name="web" id="@cdktf/provider-azuread.application.ApplicationConfig.property.web"></a>

```java
public ApplicationWeb getWeb();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a>

web block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#web Application#web}

---

### ApplicationFeatureTags <a name="ApplicationFeatureTags" id="@cdktf/provider-azuread.application.ApplicationFeatureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationFeatureTags;

ApplicationFeatureTags.builder()
//  .customSingleSignOn(java.lang.Boolean)
//  .customSingleSignOn(IResolvable)
//  .enterprise(java.lang.Boolean)
//  .enterprise(IResolvable)
//  .gallery(java.lang.Boolean)
//  .gallery(IResolvable)
//  .hide(java.lang.Boolean)
//  .hide(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags.property.customSingleSignOn">customSingleSignOn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this application represents a custom SAML application for linked service principals. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags.property.enterprise">enterprise</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this application represents an Enterprise Application for linked service principals. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags.property.gallery">gallery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this application represents a gallery application for linked service principals. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags.property.hide">hide</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this application is invisible to users in My Apps and Office 365 Launcher. |

---

##### `customSingleSignOn`<sup>Optional</sup> <a name="customSingleSignOn" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.property.customSingleSignOn"></a>

```java
public java.lang.Object getCustomSingleSignOn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this application represents a custom SAML application for linked service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#custom_single_sign_on Application#custom_single_sign_on}

---

##### `enterprise`<sup>Optional</sup> <a name="enterprise" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.property.enterprise"></a>

```java
public java.lang.Object getEnterprise();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this application represents an Enterprise Application for linked service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#enterprise Application#enterprise}

---

##### `gallery`<sup>Optional</sup> <a name="gallery" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.property.gallery"></a>

```java
public java.lang.Object getGallery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this application represents a gallery application for linked service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#gallery Application#gallery}

---

##### `hide`<sup>Optional</sup> <a name="hide" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.property.hide"></a>

```java
public java.lang.Object getHide();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this application is invisible to users in My Apps and Office 365 Launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#hide Application#hide}

---

### ApplicationOptionalClaims <a name="ApplicationOptionalClaims" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationOptionalClaims;

ApplicationOptionalClaims.builder()
//  .accessToken(IResolvable)
//  .accessToken(java.util.List<ApplicationOptionalClaimsAccessToken>)
//  .idToken(IResolvable)
//  .idToken(java.util.List<ApplicationOptionalClaimsIdToken>)
//  .saml2Token(IResolvable)
//  .saml2Token(java.util.List<ApplicationOptionalClaimsSaml2Token>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.accessToken">accessToken</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>></code> | access_token block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.idToken">idToken</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>></code> | id_token block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.saml2Token">saml2Token</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>></code> | saml2_token block. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.accessToken"></a>

```java
public java.lang.Object getAccessToken();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>>

access_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#access_token Application#access_token}

---

##### `idToken`<sup>Optional</sup> <a name="idToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.idToken"></a>

```java
public java.lang.Object getIdToken();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>>

id_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#id_token Application#id_token}

---

##### `saml2Token`<sup>Optional</sup> <a name="saml2Token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.saml2Token"></a>

```java
public java.lang.Object getSaml2Token();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>>

saml2_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#saml2_token Application#saml2_token}

---

### ApplicationOptionalClaimsAccessToken <a name="ApplicationOptionalClaimsAccessToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationOptionalClaimsAccessToken;

ApplicationOptionalClaimsAccessToken.builder()
    .name(java.lang.String)
//  .additionalProperties(java.util.List<java.lang.String>)
//  .essential(java.lang.Boolean)
//  .essential(IResolvable)
//  .source(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.name">name</a></code> | <code>java.lang.String</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.additionalProperties">additionalProperties</a></code> | <code>java.util.List<java.lang.String></code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.essential">essential</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.source">source</a></code> | <code>java.lang.String</code> | The source of the claim. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#name Application#name}

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.additionalProperties"></a>

```java
public java.util.List<java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.List<java.lang.String>

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#additional_properties Application#additional_properties}

---

##### `essential`<sup>Optional</sup> <a name="essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.essential"></a>

```java
public java.lang.Object getEssential();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#essential Application#essential}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#source Application#source}

---

### ApplicationOptionalClaimsIdToken <a name="ApplicationOptionalClaimsIdToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationOptionalClaimsIdToken;

ApplicationOptionalClaimsIdToken.builder()
    .name(java.lang.String)
//  .additionalProperties(java.util.List<java.lang.String>)
//  .essential(java.lang.Boolean)
//  .essential(IResolvable)
//  .source(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.name">name</a></code> | <code>java.lang.String</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.additionalProperties">additionalProperties</a></code> | <code>java.util.List<java.lang.String></code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.essential">essential</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.source">source</a></code> | <code>java.lang.String</code> | The source of the claim. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#name Application#name}

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.additionalProperties"></a>

```java
public java.util.List<java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.List<java.lang.String>

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#additional_properties Application#additional_properties}

---

##### `essential`<sup>Optional</sup> <a name="essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.essential"></a>

```java
public java.lang.Object getEssential();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#essential Application#essential}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#source Application#source}

---

### ApplicationOptionalClaimsSaml2Token <a name="ApplicationOptionalClaimsSaml2Token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationOptionalClaimsSaml2Token;

ApplicationOptionalClaimsSaml2Token.builder()
    .name(java.lang.String)
//  .additionalProperties(java.util.List<java.lang.String>)
//  .essential(java.lang.Boolean)
//  .essential(IResolvable)
//  .source(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.name">name</a></code> | <code>java.lang.String</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.additionalProperties">additionalProperties</a></code> | <code>java.util.List<java.lang.String></code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.essential">essential</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.source">source</a></code> | <code>java.lang.String</code> | The source of the claim. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#name Application#name}

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.additionalProperties"></a>

```java
public java.util.List<java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.List<java.lang.String>

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#additional_properties Application#additional_properties}

---

##### `essential`<sup>Optional</sup> <a name="essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.essential"></a>

```java
public java.lang.Object getEssential();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#essential Application#essential}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#source Application#source}

---

### ApplicationPublicClient <a name="ApplicationPublicClient" id="@cdktf/provider-azuread.application.ApplicationPublicClient"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationPublicClient.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationPublicClient;

ApplicationPublicClient.builder()
//  .redirectUris(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClient.property.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent. |

---

##### `redirectUris`<sup>Optional</sup> <a name="redirectUris" id="@cdktf/provider-azuread.application.ApplicationPublicClient.property.redirectUris"></a>

```java
public java.util.List<java.lang.String> getRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#redirect_uris Application#redirect_uris}

---

### ApplicationRequiredResourceAccess <a name="ApplicationRequiredResourceAccess" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationRequiredResourceAccess;

ApplicationRequiredResourceAccess.builder()
    .resourceAccess(IResolvable)
    .resourceAccess(java.util.List<ApplicationRequiredResourceAccessResourceAccess>)
    .resourceAppId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.property.resourceAccess">resourceAccess</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>></code> | resource_access block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.property.resourceAppId">resourceAppId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#resource_app_id Application#resource_app_id}. |

---

##### `resourceAccess`<sup>Required</sup> <a name="resourceAccess" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.property.resourceAccess"></a>

```java
public java.lang.Object getResourceAccess();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>>

resource_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#resource_access Application#resource_access}

---

##### `resourceAppId`<sup>Required</sup> <a name="resourceAppId" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.property.resourceAppId"></a>

```java
public java.lang.String getResourceAppId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#resource_app_id Application#resource_app_id}.

---

### ApplicationRequiredResourceAccessResourceAccess <a name="ApplicationRequiredResourceAccessResourceAccess" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationRequiredResourceAccessResourceAccess;

ApplicationRequiredResourceAccessResourceAccess.builder()
    .id(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#id Application#id}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#type Application#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#id Application#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#type Application#type}.

---

### ApplicationSinglePageApplication <a name="ApplicationSinglePageApplication" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationSinglePageApplication;

ApplicationSinglePageApplication.builder()
//  .redirectUris(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication.property.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent. |

---

##### `redirectUris`<sup>Optional</sup> <a name="redirectUris" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplication.property.redirectUris"></a>

```java
public java.util.List<java.lang.String> getRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#redirect_uris Application#redirect_uris}

---

### ApplicationTimeouts <a name="ApplicationTimeouts" id="@cdktf/provider-azuread.application.ApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationTimeouts;

ApplicationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#create Application#create}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#delete Application#delete}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#read Application#read}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#update Application#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.application.ApplicationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#create Application#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.application.ApplicationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#delete Application#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.application.ApplicationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#read Application#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.application.ApplicationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#update Application#update}.

---

### ApplicationWeb <a name="ApplicationWeb" id="@cdktf/provider-azuread.application.ApplicationWeb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationWeb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationWeb;

ApplicationWeb.builder()
//  .homepageUrl(java.lang.String)
//  .implicitGrant(ApplicationWebImplicitGrant)
//  .logoutUrl(java.lang.String)
//  .redirectUris(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb.property.homepageUrl">homepageUrl</a></code> | <code>java.lang.String</code> | Home page or landing page of the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb.property.implicitGrant">implicitGrant</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a></code> | implicit_grant block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb.property.logoutUrl">logoutUrl</a></code> | <code>java.lang.String</code> | The URL that will be used by Microsoft's authorization service to sign out a user using front-channel, back-channel or SAML logout protocols. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb.property.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent. |

---

##### `homepageUrl`<sup>Optional</sup> <a name="homepageUrl" id="@cdktf/provider-azuread.application.ApplicationWeb.property.homepageUrl"></a>

```java
public java.lang.String getHomepageUrl();
```

- *Type:* java.lang.String

Home page or landing page of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#homepage_url Application#homepage_url}

---

##### `implicitGrant`<sup>Optional</sup> <a name="implicitGrant" id="@cdktf/provider-azuread.application.ApplicationWeb.property.implicitGrant"></a>

```java
public ApplicationWebImplicitGrant getImplicitGrant();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a>

implicit_grant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#implicit_grant Application#implicit_grant}

---

##### `logoutUrl`<sup>Optional</sup> <a name="logoutUrl" id="@cdktf/provider-azuread.application.ApplicationWeb.property.logoutUrl"></a>

```java
public java.lang.String getLogoutUrl();
```

- *Type:* java.lang.String

The URL that will be used by Microsoft's authorization service to sign out a user using front-channel, back-channel or SAML logout protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#logout_url Application#logout_url}

---

##### `redirectUris`<sup>Optional</sup> <a name="redirectUris" id="@cdktf/provider-azuread.application.ApplicationWeb.property.redirectUris"></a>

```java
public java.util.List<java.lang.String> getRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#redirect_uris Application#redirect_uris}

---

### ApplicationWebImplicitGrant <a name="ApplicationWebImplicitGrant" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationWebImplicitGrant;

ApplicationWebImplicitGrant.builder()
//  .accessTokenIssuanceEnabled(java.lang.Boolean)
//  .accessTokenIssuanceEnabled(IResolvable)
//  .idTokenIssuanceEnabled(java.lang.Boolean)
//  .idTokenIssuanceEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.property.accessTokenIssuanceEnabled">accessTokenIssuanceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this web application can request an access token using OAuth 2.0 implicit flow. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.property.idTokenIssuanceEnabled">idTokenIssuanceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this web application can request an ID token using OAuth 2.0 implicit flow. |

---

##### `accessTokenIssuanceEnabled`<sup>Optional</sup> <a name="accessTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.property.accessTokenIssuanceEnabled"></a>

```java
public java.lang.Object getAccessTokenIssuanceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this web application can request an access token using OAuth 2.0 implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#access_token_issuance_enabled Application#access_token_issuance_enabled}

---

##### `idTokenIssuanceEnabled`<sup>Optional</sup> <a name="idTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.property.idTokenIssuanceEnabled"></a>

```java
public java.lang.Object getIdTokenIssuanceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this web application can request an ID token using OAuth 2.0 implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application#id_token_issuance_enabled Application#id_token_issuance_enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationApiOauth2PermissionScopeList <a name="ApplicationApiOauth2PermissionScopeList" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationApiOauth2PermissionScopeList;

new ApplicationApiOauth2PermissionScopeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.get"></a>

```java
public ApplicationApiOauth2PermissionScopeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>>

---


### ApplicationApiOauth2PermissionScopeOutputReference <a name="ApplicationApiOauth2PermissionScopeOutputReference" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationApiOauth2PermissionScopeOutputReference;

new ApplicationApiOauth2PermissionScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetAdminConsentDescription">resetAdminConsentDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetAdminConsentDisplayName">resetAdminConsentDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetUserConsentDescription">resetUserConsentDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetUserConsentDisplayName">resetUserConsentDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdminConsentDescription` <a name="resetAdminConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetAdminConsentDescription"></a>

```java
public void resetAdminConsentDescription()
```

##### `resetAdminConsentDisplayName` <a name="resetAdminConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetAdminConsentDisplayName"></a>

```java
public void resetAdminConsentDisplayName()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetUserConsentDescription` <a name="resetUserConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetUserConsentDescription"></a>

```java
public void resetUserConsentDescription()
```

##### `resetUserConsentDisplayName` <a name="resetUserConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetUserConsentDisplayName"></a>

```java
public void resetUserConsentDisplayName()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDescriptionInput">adminConsentDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDisplayNameInput">adminConsentDisplayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDescriptionInput">userConsentDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDisplayNameInput">userConsentDisplayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDescription">adminConsentDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDisplayName">adminConsentDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDescription">userConsentDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDisplayName">userConsentDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminConsentDescriptionInput`<sup>Optional</sup> <a name="adminConsentDescriptionInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDescriptionInput"></a>

```java
public java.lang.String getAdminConsentDescriptionInput();
```

- *Type:* java.lang.String

---

##### `adminConsentDisplayNameInput`<sup>Optional</sup> <a name="adminConsentDisplayNameInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDisplayNameInput"></a>

```java
public java.lang.String getAdminConsentDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `userConsentDescriptionInput`<sup>Optional</sup> <a name="userConsentDescriptionInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDescriptionInput"></a>

```java
public java.lang.String getUserConsentDescriptionInput();
```

- *Type:* java.lang.String

---

##### `userConsentDisplayNameInput`<sup>Optional</sup> <a name="userConsentDisplayNameInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDisplayNameInput"></a>

```java
public java.lang.String getUserConsentDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `adminConsentDescription`<sup>Required</sup> <a name="adminConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDescription"></a>

```java
public java.lang.String getAdminConsentDescription();
```

- *Type:* java.lang.String

---

##### `adminConsentDisplayName`<sup>Required</sup> <a name="adminConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDisplayName"></a>

```java
public java.lang.String getAdminConsentDisplayName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userConsentDescription`<sup>Required</sup> <a name="userConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDescription"></a>

```java
public java.lang.String getUserConsentDescription();
```

- *Type:* java.lang.String

---

##### `userConsentDisplayName`<sup>Required</sup> <a name="userConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDisplayName"></a>

```java
public java.lang.String getUserConsentDisplayName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>

---


### ApplicationApiOutputReference <a name="ApplicationApiOutputReference" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationApiOutputReference;

new ApplicationApiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.putOauth2PermissionScope">putOauth2PermissionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetKnownClientApplications">resetKnownClientApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetMappedClaimsEnabled">resetMappedClaimsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetOauth2PermissionScope">resetOauth2PermissionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetRequestedAccessTokenVersion">resetRequestedAccessTokenVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOauth2PermissionScope` <a name="putOauth2PermissionScope" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.putOauth2PermissionScope"></a>

```java
public void putOauth2PermissionScope(IResolvable OR java.util.List<ApplicationApiOauth2PermissionScope> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.putOauth2PermissionScope.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>>

---

##### `resetKnownClientApplications` <a name="resetKnownClientApplications" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetKnownClientApplications"></a>

```java
public void resetKnownClientApplications()
```

##### `resetMappedClaimsEnabled` <a name="resetMappedClaimsEnabled" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetMappedClaimsEnabled"></a>

```java
public void resetMappedClaimsEnabled()
```

##### `resetOauth2PermissionScope` <a name="resetOauth2PermissionScope" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetOauth2PermissionScope"></a>

```java
public void resetOauth2PermissionScope()
```

##### `resetRequestedAccessTokenVersion` <a name="resetRequestedAccessTokenVersion" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetRequestedAccessTokenVersion"></a>

```java
public void resetRequestedAccessTokenVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.oauth2PermissionScope">oauth2PermissionScope</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList">ApplicationApiOauth2PermissionScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.knownClientApplicationsInput">knownClientApplicationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.mappedClaimsEnabledInput">mappedClaimsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.oauth2PermissionScopeInput">oauth2PermissionScopeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.requestedAccessTokenVersionInput">requestedAccessTokenVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.knownClientApplications">knownClientApplications</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.mappedClaimsEnabled">mappedClaimsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.requestedAccessTokenVersion">requestedAccessTokenVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `oauth2PermissionScope`<sup>Required</sup> <a name="oauth2PermissionScope" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.oauth2PermissionScope"></a>

```java
public ApplicationApiOauth2PermissionScopeList getOauth2PermissionScope();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList">ApplicationApiOauth2PermissionScopeList</a>

---

##### `knownClientApplicationsInput`<sup>Optional</sup> <a name="knownClientApplicationsInput" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.knownClientApplicationsInput"></a>

```java
public java.util.List<java.lang.String> getKnownClientApplicationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mappedClaimsEnabledInput`<sup>Optional</sup> <a name="mappedClaimsEnabledInput" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.mappedClaimsEnabledInput"></a>

```java
public java.lang.Object getMappedClaimsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `oauth2PermissionScopeInput`<sup>Optional</sup> <a name="oauth2PermissionScopeInput" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.oauth2PermissionScopeInput"></a>

```java
public java.lang.Object getOauth2PermissionScopeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope">ApplicationApiOauth2PermissionScope</a>>

---

##### `requestedAccessTokenVersionInput`<sup>Optional</sup> <a name="requestedAccessTokenVersionInput" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.requestedAccessTokenVersionInput"></a>

```java
public java.lang.Number getRequestedAccessTokenVersionInput();
```

- *Type:* java.lang.Number

---

##### `knownClientApplications`<sup>Required</sup> <a name="knownClientApplications" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.knownClientApplications"></a>

```java
public java.util.List<java.lang.String> getKnownClientApplications();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mappedClaimsEnabled`<sup>Required</sup> <a name="mappedClaimsEnabled" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.mappedClaimsEnabled"></a>

```java
public java.lang.Object getMappedClaimsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requestedAccessTokenVersion`<sup>Required</sup> <a name="requestedAccessTokenVersion" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.requestedAccessTokenVersion"></a>

```java
public java.lang.Number getRequestedAccessTokenVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.internalValue"></a>

```java
public ApplicationApi getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a>

---


### ApplicationAppRoleList <a name="ApplicationAppRoleList" id="@cdktf/provider-azuread.application.ApplicationAppRoleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationAppRoleList;

new ApplicationAppRoleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.get"></a>

```java
public ApplicationAppRoleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>>

---


### ApplicationAppRoleOutputReference <a name="ApplicationAppRoleOutputReference" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationAppRoleOutputReference;

new ApplicationAppRoleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.allowedMemberTypesInput">allowedMemberTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.allowedMemberTypes">allowedMemberTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedMemberTypesInput`<sup>Optional</sup> <a name="allowedMemberTypesInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.allowedMemberTypesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedMemberTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `allowedMemberTypes`<sup>Required</sup> <a name="allowedMemberTypes" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.allowedMemberTypes"></a>

```java
public java.util.List<java.lang.String> getAllowedMemberTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.application.ApplicationAppRole">ApplicationAppRole</a>

---


### ApplicationFeatureTagsList <a name="ApplicationFeatureTagsList" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationFeatureTagsList;

new ApplicationFeatureTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.get"></a>

```java
public ApplicationFeatureTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>>

---


### ApplicationFeatureTagsOutputReference <a name="ApplicationFeatureTagsOutputReference" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationFeatureTagsOutputReference;

new ApplicationFeatureTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetCustomSingleSignOn">resetCustomSingleSignOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetEnterprise">resetEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetGallery">resetGallery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetHide">resetHide</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomSingleSignOn` <a name="resetCustomSingleSignOn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetCustomSingleSignOn"></a>

```java
public void resetCustomSingleSignOn()
```

##### `resetEnterprise` <a name="resetEnterprise" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetEnterprise"></a>

```java
public void resetEnterprise()
```

##### `resetGallery` <a name="resetGallery" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetGallery"></a>

```java
public void resetGallery()
```

##### `resetHide` <a name="resetHide" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetHide"></a>

```java
public void resetHide()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.customSingleSignOnInput">customSingleSignOnInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.enterpriseInput">enterpriseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.galleryInput">galleryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.hideInput">hideInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.customSingleSignOn">customSingleSignOn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.enterprise">enterprise</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.gallery">gallery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.hide">hide</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customSingleSignOnInput`<sup>Optional</sup> <a name="customSingleSignOnInput" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.customSingleSignOnInput"></a>

```java
public java.lang.Object getCustomSingleSignOnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enterpriseInput`<sup>Optional</sup> <a name="enterpriseInput" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.enterpriseInput"></a>

```java
public java.lang.Object getEnterpriseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `galleryInput`<sup>Optional</sup> <a name="galleryInput" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.galleryInput"></a>

```java
public java.lang.Object getGalleryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideInput`<sup>Optional</sup> <a name="hideInput" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.hideInput"></a>

```java
public java.lang.Object getHideInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customSingleSignOn`<sup>Required</sup> <a name="customSingleSignOn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.customSingleSignOn"></a>

```java
public java.lang.Object getCustomSingleSignOn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enterprise`<sup>Required</sup> <a name="enterprise" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.enterprise"></a>

```java
public java.lang.Object getEnterprise();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gallery`<sup>Required</sup> <a name="gallery" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.gallery"></a>

```java
public java.lang.Object getGallery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hide`<sup>Required</sup> <a name="hide" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.hide"></a>

```java
public java.lang.Object getHide();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags">ApplicationFeatureTags</a>

---


### ApplicationOptionalClaimsAccessTokenList <a name="ApplicationOptionalClaimsAccessTokenList" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationOptionalClaimsAccessTokenList;

new ApplicationOptionalClaimsAccessTokenList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.get"></a>

```java
public ApplicationOptionalClaimsAccessTokenOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>>

---


### ApplicationOptionalClaimsAccessTokenOutputReference <a name="ApplicationOptionalClaimsAccessTokenOutputReference" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference;

new ApplicationOptionalClaimsAccessTokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetEssential">resetEssential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetAdditionalProperties"></a>

```java
public void resetAdditionalProperties()
```

##### `resetEssential` <a name="resetEssential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetEssential"></a>

```java
public void resetEssential()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetSource"></a>

```java
public void resetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.essentialInput">essentialInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.additionalProperties">additionalProperties</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.essential">essential</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.additionalPropertiesInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalPropertiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `essentialInput`<sup>Optional</sup> <a name="essentialInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.essentialInput"></a>

```java
public java.lang.Object getEssentialInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.additionalProperties"></a>

```java
public java.util.List<java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.List<java.lang.String>

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.essential"></a>

```java
public java.lang.Object getEssential();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>

---


### ApplicationOptionalClaimsIdTokenList <a name="ApplicationOptionalClaimsIdTokenList" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationOptionalClaimsIdTokenList;

new ApplicationOptionalClaimsIdTokenList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.get"></a>

```java
public ApplicationOptionalClaimsIdTokenOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>>

---


### ApplicationOptionalClaimsIdTokenOutputReference <a name="ApplicationOptionalClaimsIdTokenOutputReference" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationOptionalClaimsIdTokenOutputReference;

new ApplicationOptionalClaimsIdTokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetEssential">resetEssential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetAdditionalProperties"></a>

```java
public void resetAdditionalProperties()
```

##### `resetEssential` <a name="resetEssential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetEssential"></a>

```java
public void resetEssential()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetSource"></a>

```java
public void resetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.essentialInput">essentialInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.additionalProperties">additionalProperties</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.essential">essential</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.additionalPropertiesInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalPropertiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `essentialInput`<sup>Optional</sup> <a name="essentialInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.essentialInput"></a>

```java
public java.lang.Object getEssentialInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.additionalProperties"></a>

```java
public java.util.List<java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.List<java.lang.String>

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.essential"></a>

```java
public java.lang.Object getEssential();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>

---


### ApplicationOptionalClaimsOutputReference <a name="ApplicationOptionalClaimsOutputReference" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationOptionalClaimsOutputReference;

new ApplicationOptionalClaimsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putAccessToken">putAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putIdToken">putIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putSaml2Token">putSaml2Token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetIdToken">resetIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetSaml2Token">resetSaml2Token</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessToken` <a name="putAccessToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putAccessToken"></a>

```java
public void putAccessToken(IResolvable OR java.util.List<ApplicationOptionalClaimsAccessToken> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putAccessToken.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>>

---

##### `putIdToken` <a name="putIdToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putIdToken"></a>

```java
public void putIdToken(IResolvable OR java.util.List<ApplicationOptionalClaimsIdToken> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putIdToken.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>>

---

##### `putSaml2Token` <a name="putSaml2Token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putSaml2Token"></a>

```java
public void putSaml2Token(IResolvable OR java.util.List<ApplicationOptionalClaimsSaml2Token> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putSaml2Token.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>>

---

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetAccessToken"></a>

```java
public void resetAccessToken()
```

##### `resetIdToken` <a name="resetIdToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetIdToken"></a>

```java
public void resetIdToken()
```

##### `resetSaml2Token` <a name="resetSaml2Token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetSaml2Token"></a>

```java
public void resetSaml2Token()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.accessToken">accessToken</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList">ApplicationOptionalClaimsAccessTokenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.idToken">idToken</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList">ApplicationOptionalClaimsIdTokenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.saml2Token">saml2Token</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList">ApplicationOptionalClaimsSaml2TokenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.accessTokenInput">accessTokenInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.idTokenInput">idTokenInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.saml2TokenInput">saml2TokenInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.accessToken"></a>

```java
public ApplicationOptionalClaimsAccessTokenList getAccessToken();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList">ApplicationOptionalClaimsAccessTokenList</a>

---

##### `idToken`<sup>Required</sup> <a name="idToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.idToken"></a>

```java
public ApplicationOptionalClaimsIdTokenList getIdToken();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList">ApplicationOptionalClaimsIdTokenList</a>

---

##### `saml2Token`<sup>Required</sup> <a name="saml2Token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.saml2Token"></a>

```java
public ApplicationOptionalClaimsSaml2TokenList getSaml2Token();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList">ApplicationOptionalClaimsSaml2TokenList</a>

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.accessTokenInput"></a>

```java
public java.lang.Object getAccessTokenInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken">ApplicationOptionalClaimsAccessToken</a>>

---

##### `idTokenInput`<sup>Optional</sup> <a name="idTokenInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.idTokenInput"></a>

```java
public java.lang.Object getIdTokenInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken">ApplicationOptionalClaimsIdToken</a>>

---

##### `saml2TokenInput`<sup>Optional</sup> <a name="saml2TokenInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.saml2TokenInput"></a>

```java
public java.lang.Object getSaml2TokenInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.internalValue"></a>

```java
public ApplicationOptionalClaims getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a>

---


### ApplicationOptionalClaimsSaml2TokenList <a name="ApplicationOptionalClaimsSaml2TokenList" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationOptionalClaimsSaml2TokenList;

new ApplicationOptionalClaimsSaml2TokenList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.get"></a>

```java
public ApplicationOptionalClaimsSaml2TokenOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>>

---


### ApplicationOptionalClaimsSaml2TokenOutputReference <a name="ApplicationOptionalClaimsSaml2TokenOutputReference" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference;

new ApplicationOptionalClaimsSaml2TokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetEssential">resetEssential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetAdditionalProperties"></a>

```java
public void resetAdditionalProperties()
```

##### `resetEssential` <a name="resetEssential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetEssential"></a>

```java
public void resetEssential()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetSource"></a>

```java
public void resetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.essentialInput">essentialInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.additionalProperties">additionalProperties</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.essential">essential</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.additionalPropertiesInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalPropertiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `essentialInput`<sup>Optional</sup> <a name="essentialInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.essentialInput"></a>

```java
public java.lang.Object getEssentialInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.additionalProperties"></a>

```java
public java.util.List<java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.List<java.lang.String>

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.essential"></a>

```java
public java.lang.Object getEssential();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token">ApplicationOptionalClaimsSaml2Token</a>

---


### ApplicationPublicClientOutputReference <a name="ApplicationPublicClientOutputReference" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationPublicClientOutputReference;

new ApplicationPublicClientOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resetRedirectUris">resetRedirectUris</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRedirectUris` <a name="resetRedirectUris" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resetRedirectUris"></a>

```java
public void resetRedirectUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.redirectUrisInput">redirectUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `redirectUrisInput`<sup>Optional</sup> <a name="redirectUrisInput" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.redirectUrisInput"></a>

```java
public java.util.List<java.lang.String> getRedirectUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.redirectUris"></a>

```java
public java.util.List<java.lang.String> getRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.internalValue"></a>

```java
public ApplicationPublicClient getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a>

---


### ApplicationRequiredResourceAccessList <a name="ApplicationRequiredResourceAccessList" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationRequiredResourceAccessList;

new ApplicationRequiredResourceAccessList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.get"></a>

```java
public ApplicationRequiredResourceAccessOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>>

---


### ApplicationRequiredResourceAccessOutputReference <a name="ApplicationRequiredResourceAccessOutputReference" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationRequiredResourceAccessOutputReference;

new ApplicationRequiredResourceAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.putResourceAccess">putResourceAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourceAccess` <a name="putResourceAccess" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.putResourceAccess"></a>

```java
public void putResourceAccess(IResolvable OR java.util.List<ApplicationRequiredResourceAccessResourceAccess> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.putResourceAccess.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAccess">resourceAccess</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList">ApplicationRequiredResourceAccessResourceAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAccessInput">resourceAccessInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAppIdInput">resourceAppIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAppId">resourceAppId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceAccess`<sup>Required</sup> <a name="resourceAccess" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAccess"></a>

```java
public ApplicationRequiredResourceAccessResourceAccessList getResourceAccess();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList">ApplicationRequiredResourceAccessResourceAccessList</a>

---

##### `resourceAccessInput`<sup>Optional</sup> <a name="resourceAccessInput" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAccessInput"></a>

```java
public java.lang.Object getResourceAccessInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>>

---

##### `resourceAppIdInput`<sup>Optional</sup> <a name="resourceAppIdInput" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAppIdInput"></a>

```java
public java.lang.String getResourceAppIdInput();
```

- *Type:* java.lang.String

---

##### `resourceAppId`<sup>Required</sup> <a name="resourceAppId" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAppId"></a>

```java
public java.lang.String getResourceAppId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess">ApplicationRequiredResourceAccess</a>

---


### ApplicationRequiredResourceAccessResourceAccessList <a name="ApplicationRequiredResourceAccessResourceAccessList" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationRequiredResourceAccessResourceAccessList;

new ApplicationRequiredResourceAccessResourceAccessList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.get"></a>

```java
public ApplicationRequiredResourceAccessResourceAccessOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>>

---


### ApplicationRequiredResourceAccessResourceAccessOutputReference <a name="ApplicationRequiredResourceAccessResourceAccessOutputReference" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference;

new ApplicationRequiredResourceAccessResourceAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess">ApplicationRequiredResourceAccessResourceAccess</a>

---


### ApplicationSinglePageApplicationOutputReference <a name="ApplicationSinglePageApplicationOutputReference" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationSinglePageApplicationOutputReference;

new ApplicationSinglePageApplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resetRedirectUris">resetRedirectUris</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRedirectUris` <a name="resetRedirectUris" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resetRedirectUris"></a>

```java
public void resetRedirectUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.redirectUrisInput">redirectUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `redirectUrisInput`<sup>Optional</sup> <a name="redirectUrisInput" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.redirectUrisInput"></a>

```java
public java.util.List<java.lang.String> getRedirectUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.redirectUris"></a>

```java
public java.util.List<java.lang.String> getRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.internalValue"></a>

```java
public ApplicationSinglePageApplication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a>

---


### ApplicationTimeoutsOutputReference <a name="ApplicationTimeoutsOutputReference" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationTimeoutsOutputReference;

new ApplicationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a>

---


### ApplicationWebImplicitGrantOutputReference <a name="ApplicationWebImplicitGrantOutputReference" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationWebImplicitGrantOutputReference;

new ApplicationWebImplicitGrantOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resetAccessTokenIssuanceEnabled">resetAccessTokenIssuanceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resetIdTokenIssuanceEnabled">resetIdTokenIssuanceEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessTokenIssuanceEnabled` <a name="resetAccessTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resetAccessTokenIssuanceEnabled"></a>

```java
public void resetAccessTokenIssuanceEnabled()
```

##### `resetIdTokenIssuanceEnabled` <a name="resetIdTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resetIdTokenIssuanceEnabled"></a>

```java
public void resetIdTokenIssuanceEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.accessTokenIssuanceEnabledInput">accessTokenIssuanceEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.idTokenIssuanceEnabledInput">idTokenIssuanceEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.accessTokenIssuanceEnabled">accessTokenIssuanceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.idTokenIssuanceEnabled">idTokenIssuanceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessTokenIssuanceEnabledInput`<sup>Optional</sup> <a name="accessTokenIssuanceEnabledInput" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.accessTokenIssuanceEnabledInput"></a>

```java
public java.lang.Object getAccessTokenIssuanceEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idTokenIssuanceEnabledInput`<sup>Optional</sup> <a name="idTokenIssuanceEnabledInput" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.idTokenIssuanceEnabledInput"></a>

```java
public java.lang.Object getIdTokenIssuanceEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `accessTokenIssuanceEnabled`<sup>Required</sup> <a name="accessTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.accessTokenIssuanceEnabled"></a>

```java
public java.lang.Object getAccessTokenIssuanceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idTokenIssuanceEnabled`<sup>Required</sup> <a name="idTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.idTokenIssuanceEnabled"></a>

```java
public java.lang.Object getIdTokenIssuanceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.internalValue"></a>

```java
public ApplicationWebImplicitGrant getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a>

---


### ApplicationWebOutputReference <a name="ApplicationWebOutputReference" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application.ApplicationWebOutputReference;

new ApplicationWebOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.putImplicitGrant">putImplicitGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetHomepageUrl">resetHomepageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetImplicitGrant">resetImplicitGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetLogoutUrl">resetLogoutUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetRedirectUris">resetRedirectUris</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putImplicitGrant` <a name="putImplicitGrant" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.putImplicitGrant"></a>

```java
public void putImplicitGrant(ApplicationWebImplicitGrant value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.putImplicitGrant.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a>

---

##### `resetHomepageUrl` <a name="resetHomepageUrl" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetHomepageUrl"></a>

```java
public void resetHomepageUrl()
```

##### `resetImplicitGrant` <a name="resetImplicitGrant" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetImplicitGrant"></a>

```java
public void resetImplicitGrant()
```

##### `resetLogoutUrl` <a name="resetLogoutUrl" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetLogoutUrl"></a>

```java
public void resetLogoutUrl()
```

##### `resetRedirectUris` <a name="resetRedirectUris" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetRedirectUris"></a>

```java
public void resetRedirectUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.implicitGrant">implicitGrant</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference">ApplicationWebImplicitGrantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.homepageUrlInput">homepageUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.implicitGrantInput">implicitGrantInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.logoutUrlInput">logoutUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.redirectUrisInput">redirectUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.homepageUrl">homepageUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.logoutUrl">logoutUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `implicitGrant`<sup>Required</sup> <a name="implicitGrant" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.implicitGrant"></a>

```java
public ApplicationWebImplicitGrantOutputReference getImplicitGrant();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference">ApplicationWebImplicitGrantOutputReference</a>

---

##### `homepageUrlInput`<sup>Optional</sup> <a name="homepageUrlInput" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.homepageUrlInput"></a>

```java
public java.lang.String getHomepageUrlInput();
```

- *Type:* java.lang.String

---

##### `implicitGrantInput`<sup>Optional</sup> <a name="implicitGrantInput" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.implicitGrantInput"></a>

```java
public ApplicationWebImplicitGrant getImplicitGrantInput();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a>

---

##### `logoutUrlInput`<sup>Optional</sup> <a name="logoutUrlInput" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.logoutUrlInput"></a>

```java
public java.lang.String getLogoutUrlInput();
```

- *Type:* java.lang.String

---

##### `redirectUrisInput`<sup>Optional</sup> <a name="redirectUrisInput" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.redirectUrisInput"></a>

```java
public java.util.List<java.lang.String> getRedirectUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `homepageUrl`<sup>Required</sup> <a name="homepageUrl" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.homepageUrl"></a>

```java
public java.lang.String getHomepageUrl();
```

- *Type:* java.lang.String

---

##### `logoutUrl`<sup>Required</sup> <a name="logoutUrl" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.logoutUrl"></a>

```java
public java.lang.String getLogoutUrl();
```

- *Type:* java.lang.String

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.redirectUris"></a>

```java
public java.util.List<java.lang.String> getRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.internalValue"></a>

```java
public ApplicationWeb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a>

---



