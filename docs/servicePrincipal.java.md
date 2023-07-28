# `azuread_service_principal`

Refer to the Terraform Registory for docs: [`azuread_service_principal`](https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal).

# `servicePrincipal` Submodule <a name="`servicePrincipal` Submodule" id="@cdktf/provider-azuread.servicePrincipal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipal <a name="ServicePrincipal" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal azuread_service_principal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal.ServicePrincipal;

ServicePrincipal.Builder.create(Construct scope, java.lang.String id)
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
    .applicationId(java.lang.String)
//  .accountEnabled(java.lang.Boolean)
//  .accountEnabled(IResolvable)
//  .alternativeNames(java.util.List<java.lang.String>)
//  .appRoleAssignmentRequired(java.lang.Boolean)
//  .appRoleAssignmentRequired(IResolvable)
//  .description(java.lang.String)
//  .features(IResolvable)
//  .features(java.util.List<ServicePrincipalFeatures>)
//  .featureTags(IResolvable)
//  .featureTags(java.util.List<ServicePrincipalFeatureTags>)
//  .id(java.lang.String)
//  .loginUrl(java.lang.String)
//  .notes(java.lang.String)
//  .notificationEmailAddresses(java.util.List<java.lang.String>)
//  .owners(java.util.List<java.lang.String>)
//  .preferredSingleSignOnMode(java.lang.String)
//  .samlSingleSignOn(ServicePrincipalSamlSingleSignOn)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(ServicePrincipalTimeouts)
//  .useExisting(java.lang.Boolean)
//  .useExisting(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The application ID (client ID) of the application for which to create a service principal. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.accountEnabled">accountEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not the service principal account is enabled. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.alternativeNames">alternativeNames</a></code> | <code>java.util.List<java.lang.String></code> | A list of alternative names, used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.appRoleAssignmentRequired">appRoleAssignmentRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this service principal requires an app role assignment to a user or group before Azure AD will issue a user or access token to the application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the service principal provided for internal end-users. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.features">features</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures">ServicePrincipalFeatures</a>></code> | features block. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.featureTags">featureTags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags">ServicePrincipalFeatureTags</a>></code> | feature_tags block. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#id ServicePrincipal#id}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.loginUrl">loginUrl</a></code> | <code>java.lang.String</code> | The URL where the service provider redirects the user to Azure AD to authenticate. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.notes">notes</a></code> | <code>java.lang.String</code> | Free text field to capture information about the service principal, typically used for operational purposes. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.notificationEmailAddresses">notificationEmailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | List of email addresses where Azure AD sends a notification when the active certificate is near the expiration date. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.owners">owners</a></code> | <code>java.util.List<java.lang.String></code> | A list of object IDs of principals that will be granted ownership of the service principal. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.preferredSingleSignOnMode">preferredSingleSignOnMode</a></code> | <code>java.lang.String</code> | The single sign-on mode configured for this application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.samlSingleSignOn">samlSingleSignOn</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a></code> | saml_single_sign_on block. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A set of tags to apply to the service principal. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts">ServicePrincipalTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.useExisting">useExisting</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, the resource will return an existing service principal instead of failing with an error. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

The application ID (client ID) of the application for which to create a service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#application_id ServicePrincipal#application_id}

---

##### `accountEnabled`<sup>Optional</sup> <a name="accountEnabled" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.accountEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not the service principal account is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#account_enabled ServicePrincipal#account_enabled}

---

##### `alternativeNames`<sup>Optional</sup> <a name="alternativeNames" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.alternativeNames"></a>

- *Type:* java.util.List<java.lang.String>

A list of alternative names, used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#alternative_names ServicePrincipal#alternative_names}

---

##### `appRoleAssignmentRequired`<sup>Optional</sup> <a name="appRoleAssignmentRequired" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.appRoleAssignmentRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this service principal requires an app role assignment to a user or group before Azure AD will issue a user or access token to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#app_role_assignment_required ServicePrincipal#app_role_assignment_required}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the service principal provided for internal end-users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#description ServicePrincipal#description}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.features"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures">ServicePrincipalFeatures</a>>

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#features ServicePrincipal#features}

---

##### `featureTags`<sup>Optional</sup> <a name="featureTags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.featureTags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags">ServicePrincipalFeatureTags</a>>

feature_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#feature_tags ServicePrincipal#feature_tags}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#id ServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loginUrl`<sup>Optional</sup> <a name="loginUrl" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.loginUrl"></a>

- *Type:* java.lang.String

The URL where the service provider redirects the user to Azure AD to authenticate.

Azure AD uses the URL to launch the application from Microsoft 365 or the Azure AD My Apps. When blank, Azure AD performs IdP-initiated sign-on for applications configured with SAML-based single sign-on

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#login_url ServicePrincipal#login_url}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.notes"></a>

- *Type:* java.lang.String

Free text field to capture information about the service principal, typically used for operational purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#notes ServicePrincipal#notes}

---

##### `notificationEmailAddresses`<sup>Optional</sup> <a name="notificationEmailAddresses" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.notificationEmailAddresses"></a>

- *Type:* java.util.List<java.lang.String>

List of email addresses where Azure AD sends a notification when the active certificate is near the expiration date.

This is only for the certificates used to sign the SAML token issued for Azure AD Gallery applications

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#notification_email_addresses ServicePrincipal#notification_email_addresses}

---

##### `owners`<sup>Optional</sup> <a name="owners" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.owners"></a>

- *Type:* java.util.List<java.lang.String>

A list of object IDs of principals that will be granted ownership of the service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#owners ServicePrincipal#owners}

---

##### `preferredSingleSignOnMode`<sup>Optional</sup> <a name="preferredSingleSignOnMode" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.preferredSingleSignOnMode"></a>

- *Type:* java.lang.String

The single sign-on mode configured for this application.

Azure AD uses the preferred single sign-on mode to launch the application from Microsoft 365 or the Azure AD My Apps

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#preferred_single_sign_on_mode ServicePrincipal#preferred_single_sign_on_mode}

---

##### `samlSingleSignOn`<sup>Optional</sup> <a name="samlSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.samlSingleSignOn"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a>

saml_single_sign_on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#saml_single_sign_on ServicePrincipal#saml_single_sign_on}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

A set of tags to apply to the service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#tags ServicePrincipal#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts">ServicePrincipalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#timeouts ServicePrincipal#timeouts}

---

##### `useExisting`<sup>Optional</sup> <a name="useExisting" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.useExisting"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, the resource will return an existing service principal instead of failing with an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#use_existing ServicePrincipal#use_existing}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putFeatures">putFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putFeatureTags">putFeatureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putSamlSingleSignOn">putSamlSingleSignOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetAccountEnabled">resetAccountEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetAlternativeNames">resetAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetAppRoleAssignmentRequired">resetAppRoleAssignmentRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetFeatures">resetFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetFeatureTags">resetFeatureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetLoginUrl">resetLoginUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetNotificationEmailAddresses">resetNotificationEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetOwners">resetOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetPreferredSingleSignOnMode">resetPreferredSingleSignOnMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetSamlSingleSignOn">resetSamlSingleSignOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetUseExisting">resetUseExisting</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFeatures` <a name="putFeatures" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putFeatures"></a>

```java
public void putFeatures(IResolvable OR java.util.List<ServicePrincipalFeatures> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putFeatures.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures">ServicePrincipalFeatures</a>>

---

##### `putFeatureTags` <a name="putFeatureTags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putFeatureTags"></a>

```java
public void putFeatureTags(IResolvable OR java.util.List<ServicePrincipalFeatureTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putFeatureTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags">ServicePrincipalFeatureTags</a>>

---

##### `putSamlSingleSignOn` <a name="putSamlSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putSamlSingleSignOn"></a>

```java
public void putSamlSingleSignOn(ServicePrincipalSamlSingleSignOn value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putSamlSingleSignOn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putTimeouts"></a>

```java
public void putTimeouts(ServicePrincipalTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts">ServicePrincipalTimeouts</a>

---

##### `resetAccountEnabled` <a name="resetAccountEnabled" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetAccountEnabled"></a>

```java
public void resetAccountEnabled()
```

##### `resetAlternativeNames` <a name="resetAlternativeNames" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetAlternativeNames"></a>

```java
public void resetAlternativeNames()
```

##### `resetAppRoleAssignmentRequired` <a name="resetAppRoleAssignmentRequired" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetAppRoleAssignmentRequired"></a>

```java
public void resetAppRoleAssignmentRequired()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFeatures` <a name="resetFeatures" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetFeatures"></a>

```java
public void resetFeatures()
```

##### `resetFeatureTags` <a name="resetFeatureTags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetFeatureTags"></a>

```java
public void resetFeatureTags()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetId"></a>

```java
public void resetId()
```

##### `resetLoginUrl` <a name="resetLoginUrl" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetLoginUrl"></a>

```java
public void resetLoginUrl()
```

##### `resetNotes` <a name="resetNotes" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetNotes"></a>

```java
public void resetNotes()
```

##### `resetNotificationEmailAddresses` <a name="resetNotificationEmailAddresses" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetNotificationEmailAddresses"></a>

```java
public void resetNotificationEmailAddresses()
```

##### `resetOwners` <a name="resetOwners" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetOwners"></a>

```java
public void resetOwners()
```

##### `resetPreferredSingleSignOnMode` <a name="resetPreferredSingleSignOnMode" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetPreferredSingleSignOnMode"></a>

```java
public void resetPreferredSingleSignOnMode()
```

##### `resetSamlSingleSignOn` <a name="resetSamlSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetSamlSingleSignOn"></a>

```java
public void resetSamlSingleSignOn()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUseExisting` <a name="resetUseExisting" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetUseExisting"></a>

```java
public void resetUseExisting()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal.ServicePrincipal;

ServicePrincipal.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal.ServicePrincipal;

ServicePrincipal.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal.ServicePrincipal;

ServicePrincipal.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.applicationTenantId">applicationTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoleIds">appRoleIds</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoles">appRoles</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList">ServicePrincipalAppRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.features">features</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList">ServicePrincipalFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.featureTags">featureTags</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList">ServicePrincipalFeatureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.homepageUrl">homepageUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.logoutUrl">logoutUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.oauth2PermissionScopeIds">oauth2PermissionScopeIds</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.oauth2PermissionScopes">oauth2PermissionScopes</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList">ServicePrincipalOauth2PermissionScopesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.samlMetadataUrl">samlMetadataUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.samlSingleSignOn">samlSingleSignOn</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference">ServicePrincipalSamlSingleSignOnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.servicePrincipalNames">servicePrincipalNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.signInAudience">signInAudience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference">ServicePrincipalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.accountEnabledInput">accountEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.alternativeNamesInput">alternativeNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoleAssignmentRequiredInput">appRoleAssignmentRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.featuresInput">featuresInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures">ServicePrincipalFeatures</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.featureTagsInput">featureTagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags">ServicePrincipalFeatureTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.loginUrlInput">loginUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notesInput">notesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notificationEmailAddressesInput">notificationEmailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.ownersInput">ownersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.preferredSingleSignOnModeInput">preferredSingleSignOnModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.samlSingleSignOnInput">samlSingleSignOnInput</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts">ServicePrincipalTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.useExistingInput">useExistingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.accountEnabled">accountEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.alternativeNames">alternativeNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoleAssignmentRequired">appRoleAssignmentRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.loginUrl">loginUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notes">notes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notificationEmailAddresses">notificationEmailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.owners">owners</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.preferredSingleSignOnMode">preferredSingleSignOnMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.useExisting">useExisting</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationTenantId`<sup>Required</sup> <a name="applicationTenantId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.applicationTenantId"></a>

```java
public java.lang.String getApplicationTenantId();
```

- *Type:* java.lang.String

---

##### `appRoleIds`<sup>Required</sup> <a name="appRoleIds" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoleIds"></a>

```java
public StringMap getAppRoleIds();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `appRoles`<sup>Required</sup> <a name="appRoles" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoles"></a>

```java
public ServicePrincipalAppRolesList getAppRoles();
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList">ServicePrincipalAppRolesList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.features"></a>

```java
public ServicePrincipalFeaturesList getFeatures();
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList">ServicePrincipalFeaturesList</a>

---

##### `featureTags`<sup>Required</sup> <a name="featureTags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.featureTags"></a>

```java
public ServicePrincipalFeatureTagsList getFeatureTags();
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList">ServicePrincipalFeatureTagsList</a>

---

##### `homepageUrl`<sup>Required</sup> <a name="homepageUrl" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.homepageUrl"></a>

```java
public java.lang.String getHomepageUrl();
```

- *Type:* java.lang.String

---

##### `logoutUrl`<sup>Required</sup> <a name="logoutUrl" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.logoutUrl"></a>

```java
public java.lang.String getLogoutUrl();
```

- *Type:* java.lang.String

---

##### `oauth2PermissionScopeIds`<sup>Required</sup> <a name="oauth2PermissionScopeIds" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.oauth2PermissionScopeIds"></a>

```java
public StringMap getOauth2PermissionScopeIds();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `oauth2PermissionScopes`<sup>Required</sup> <a name="oauth2PermissionScopes" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.oauth2PermissionScopes"></a>

```java
public ServicePrincipalOauth2PermissionScopesList getOauth2PermissionScopes();
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList">ServicePrincipalOauth2PermissionScopesList</a>

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.redirectUris"></a>

```java
public java.util.List<java.lang.String> getRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `samlMetadataUrl`<sup>Required</sup> <a name="samlMetadataUrl" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.samlMetadataUrl"></a>

```java
public java.lang.String getSamlMetadataUrl();
```

- *Type:* java.lang.String

---

##### `samlSingleSignOn`<sup>Required</sup> <a name="samlSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.samlSingleSignOn"></a>

```java
public ServicePrincipalSamlSingleSignOnOutputReference getSamlSingleSignOn();
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference">ServicePrincipalSamlSingleSignOnOutputReference</a>

---

##### `servicePrincipalNames`<sup>Required</sup> <a name="servicePrincipalNames" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.servicePrincipalNames"></a>

```java
public java.util.List<java.lang.String> getServicePrincipalNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `signInAudience`<sup>Required</sup> <a name="signInAudience" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.signInAudience"></a>

```java
public java.lang.String getSignInAudience();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.timeouts"></a>

```java
public ServicePrincipalTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference">ServicePrincipalTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `accountEnabledInput`<sup>Optional</sup> <a name="accountEnabledInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.accountEnabledInput"></a>

```java
public java.lang.Object getAccountEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `alternativeNamesInput`<sup>Optional</sup> <a name="alternativeNamesInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.alternativeNamesInput"></a>

```java
public java.util.List<java.lang.String> getAlternativeNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `appRoleAssignmentRequiredInput`<sup>Optional</sup> <a name="appRoleAssignmentRequiredInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoleAssignmentRequiredInput"></a>

```java
public java.lang.Object getAppRoleAssignmentRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `featuresInput`<sup>Optional</sup> <a name="featuresInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.featuresInput"></a>

```java
public java.lang.Object getFeaturesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures">ServicePrincipalFeatures</a>>

---

##### `featureTagsInput`<sup>Optional</sup> <a name="featureTagsInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.featureTagsInput"></a>

```java
public java.lang.Object getFeatureTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags">ServicePrincipalFeatureTags</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loginUrlInput`<sup>Optional</sup> <a name="loginUrlInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.loginUrlInput"></a>

```java
public java.lang.String getLoginUrlInput();
```

- *Type:* java.lang.String

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notesInput"></a>

```java
public java.lang.String getNotesInput();
```

- *Type:* java.lang.String

---

##### `notificationEmailAddressesInput`<sup>Optional</sup> <a name="notificationEmailAddressesInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notificationEmailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getNotificationEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ownersInput`<sup>Optional</sup> <a name="ownersInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.ownersInput"></a>

```java
public java.util.List<java.lang.String> getOwnersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preferredSingleSignOnModeInput`<sup>Optional</sup> <a name="preferredSingleSignOnModeInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.preferredSingleSignOnModeInput"></a>

```java
public java.lang.String getPreferredSingleSignOnModeInput();
```

- *Type:* java.lang.String

---

##### `samlSingleSignOnInput`<sup>Optional</sup> <a name="samlSingleSignOnInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.samlSingleSignOnInput"></a>

```java
public ServicePrincipalSamlSingleSignOn getSamlSingleSignOnInput();
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts">ServicePrincipalTimeouts</a>

---

##### `useExistingInput`<sup>Optional</sup> <a name="useExistingInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.useExistingInput"></a>

```java
public java.lang.Object getUseExistingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `accountEnabled`<sup>Required</sup> <a name="accountEnabled" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.accountEnabled"></a>

```java
public java.lang.Object getAccountEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `alternativeNames`<sup>Required</sup> <a name="alternativeNames" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.alternativeNames"></a>

```java
public java.util.List<java.lang.String> getAlternativeNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `appRoleAssignmentRequired`<sup>Required</sup> <a name="appRoleAssignmentRequired" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoleAssignmentRequired"></a>

```java
public java.lang.Object getAppRoleAssignmentRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loginUrl`<sup>Required</sup> <a name="loginUrl" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.loginUrl"></a>

```java
public java.lang.String getLoginUrl();
```

- *Type:* java.lang.String

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

---

##### `notificationEmailAddresses`<sup>Required</sup> <a name="notificationEmailAddresses" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notificationEmailAddresses"></a>

```java
public java.util.List<java.lang.String> getNotificationEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.owners"></a>

```java
public java.util.List<java.lang.String> getOwners();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preferredSingleSignOnMode`<sup>Required</sup> <a name="preferredSingleSignOnMode" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.preferredSingleSignOnMode"></a>

```java
public java.lang.String getPreferredSingleSignOnMode();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `useExisting`<sup>Required</sup> <a name="useExisting" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.useExisting"></a>

```java
public java.lang.Object getUseExisting();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalAppRoles <a name="ServicePrincipalAppRoles" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRoles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal.ServicePrincipalAppRoles;

ServicePrincipalAppRoles.builder()
    .build();
```


### ServicePrincipalConfig <a name="ServicePrincipalConfig" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal.ServicePrincipalConfig;

ServicePrincipalConfig.builder()
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
    .applicationId(java.lang.String)
//  .accountEnabled(java.lang.Boolean)
//  .accountEnabled(IResolvable)
//  .alternativeNames(java.util.List<java.lang.String>)
//  .appRoleAssignmentRequired(java.lang.Boolean)
//  .appRoleAssignmentRequired(IResolvable)
//  .description(java.lang.String)
//  .features(IResolvable)
//  .features(java.util.List<ServicePrincipalFeatures>)
//  .featureTags(IResolvable)
//  .featureTags(java.util.List<ServicePrincipalFeatureTags>)
//  .id(java.lang.String)
//  .loginUrl(java.lang.String)
//  .notes(java.lang.String)
//  .notificationEmailAddresses(java.util.List<java.lang.String>)
//  .owners(java.util.List<java.lang.String>)
//  .preferredSingleSignOnMode(java.lang.String)
//  .samlSingleSignOn(ServicePrincipalSamlSingleSignOn)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(ServicePrincipalTimeouts)
//  .useExisting(java.lang.Boolean)
//  .useExisting(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The application ID (client ID) of the application for which to create a service principal. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.accountEnabled">accountEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not the service principal account is enabled. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.alternativeNames">alternativeNames</a></code> | <code>java.util.List<java.lang.String></code> | A list of alternative names, used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.appRoleAssignmentRequired">appRoleAssignmentRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this service principal requires an app role assignment to a user or group before Azure AD will issue a user or access token to the application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the service principal provided for internal end-users. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.features">features</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures">ServicePrincipalFeatures</a>></code> | features block. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.featureTags">featureTags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags">ServicePrincipalFeatureTags</a>></code> | feature_tags block. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#id ServicePrincipal#id}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.loginUrl">loginUrl</a></code> | <code>java.lang.String</code> | The URL where the service provider redirects the user to Azure AD to authenticate. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.notes">notes</a></code> | <code>java.lang.String</code> | Free text field to capture information about the service principal, typically used for operational purposes. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.notificationEmailAddresses">notificationEmailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | List of email addresses where Azure AD sends a notification when the active certificate is near the expiration date. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.owners">owners</a></code> | <code>java.util.List<java.lang.String></code> | A list of object IDs of principals that will be granted ownership of the service principal. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.preferredSingleSignOnMode">preferredSingleSignOnMode</a></code> | <code>java.lang.String</code> | The single sign-on mode configured for this application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.samlSingleSignOn">samlSingleSignOn</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a></code> | saml_single_sign_on block. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A set of tags to apply to the service principal. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts">ServicePrincipalTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.useExisting">useExisting</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, the resource will return an existing service principal instead of failing with an error. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

The application ID (client ID) of the application for which to create a service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#application_id ServicePrincipal#application_id}

---

##### `accountEnabled`<sup>Optional</sup> <a name="accountEnabled" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.accountEnabled"></a>

```java
public java.lang.Object getAccountEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not the service principal account is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#account_enabled ServicePrincipal#account_enabled}

---

##### `alternativeNames`<sup>Optional</sup> <a name="alternativeNames" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.alternativeNames"></a>

```java
public java.util.List<java.lang.String> getAlternativeNames();
```

- *Type:* java.util.List<java.lang.String>

A list of alternative names, used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#alternative_names ServicePrincipal#alternative_names}

---

##### `appRoleAssignmentRequired`<sup>Optional</sup> <a name="appRoleAssignmentRequired" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.appRoleAssignmentRequired"></a>

```java
public java.lang.Object getAppRoleAssignmentRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this service principal requires an app role assignment to a user or group before Azure AD will issue a user or access token to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#app_role_assignment_required ServicePrincipal#app_role_assignment_required}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the service principal provided for internal end-users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#description ServicePrincipal#description}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.features"></a>

```java
public java.lang.Object getFeatures();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures">ServicePrincipalFeatures</a>>

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#features ServicePrincipal#features}

---

##### `featureTags`<sup>Optional</sup> <a name="featureTags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.featureTags"></a>

```java
public java.lang.Object getFeatureTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags">ServicePrincipalFeatureTags</a>>

feature_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#feature_tags ServicePrincipal#feature_tags}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#id ServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loginUrl`<sup>Optional</sup> <a name="loginUrl" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.loginUrl"></a>

```java
public java.lang.String getLoginUrl();
```

- *Type:* java.lang.String

The URL where the service provider redirects the user to Azure AD to authenticate.

Azure AD uses the URL to launch the application from Microsoft 365 or the Azure AD My Apps. When blank, Azure AD performs IdP-initiated sign-on for applications configured with SAML-based single sign-on

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#login_url ServicePrincipal#login_url}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

Free text field to capture information about the service principal, typically used for operational purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#notes ServicePrincipal#notes}

---

##### `notificationEmailAddresses`<sup>Optional</sup> <a name="notificationEmailAddresses" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.notificationEmailAddresses"></a>

```java
public java.util.List<java.lang.String> getNotificationEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

List of email addresses where Azure AD sends a notification when the active certificate is near the expiration date.

This is only for the certificates used to sign the SAML token issued for Azure AD Gallery applications

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#notification_email_addresses ServicePrincipal#notification_email_addresses}

---

##### `owners`<sup>Optional</sup> <a name="owners" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.owners"></a>

```java
public java.util.List<java.lang.String> getOwners();
```

- *Type:* java.util.List<java.lang.String>

A list of object IDs of principals that will be granted ownership of the service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#owners ServicePrincipal#owners}

---

##### `preferredSingleSignOnMode`<sup>Optional</sup> <a name="preferredSingleSignOnMode" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.preferredSingleSignOnMode"></a>

```java
public java.lang.String getPreferredSingleSignOnMode();
```

- *Type:* java.lang.String

The single sign-on mode configured for this application.

Azure AD uses the preferred single sign-on mode to launch the application from Microsoft 365 or the Azure AD My Apps

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#preferred_single_sign_on_mode ServicePrincipal#preferred_single_sign_on_mode}

---

##### `samlSingleSignOn`<sup>Optional</sup> <a name="samlSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.samlSingleSignOn"></a>

```java
public ServicePrincipalSamlSingleSignOn getSamlSingleSignOn();
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a>

saml_single_sign_on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#saml_single_sign_on ServicePrincipal#saml_single_sign_on}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

A set of tags to apply to the service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#tags ServicePrincipal#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.timeouts"></a>

```java
public ServicePrincipalTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts">ServicePrincipalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#timeouts ServicePrincipal#timeouts}

---

##### `useExisting`<sup>Optional</sup> <a name="useExisting" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.useExisting"></a>

```java
public java.lang.Object getUseExisting();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, the resource will return an existing service principal instead of failing with an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#use_existing ServicePrincipal#use_existing}

---

### ServicePrincipalFeatures <a name="ServicePrincipalFeatures" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal.ServicePrincipalFeatures;

ServicePrincipalFeatures.builder()
//  .customSingleSignOnApp(java.lang.Boolean)
//  .customSingleSignOnApp(IResolvable)
//  .enterpriseApplication(java.lang.Boolean)
//  .enterpriseApplication(IResolvable)
//  .galleryApplication(java.lang.Boolean)
//  .galleryApplication(IResolvable)
//  .visibleToUsers(java.lang.Boolean)
//  .visibleToUsers(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.customSingleSignOnApp">customSingleSignOnApp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this service principal represents a custom SAML application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.enterpriseApplication">enterpriseApplication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this service principal represents an Enterprise Application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.galleryApplication">galleryApplication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this service principal represents a gallery application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.visibleToUsers">visibleToUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this app is visible to users in My Apps and Office 365 Launcher. |

---

##### `customSingleSignOnApp`<sup>Optional</sup> <a name="customSingleSignOnApp" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.customSingleSignOnApp"></a>

```java
public java.lang.Object getCustomSingleSignOnApp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this service principal represents a custom SAML application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#custom_single_sign_on_app ServicePrincipal#custom_single_sign_on_app}

---

##### `enterpriseApplication`<sup>Optional</sup> <a name="enterpriseApplication" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.enterpriseApplication"></a>

```java
public java.lang.Object getEnterpriseApplication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this service principal represents an Enterprise Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#enterprise_application ServicePrincipal#enterprise_application}

---

##### `galleryApplication`<sup>Optional</sup> <a name="galleryApplication" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.galleryApplication"></a>

```java
public java.lang.Object getGalleryApplication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this service principal represents a gallery application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#gallery_application ServicePrincipal#gallery_application}

---

##### `visibleToUsers`<sup>Optional</sup> <a name="visibleToUsers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.visibleToUsers"></a>

```java
public java.lang.Object getVisibleToUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this app is visible to users in My Apps and Office 365 Launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#visible_to_users ServicePrincipal#visible_to_users}

---

### ServicePrincipalFeatureTags <a name="ServicePrincipalFeatureTags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal.ServicePrincipalFeatureTags;

ServicePrincipalFeatureTags.builder()
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
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.customSingleSignOn">customSingleSignOn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this service principal represents a custom SAML application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.enterprise">enterprise</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this service principal represents an Enterprise Application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.gallery">gallery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this service principal represents a gallery application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.hide">hide</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this app is invisible to users in My Apps and Office 365 Launcher. |

---

##### `customSingleSignOn`<sup>Optional</sup> <a name="customSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.customSingleSignOn"></a>

```java
public java.lang.Object getCustomSingleSignOn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this service principal represents a custom SAML application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#custom_single_sign_on ServicePrincipal#custom_single_sign_on}

---

##### `enterprise`<sup>Optional</sup> <a name="enterprise" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.enterprise"></a>

```java
public java.lang.Object getEnterprise();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this service principal represents an Enterprise Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#enterprise ServicePrincipal#enterprise}

---

##### `gallery`<sup>Optional</sup> <a name="gallery" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.gallery"></a>

```java
public java.lang.Object getGallery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this service principal represents a gallery application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#gallery ServicePrincipal#gallery}

---

##### `hide`<sup>Optional</sup> <a name="hide" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.hide"></a>

```java
public java.lang.Object getHide();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this app is invisible to users in My Apps and Office 365 Launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#hide ServicePrincipal#hide}

---

### ServicePrincipalOauth2PermissionScopes <a name="ServicePrincipalOauth2PermissionScopes" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal.ServicePrincipalOauth2PermissionScopes;

ServicePrincipalOauth2PermissionScopes.builder()
    .build();
```


### ServicePrincipalSamlSingleSignOn <a name="ServicePrincipalSamlSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal.ServicePrincipalSamlSingleSignOn;

ServicePrincipalSamlSingleSignOn.builder()
//  .relayState(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn.property.relayState">relayState</a></code> | <code>java.lang.String</code> | The relative URI the service provider would redirect to after completion of the single sign-on flow. |

---

##### `relayState`<sup>Optional</sup> <a name="relayState" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn.property.relayState"></a>

```java
public java.lang.String getRelayState();
```

- *Type:* java.lang.String

The relative URI the service provider would redirect to after completion of the single sign-on flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#relay_state ServicePrincipal#relay_state}

---

### ServicePrincipalTimeouts <a name="ServicePrincipalTimeouts" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal.ServicePrincipalTimeouts;

ServicePrincipalTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#create ServicePrincipal#create}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#delete ServicePrincipal#delete}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#read ServicePrincipal#read}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#update ServicePrincipal#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#create ServicePrincipal#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#delete ServicePrincipal#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#read ServicePrincipal#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/service_principal#update ServicePrincipal#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicePrincipalAppRolesList <a name="ServicePrincipalAppRolesList" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal.ServicePrincipalAppRolesList;

new ServicePrincipalAppRolesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.get"></a>

```java
public ServicePrincipalAppRolesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ServicePrincipalAppRolesOutputReference <a name="ServicePrincipalAppRolesOutputReference" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal.ServicePrincipalAppRolesOutputReference;

new ServicePrincipalAppRolesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.allowedMemberTypes">allowedMemberTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRoles">ServicePrincipalAppRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedMemberTypes`<sup>Required</sup> <a name="allowedMemberTypes" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.allowedMemberTypes"></a>

```java
public java.util.List<java.lang.String> getAllowedMemberTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.internalValue"></a>

```java
public ServicePrincipalAppRoles getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRoles">ServicePrincipalAppRoles</a>

---


### ServicePrincipalFeaturesList <a name="ServicePrincipalFeaturesList" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal.ServicePrincipalFeaturesList;

new ServicePrincipalFeaturesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.get"></a>

```java
public ServicePrincipalFeaturesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures">ServicePrincipalFeatures</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures">ServicePrincipalFeatures</a>>

---


### ServicePrincipalFeaturesOutputReference <a name="ServicePrincipalFeaturesOutputReference" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal.ServicePrincipalFeaturesOutputReference;

new ServicePrincipalFeaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resetCustomSingleSignOnApp">resetCustomSingleSignOnApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resetEnterpriseApplication">resetEnterpriseApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resetGalleryApplication">resetGalleryApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resetVisibleToUsers">resetVisibleToUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomSingleSignOnApp` <a name="resetCustomSingleSignOnApp" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resetCustomSingleSignOnApp"></a>

```java
public void resetCustomSingleSignOnApp()
```

##### `resetEnterpriseApplication` <a name="resetEnterpriseApplication" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resetEnterpriseApplication"></a>

```java
public void resetEnterpriseApplication()
```

##### `resetGalleryApplication` <a name="resetGalleryApplication" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resetGalleryApplication"></a>

```java
public void resetGalleryApplication()
```

##### `resetVisibleToUsers` <a name="resetVisibleToUsers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resetVisibleToUsers"></a>

```java
public void resetVisibleToUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.customSingleSignOnAppInput">customSingleSignOnAppInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.enterpriseApplicationInput">enterpriseApplicationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.galleryApplicationInput">galleryApplicationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.visibleToUsersInput">visibleToUsersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.customSingleSignOnApp">customSingleSignOnApp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.enterpriseApplication">enterpriseApplication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.galleryApplication">galleryApplication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.visibleToUsers">visibleToUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures">ServicePrincipalFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customSingleSignOnAppInput`<sup>Optional</sup> <a name="customSingleSignOnAppInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.customSingleSignOnAppInput"></a>

```java
public java.lang.Object getCustomSingleSignOnAppInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enterpriseApplicationInput`<sup>Optional</sup> <a name="enterpriseApplicationInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.enterpriseApplicationInput"></a>

```java
public java.lang.Object getEnterpriseApplicationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `galleryApplicationInput`<sup>Optional</sup> <a name="galleryApplicationInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.galleryApplicationInput"></a>

```java
public java.lang.Object getGalleryApplicationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `visibleToUsersInput`<sup>Optional</sup> <a name="visibleToUsersInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.visibleToUsersInput"></a>

```java
public java.lang.Object getVisibleToUsersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customSingleSignOnApp`<sup>Required</sup> <a name="customSingleSignOnApp" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.customSingleSignOnApp"></a>

```java
public java.lang.Object getCustomSingleSignOnApp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enterpriseApplication`<sup>Required</sup> <a name="enterpriseApplication" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.enterpriseApplication"></a>

```java
public java.lang.Object getEnterpriseApplication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `galleryApplication`<sup>Required</sup> <a name="galleryApplication" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.galleryApplication"></a>

```java
public java.lang.Object getGalleryApplication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `visibleToUsers`<sup>Required</sup> <a name="visibleToUsers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.visibleToUsers"></a>

```java
public java.lang.Object getVisibleToUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures">ServicePrincipalFeatures</a>

---


### ServicePrincipalFeatureTagsList <a name="ServicePrincipalFeatureTagsList" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal.ServicePrincipalFeatureTagsList;

new ServicePrincipalFeatureTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.get"></a>

```java
public ServicePrincipalFeatureTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags">ServicePrincipalFeatureTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags">ServicePrincipalFeatureTags</a>>

---


### ServicePrincipalFeatureTagsOutputReference <a name="ServicePrincipalFeatureTagsOutputReference" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal.ServicePrincipalFeatureTagsOutputReference;

new ServicePrincipalFeatureTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resetCustomSingleSignOn">resetCustomSingleSignOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resetEnterprise">resetEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resetGallery">resetGallery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resetHide">resetHide</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomSingleSignOn` <a name="resetCustomSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resetCustomSingleSignOn"></a>

```java
public void resetCustomSingleSignOn()
```

##### `resetEnterprise` <a name="resetEnterprise" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resetEnterprise"></a>

```java
public void resetEnterprise()
```

##### `resetGallery` <a name="resetGallery" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resetGallery"></a>

```java
public void resetGallery()
```

##### `resetHide` <a name="resetHide" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resetHide"></a>

```java
public void resetHide()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.customSingleSignOnInput">customSingleSignOnInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.enterpriseInput">enterpriseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.galleryInput">galleryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.hideInput">hideInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.customSingleSignOn">customSingleSignOn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.enterprise">enterprise</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.gallery">gallery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.hide">hide</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags">ServicePrincipalFeatureTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customSingleSignOnInput`<sup>Optional</sup> <a name="customSingleSignOnInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.customSingleSignOnInput"></a>

```java
public java.lang.Object getCustomSingleSignOnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enterpriseInput`<sup>Optional</sup> <a name="enterpriseInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.enterpriseInput"></a>

```java
public java.lang.Object getEnterpriseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `galleryInput`<sup>Optional</sup> <a name="galleryInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.galleryInput"></a>

```java
public java.lang.Object getGalleryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideInput`<sup>Optional</sup> <a name="hideInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.hideInput"></a>

```java
public java.lang.Object getHideInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customSingleSignOn`<sup>Required</sup> <a name="customSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.customSingleSignOn"></a>

```java
public java.lang.Object getCustomSingleSignOn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enterprise`<sup>Required</sup> <a name="enterprise" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.enterprise"></a>

```java
public java.lang.Object getEnterprise();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gallery`<sup>Required</sup> <a name="gallery" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.gallery"></a>

```java
public java.lang.Object getGallery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hide`<sup>Required</sup> <a name="hide" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.hide"></a>

```java
public java.lang.Object getHide();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags">ServicePrincipalFeatureTags</a>

---


### ServicePrincipalOauth2PermissionScopesList <a name="ServicePrincipalOauth2PermissionScopesList" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal.ServicePrincipalOauth2PermissionScopesList;

new ServicePrincipalOauth2PermissionScopesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.get"></a>

```java
public ServicePrincipalOauth2PermissionScopesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ServicePrincipalOauth2PermissionScopesOutputReference <a name="ServicePrincipalOauth2PermissionScopesOutputReference" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal.ServicePrincipalOauth2PermissionScopesOutputReference;

new ServicePrincipalOauth2PermissionScopesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDescription">adminConsentDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDisplayName">adminConsentDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDescription">userConsentDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDisplayName">userConsentDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopes">ServicePrincipalOauth2PermissionScopes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminConsentDescription`<sup>Required</sup> <a name="adminConsentDescription" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDescription"></a>

```java
public java.lang.String getAdminConsentDescription();
```

- *Type:* java.lang.String

---

##### `adminConsentDisplayName`<sup>Required</sup> <a name="adminConsentDisplayName" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDisplayName"></a>

```java
public java.lang.String getAdminConsentDisplayName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userConsentDescription`<sup>Required</sup> <a name="userConsentDescription" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDescription"></a>

```java
public java.lang.String getUserConsentDescription();
```

- *Type:* java.lang.String

---

##### `userConsentDisplayName`<sup>Required</sup> <a name="userConsentDisplayName" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDisplayName"></a>

```java
public java.lang.String getUserConsentDisplayName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.internalValue"></a>

```java
public ServicePrincipalOauth2PermissionScopes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopes">ServicePrincipalOauth2PermissionScopes</a>

---


### ServicePrincipalSamlSingleSignOnOutputReference <a name="ServicePrincipalSamlSingleSignOnOutputReference" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal.ServicePrincipalSamlSingleSignOnOutputReference;

new ServicePrincipalSamlSingleSignOnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.resetRelayState">resetRelayState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRelayState` <a name="resetRelayState" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.resetRelayState"></a>

```java
public void resetRelayState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.relayStateInput">relayStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.relayState">relayState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `relayStateInput`<sup>Optional</sup> <a name="relayStateInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.relayStateInput"></a>

```java
public java.lang.String getRelayStateInput();
```

- *Type:* java.lang.String

---

##### `relayState`<sup>Required</sup> <a name="relayState" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.relayState"></a>

```java
public java.lang.String getRelayState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.internalValue"></a>

```java
public ServicePrincipalSamlSingleSignOn getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a>

---


### ServicePrincipalTimeoutsOutputReference <a name="ServicePrincipalTimeoutsOutputReference" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal.ServicePrincipalTimeoutsOutputReference;

new ServicePrincipalTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts">ServicePrincipalTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts">ServicePrincipalTimeouts</a>

---



