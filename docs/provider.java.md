# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-azuread.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureadProvider <a name="AzureadProvider" id="@cdktf/provider-azuread.provider.AzureadProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs azuread}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.provider.AzureadProvider;

AzureadProvider.Builder.create(Construct scope, java.lang.String id)
//  .alias(java.lang.String)
//  .clientCertificate(java.lang.String)
//  .clientCertificatePassword(java.lang.String)
//  .clientCertificatePath(java.lang.String)
//  .clientId(java.lang.String)
//  .clientIdFilePath(java.lang.String)
//  .clientSecret(java.lang.String)
//  .clientSecretFilePath(java.lang.String)
//  .disableTerraformPartnerId(java.lang.Boolean)
//  .disableTerraformPartnerId(IResolvable)
//  .environment(java.lang.String)
//  .metadataHost(java.lang.String)
//  .msiEndpoint(java.lang.String)
//  .oidcRequestToken(java.lang.String)
//  .oidcRequestUrl(java.lang.String)
//  .oidcToken(java.lang.String)
//  .oidcTokenFilePath(java.lang.String)
//  .partnerId(java.lang.String)
//  .tenantId(java.lang.String)
//  .useAksWorkloadIdentity(java.lang.Boolean)
//  .useAksWorkloadIdentity(IResolvable)
//  .useCli(java.lang.Boolean)
//  .useCli(IResolvable)
//  .useMsi(java.lang.Boolean)
//  .useMsi(IResolvable)
//  .useOidc(java.lang.Boolean)
//  .useOidc(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientCertificatePassword">clientCertificatePassword</a></code> | <code>java.lang.String</code> | The password to decrypt the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientCertificatePath">clientCertificatePath</a></code> | <code>java.lang.String</code> | The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | The Client ID which should be used for service principal authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientIdFilePath">clientIdFilePath</a></code> | <code>java.lang.String</code> | The path to a file containing the Client ID which should be used for service principal authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The application password to use when authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientSecretFilePath">clientSecretFilePath</a></code> | <code>java.lang.String</code> | The path to a file containing the application password to use when authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.disableTerraformPartnerId">disableTerraformPartnerId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable the Terraform Partner ID, which is used if a custom `partner_id` isn't specified. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | The cloud environment which should be used. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.metadataHost">metadataHost</a></code> | <code>java.lang.String</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.msiEndpoint">msiEndpoint</a></code> | <code>java.lang.String</code> | The path to a custom endpoint for Managed Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.oidcRequestToken">oidcRequestToken</a></code> | <code>java.lang.String</code> | The bearer token for the request to the OIDC provider. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.oidcRequestUrl">oidcRequestUrl</a></code> | <code>java.lang.String</code> | The URL for the OIDC provider from which to request an ID token. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.oidcToken">oidcToken</a></code> | <code>java.lang.String</code> | The ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.oidcTokenFilePath">oidcTokenFilePath</a></code> | <code>java.lang.String</code> | The path to a file containing an ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.partnerId">partnerId</a></code> | <code>java.lang.String</code> | A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The Tenant ID which should be used. Works with all authentication methods except Managed Identity. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.useAksWorkloadIdentity">useAksWorkloadIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow Azure AKS Workload Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.useCli">useCli</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow Azure CLI to be used for Authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.useMsi">useMsi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow Managed Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.useOidc">useOidc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow OpenID Connect to be used for authentication. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#alias AzureadProvider#alias}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientCertificate"></a>

- *Type:* java.lang.String

Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#client_certificate AzureadProvider#client_certificate}

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientCertificatePassword"></a>

- *Type:* java.lang.String

The password to decrypt the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#client_certificate_password AzureadProvider#client_certificate_password}

---

##### `clientCertificatePath`<sup>Optional</sup> <a name="clientCertificatePath" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientCertificatePath"></a>

- *Type:* java.lang.String

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#client_certificate_path AzureadProvider#client_certificate_path}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

The Client ID which should be used for service principal authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#client_id AzureadProvider#client_id}

---

##### `clientIdFilePath`<sup>Optional</sup> <a name="clientIdFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientIdFilePath"></a>

- *Type:* java.lang.String

The path to a file containing the Client ID which should be used for service principal authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#client_id_file_path AzureadProvider#client_id_file_path}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

The application password to use when authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#client_secret AzureadProvider#client_secret}

---

##### `clientSecretFilePath`<sup>Optional</sup> <a name="clientSecretFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientSecretFilePath"></a>

- *Type:* java.lang.String

The path to a file containing the application password to use when authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#client_secret_file_path AzureadProvider#client_secret_file_path}

---

##### `disableTerraformPartnerId`<sup>Optional</sup> <a name="disableTerraformPartnerId" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.disableTerraformPartnerId"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable the Terraform Partner ID, which is used if a custom `partner_id` isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#disable_terraform_partner_id AzureadProvider#disable_terraform_partner_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

The cloud environment which should be used.

Possible values are: `global` (also `public`), `usgovernmentl4` (also `usgovernment`), `usgovernmentl5` (also `dod`), and `china`. Defaults to `global`. Not used and should not be specified when `metadata_host` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#environment AzureadProvider#environment}

---

##### `metadataHost`<sup>Optional</sup> <a name="metadataHost" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.metadataHost"></a>

- *Type:* java.lang.String

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#metadata_host AzureadProvider#metadata_host}

---

##### `msiEndpoint`<sup>Optional</sup> <a name="msiEndpoint" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.msiEndpoint"></a>

- *Type:* java.lang.String

The path to a custom endpoint for Managed Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#msi_endpoint AzureadProvider#msi_endpoint}

---

##### `oidcRequestToken`<sup>Optional</sup> <a name="oidcRequestToken" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.oidcRequestToken"></a>

- *Type:* java.lang.String

The bearer token for the request to the OIDC provider.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#oidc_request_token AzureadProvider#oidc_request_token}

---

##### `oidcRequestUrl`<sup>Optional</sup> <a name="oidcRequestUrl" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.oidcRequestUrl"></a>

- *Type:* java.lang.String

The URL for the OIDC provider from which to request an ID token.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#oidc_request_url AzureadProvider#oidc_request_url}

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.oidcToken"></a>

- *Type:* java.lang.String

The ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#oidc_token AzureadProvider#oidc_token}

---

##### `oidcTokenFilePath`<sup>Optional</sup> <a name="oidcTokenFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.oidcTokenFilePath"></a>

- *Type:* java.lang.String

The path to a file containing an ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#oidc_token_file_path AzureadProvider#oidc_token_file_path}

---

##### `partnerId`<sup>Optional</sup> <a name="partnerId" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.partnerId"></a>

- *Type:* java.lang.String

A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#partner_id AzureadProvider#partner_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

The Tenant ID which should be used. Works with all authentication methods except Managed Identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#tenant_id AzureadProvider#tenant_id}

---

##### `useAksWorkloadIdentity`<sup>Optional</sup> <a name="useAksWorkloadIdentity" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.useAksWorkloadIdentity"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow Azure AKS Workload Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#use_aks_workload_identity AzureadProvider#use_aks_workload_identity}

---

##### `useCli`<sup>Optional</sup> <a name="useCli" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.useCli"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow Azure CLI to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#use_cli AzureadProvider#use_cli}

---

##### `useMsi`<sup>Optional</sup> <a name="useMsi" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.useMsi"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow Managed Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#use_msi AzureadProvider#use_msi}

---

##### `useOidc`<sup>Optional</sup> <a name="useOidc" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.useOidc"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow OpenID Connect to be used for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#use_oidc AzureadProvider#use_oidc}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificatePassword">resetClientCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificatePath">resetClientCertificatePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientIdFilePath">resetClientIdFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientSecretFilePath">resetClientSecretFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetDisableTerraformPartnerId">resetDisableTerraformPartnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetMetadataHost">resetMetadataHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetMsiEndpoint">resetMsiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetOidcRequestToken">resetOidcRequestToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetOidcRequestUrl">resetOidcRequestUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetOidcToken">resetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetOidcTokenFilePath">resetOidcTokenFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetPartnerId">resetPartnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetUseAksWorkloadIdentity">resetUseAksWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetUseCli">resetUseCli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetUseMsi">resetUseMsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetUseOidc">resetUseOidc</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.provider.AzureadProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.provider.AzureadProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.provider.AzureadProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.provider.AzureadProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.provider.AzureadProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.provider.AzureadProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azuread.provider.AzureadProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.provider.AzureadProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.provider.AzureadProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-azuread.provider.AzureadProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificate"></a>

```java
public void resetClientCertificate()
```

##### `resetClientCertificatePassword` <a name="resetClientCertificatePassword" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificatePassword"></a>

```java
public void resetClientCertificatePassword()
```

##### `resetClientCertificatePath` <a name="resetClientCertificatePath" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificatePath"></a>

```java
public void resetClientCertificatePath()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientIdFilePath` <a name="resetClientIdFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientIdFilePath"></a>

```java
public void resetClientIdFilePath()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetClientSecretFilePath` <a name="resetClientSecretFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientSecretFilePath"></a>

```java
public void resetClientSecretFilePath()
```

##### `resetDisableTerraformPartnerId` <a name="resetDisableTerraformPartnerId" id="@cdktf/provider-azuread.provider.AzureadProvider.resetDisableTerraformPartnerId"></a>

```java
public void resetDisableTerraformPartnerId()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-azuread.provider.AzureadProvider.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetMetadataHost` <a name="resetMetadataHost" id="@cdktf/provider-azuread.provider.AzureadProvider.resetMetadataHost"></a>

```java
public void resetMetadataHost()
```

##### `resetMsiEndpoint` <a name="resetMsiEndpoint" id="@cdktf/provider-azuread.provider.AzureadProvider.resetMsiEndpoint"></a>

```java
public void resetMsiEndpoint()
```

##### `resetOidcRequestToken` <a name="resetOidcRequestToken" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOidcRequestToken"></a>

```java
public void resetOidcRequestToken()
```

##### `resetOidcRequestUrl` <a name="resetOidcRequestUrl" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOidcRequestUrl"></a>

```java
public void resetOidcRequestUrl()
```

##### `resetOidcToken` <a name="resetOidcToken" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOidcToken"></a>

```java
public void resetOidcToken()
```

##### `resetOidcTokenFilePath` <a name="resetOidcTokenFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOidcTokenFilePath"></a>

```java
public void resetOidcTokenFilePath()
```

##### `resetPartnerId` <a name="resetPartnerId" id="@cdktf/provider-azuread.provider.AzureadProvider.resetPartnerId"></a>

```java
public void resetPartnerId()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-azuread.provider.AzureadProvider.resetTenantId"></a>

```java
public void resetTenantId()
```

##### `resetUseAksWorkloadIdentity` <a name="resetUseAksWorkloadIdentity" id="@cdktf/provider-azuread.provider.AzureadProvider.resetUseAksWorkloadIdentity"></a>

```java
public void resetUseAksWorkloadIdentity()
```

##### `resetUseCli` <a name="resetUseCli" id="@cdktf/provider-azuread.provider.AzureadProvider.resetUseCli"></a>

```java
public void resetUseCli()
```

##### `resetUseMsi` <a name="resetUseMsi" id="@cdktf/provider-azuread.provider.AzureadProvider.resetUseMsi"></a>

```java
public void resetUseMsi()
```

##### `resetUseOidc` <a name="resetUseOidc" id="@cdktf/provider-azuread.provider.AzureadProvider.resetUseOidc"></a>

```java
public void resetUseOidc()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AzureadProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.provider.AzureadProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azuread.provider.AzureadProvider;

AzureadProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.provider.AzureadProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.provider.AzureadProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azuread.provider.AzureadProvider;

AzureadProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.provider.AzureadProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-azuread.provider.AzureadProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.azuread.provider.AzureadProvider;

AzureadProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.provider.AzureadProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azuread.provider.AzureadProvider;

AzureadProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AzureadProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AzureadProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AzureadProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AzureadProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AzureadProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificateInput">clientCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePasswordInput">clientCertificatePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePathInput">clientCertificatePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdFilePathInput">clientIdFilePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretFilePathInput">clientSecretFilePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.disableTerraformPartnerIdInput">disableTerraformPartnerIdInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.metadataHostInput">metadataHostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.msiEndpointInput">msiEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestTokenInput">oidcRequestTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestUrlInput">oidcRequestUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenFilePathInput">oidcTokenFilePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenInput">oidcTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.partnerIdInput">partnerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useAksWorkloadIdentityInput">useAksWorkloadIdentityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useCliInput">useCliInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useMsiInput">useMsiInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useOidcInput">useOidcInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePath">clientCertificatePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdFilePath">clientIdFilePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretFilePath">clientSecretFilePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.disableTerraformPartnerId">disableTerraformPartnerId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.metadataHost">metadataHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.msiEndpoint">msiEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestToken">oidcRequestToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestUrl">oidcRequestUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcToken">oidcToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenFilePath">oidcTokenFilePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.partnerId">partnerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useAksWorkloadIdentity">useAksWorkloadIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useCli">useCli</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useMsi">useMsi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useOidc">useOidc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.provider.AzureadProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.provider.AzureadProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.provider.AzureadProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.provider.AzureadProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-azuread.provider.AzureadProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.provider.AzureadProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.provider.AzureadProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-azuread.provider.AzureadProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azuread.provider.AzureadProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificateInput"></a>

```java
public java.lang.String getClientCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientCertificatePasswordInput`<sup>Optional</sup> <a name="clientCertificatePasswordInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePasswordInput"></a>

```java
public java.lang.String getClientCertificatePasswordInput();
```

- *Type:* java.lang.String

---

##### `clientCertificatePathInput`<sup>Optional</sup> <a name="clientCertificatePathInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePathInput"></a>

```java
public java.lang.String getClientCertificatePathInput();
```

- *Type:* java.lang.String

---

##### `clientIdFilePathInput`<sup>Optional</sup> <a name="clientIdFilePathInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdFilePathInput"></a>

```java
public java.lang.String getClientIdFilePathInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretFilePathInput`<sup>Optional</sup> <a name="clientSecretFilePathInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretFilePathInput"></a>

```java
public java.lang.String getClientSecretFilePathInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `disableTerraformPartnerIdInput`<sup>Optional</sup> <a name="disableTerraformPartnerIdInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.disableTerraformPartnerIdInput"></a>

```java
public java.lang.Object getDisableTerraformPartnerIdInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `metadataHostInput`<sup>Optional</sup> <a name="metadataHostInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.metadataHostInput"></a>

```java
public java.lang.String getMetadataHostInput();
```

- *Type:* java.lang.String

---

##### `msiEndpointInput`<sup>Optional</sup> <a name="msiEndpointInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.msiEndpointInput"></a>

```java
public java.lang.String getMsiEndpointInput();
```

- *Type:* java.lang.String

---

##### `oidcRequestTokenInput`<sup>Optional</sup> <a name="oidcRequestTokenInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestTokenInput"></a>

```java
public java.lang.String getOidcRequestTokenInput();
```

- *Type:* java.lang.String

---

##### `oidcRequestUrlInput`<sup>Optional</sup> <a name="oidcRequestUrlInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestUrlInput"></a>

```java
public java.lang.String getOidcRequestUrlInput();
```

- *Type:* java.lang.String

---

##### `oidcTokenFilePathInput`<sup>Optional</sup> <a name="oidcTokenFilePathInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenFilePathInput"></a>

```java
public java.lang.String getOidcTokenFilePathInput();
```

- *Type:* java.lang.String

---

##### `oidcTokenInput`<sup>Optional</sup> <a name="oidcTokenInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenInput"></a>

```java
public java.lang.String getOidcTokenInput();
```

- *Type:* java.lang.String

---

##### `partnerIdInput`<sup>Optional</sup> <a name="partnerIdInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.partnerIdInput"></a>

```java
public java.lang.String getPartnerIdInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `useAksWorkloadIdentityInput`<sup>Optional</sup> <a name="useAksWorkloadIdentityInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useAksWorkloadIdentityInput"></a>

```java
public java.lang.Object getUseAksWorkloadIdentityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useCliInput`<sup>Optional</sup> <a name="useCliInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useCliInput"></a>

```java
public java.lang.Object getUseCliInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useMsiInput`<sup>Optional</sup> <a name="useMsiInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useMsiInput"></a>

```java
public java.lang.Object getUseMsiInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useOidcInput`<sup>Optional</sup> <a name="useOidcInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useOidcInput"></a>

```java
public java.lang.Object getUseOidcInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePassword"></a>

```java
public java.lang.String getClientCertificatePassword();
```

- *Type:* java.lang.String

---

##### `clientCertificatePath`<sup>Optional</sup> <a name="clientCertificatePath" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePath"></a>

```java
public java.lang.String getClientCertificatePath();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientIdFilePath`<sup>Optional</sup> <a name="clientIdFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdFilePath"></a>

```java
public java.lang.String getClientIdFilePath();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `clientSecretFilePath`<sup>Optional</sup> <a name="clientSecretFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretFilePath"></a>

```java
public java.lang.String getClientSecretFilePath();
```

- *Type:* java.lang.String

---

##### `disableTerraformPartnerId`<sup>Optional</sup> <a name="disableTerraformPartnerId" id="@cdktf/provider-azuread.provider.AzureadProvider.property.disableTerraformPartnerId"></a>

```java
public java.lang.Object getDisableTerraformPartnerId();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azuread.provider.AzureadProvider.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `metadataHost`<sup>Optional</sup> <a name="metadataHost" id="@cdktf/provider-azuread.provider.AzureadProvider.property.metadataHost"></a>

```java
public java.lang.String getMetadataHost();
```

- *Type:* java.lang.String

---

##### `msiEndpoint`<sup>Optional</sup> <a name="msiEndpoint" id="@cdktf/provider-azuread.provider.AzureadProvider.property.msiEndpoint"></a>

```java
public java.lang.String getMsiEndpoint();
```

- *Type:* java.lang.String

---

##### `oidcRequestToken`<sup>Optional</sup> <a name="oidcRequestToken" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestToken"></a>

```java
public java.lang.String getOidcRequestToken();
```

- *Type:* java.lang.String

---

##### `oidcRequestUrl`<sup>Optional</sup> <a name="oidcRequestUrl" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestUrl"></a>

```java
public java.lang.String getOidcRequestUrl();
```

- *Type:* java.lang.String

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcToken"></a>

```java
public java.lang.String getOidcToken();
```

- *Type:* java.lang.String

---

##### `oidcTokenFilePath`<sup>Optional</sup> <a name="oidcTokenFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenFilePath"></a>

```java
public java.lang.String getOidcTokenFilePath();
```

- *Type:* java.lang.String

---

##### `partnerId`<sup>Optional</sup> <a name="partnerId" id="@cdktf/provider-azuread.provider.AzureadProvider.property.partnerId"></a>

```java
public java.lang.String getPartnerId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azuread.provider.AzureadProvider.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `useAksWorkloadIdentity`<sup>Optional</sup> <a name="useAksWorkloadIdentity" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useAksWorkloadIdentity"></a>

```java
public java.lang.Object getUseAksWorkloadIdentity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useCli`<sup>Optional</sup> <a name="useCli" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useCli"></a>

```java
public java.lang.Object getUseCli();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useMsi`<sup>Optional</sup> <a name="useMsi" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useMsi"></a>

```java
public java.lang.Object getUseMsi();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useOidc`<sup>Optional</sup> <a name="useOidc" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useOidc"></a>

```java
public java.lang.Object getUseOidc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.provider.AzureadProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AzureadProviderConfig <a name="AzureadProviderConfig" id="@cdktf/provider-azuread.provider.AzureadProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.provider.AzureadProviderConfig;

AzureadProviderConfig.builder()
//  .alias(java.lang.String)
//  .clientCertificate(java.lang.String)
//  .clientCertificatePassword(java.lang.String)
//  .clientCertificatePath(java.lang.String)
//  .clientId(java.lang.String)
//  .clientIdFilePath(java.lang.String)
//  .clientSecret(java.lang.String)
//  .clientSecretFilePath(java.lang.String)
//  .disableTerraformPartnerId(java.lang.Boolean)
//  .disableTerraformPartnerId(IResolvable)
//  .environment(java.lang.String)
//  .metadataHost(java.lang.String)
//  .msiEndpoint(java.lang.String)
//  .oidcRequestToken(java.lang.String)
//  .oidcRequestUrl(java.lang.String)
//  .oidcToken(java.lang.String)
//  .oidcTokenFilePath(java.lang.String)
//  .partnerId(java.lang.String)
//  .tenantId(java.lang.String)
//  .useAksWorkloadIdentity(java.lang.Boolean)
//  .useAksWorkloadIdentity(IResolvable)
//  .useCli(java.lang.Boolean)
//  .useCli(IResolvable)
//  .useMsi(java.lang.Boolean)
//  .useMsi(IResolvable)
//  .useOidc(java.lang.Boolean)
//  .useOidc(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>java.lang.String</code> | The password to decrypt the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificatePath">clientCertificatePath</a></code> | <code>java.lang.String</code> | The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The Client ID which should be used for service principal authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientIdFilePath">clientIdFilePath</a></code> | <code>java.lang.String</code> | The path to a file containing the Client ID which should be used for service principal authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The application password to use when authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientSecretFilePath">clientSecretFilePath</a></code> | <code>java.lang.String</code> | The path to a file containing the application password to use when authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.disableTerraformPartnerId">disableTerraformPartnerId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable the Terraform Partner ID, which is used if a custom `partner_id` isn't specified. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | The cloud environment which should be used. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.metadataHost">metadataHost</a></code> | <code>java.lang.String</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.msiEndpoint">msiEndpoint</a></code> | <code>java.lang.String</code> | The path to a custom endpoint for Managed Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcRequestToken">oidcRequestToken</a></code> | <code>java.lang.String</code> | The bearer token for the request to the OIDC provider. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcRequestUrl">oidcRequestUrl</a></code> | <code>java.lang.String</code> | The URL for the OIDC provider from which to request an ID token. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcToken">oidcToken</a></code> | <code>java.lang.String</code> | The ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcTokenFilePath">oidcTokenFilePath</a></code> | <code>java.lang.String</code> | The path to a file containing an ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.partnerId">partnerId</a></code> | <code>java.lang.String</code> | A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The Tenant ID which should be used. Works with all authentication methods except Managed Identity. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useAksWorkloadIdentity">useAksWorkloadIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow Azure AKS Workload Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useCli">useCli</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow Azure CLI to be used for Authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useMsi">useMsi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow Managed Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useOidc">useOidc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow OpenID Connect to be used for authentication. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#alias AzureadProvider#alias}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#client_certificate AzureadProvider#client_certificate}

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificatePassword"></a>

```java
public java.lang.String getClientCertificatePassword();
```

- *Type:* java.lang.String

The password to decrypt the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#client_certificate_password AzureadProvider#client_certificate_password}

---

##### `clientCertificatePath`<sup>Optional</sup> <a name="clientCertificatePath" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificatePath"></a>

```java
public java.lang.String getClientCertificatePath();
```

- *Type:* java.lang.String

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#client_certificate_path AzureadProvider#client_certificate_path}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The Client ID which should be used for service principal authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#client_id AzureadProvider#client_id}

---

##### `clientIdFilePath`<sup>Optional</sup> <a name="clientIdFilePath" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientIdFilePath"></a>

```java
public java.lang.String getClientIdFilePath();
```

- *Type:* java.lang.String

The path to a file containing the Client ID which should be used for service principal authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#client_id_file_path AzureadProvider#client_id_file_path}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The application password to use when authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#client_secret AzureadProvider#client_secret}

---

##### `clientSecretFilePath`<sup>Optional</sup> <a name="clientSecretFilePath" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientSecretFilePath"></a>

```java
public java.lang.String getClientSecretFilePath();
```

- *Type:* java.lang.String

The path to a file containing the application password to use when authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#client_secret_file_path AzureadProvider#client_secret_file_path}

---

##### `disableTerraformPartnerId`<sup>Optional</sup> <a name="disableTerraformPartnerId" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.disableTerraformPartnerId"></a>

```java
public java.lang.Object getDisableTerraformPartnerId();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable the Terraform Partner ID, which is used if a custom `partner_id` isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#disable_terraform_partner_id AzureadProvider#disable_terraform_partner_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The cloud environment which should be used.

Possible values are: `global` (also `public`), `usgovernmentl4` (also `usgovernment`), `usgovernmentl5` (also `dod`), and `china`. Defaults to `global`. Not used and should not be specified when `metadata_host` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#environment AzureadProvider#environment}

---

##### `metadataHost`<sup>Optional</sup> <a name="metadataHost" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.metadataHost"></a>

```java
public java.lang.String getMetadataHost();
```

- *Type:* java.lang.String

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#metadata_host AzureadProvider#metadata_host}

---

##### `msiEndpoint`<sup>Optional</sup> <a name="msiEndpoint" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.msiEndpoint"></a>

```java
public java.lang.String getMsiEndpoint();
```

- *Type:* java.lang.String

The path to a custom endpoint for Managed Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#msi_endpoint AzureadProvider#msi_endpoint}

---

##### `oidcRequestToken`<sup>Optional</sup> <a name="oidcRequestToken" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcRequestToken"></a>

```java
public java.lang.String getOidcRequestToken();
```

- *Type:* java.lang.String

The bearer token for the request to the OIDC provider.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#oidc_request_token AzureadProvider#oidc_request_token}

---

##### `oidcRequestUrl`<sup>Optional</sup> <a name="oidcRequestUrl" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcRequestUrl"></a>

```java
public java.lang.String getOidcRequestUrl();
```

- *Type:* java.lang.String

The URL for the OIDC provider from which to request an ID token.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#oidc_request_url AzureadProvider#oidc_request_url}

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcToken"></a>

```java
public java.lang.String getOidcToken();
```

- *Type:* java.lang.String

The ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#oidc_token AzureadProvider#oidc_token}

---

##### `oidcTokenFilePath`<sup>Optional</sup> <a name="oidcTokenFilePath" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcTokenFilePath"></a>

```java
public java.lang.String getOidcTokenFilePath();
```

- *Type:* java.lang.String

The path to a file containing an ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#oidc_token_file_path AzureadProvider#oidc_token_file_path}

---

##### `partnerId`<sup>Optional</sup> <a name="partnerId" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.partnerId"></a>

```java
public java.lang.String getPartnerId();
```

- *Type:* java.lang.String

A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#partner_id AzureadProvider#partner_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

The Tenant ID which should be used. Works with all authentication methods except Managed Identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#tenant_id AzureadProvider#tenant_id}

---

##### `useAksWorkloadIdentity`<sup>Optional</sup> <a name="useAksWorkloadIdentity" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useAksWorkloadIdentity"></a>

```java
public java.lang.Object getUseAksWorkloadIdentity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow Azure AKS Workload Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#use_aks_workload_identity AzureadProvider#use_aks_workload_identity}

---

##### `useCli`<sup>Optional</sup> <a name="useCli" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useCli"></a>

```java
public java.lang.Object getUseCli();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow Azure CLI to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#use_cli AzureadProvider#use_cli}

---

##### `useMsi`<sup>Optional</sup> <a name="useMsi" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useMsi"></a>

```java
public java.lang.Object getUseMsi();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow Managed Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#use_msi AzureadProvider#use_msi}

---

##### `useOidc`<sup>Optional</sup> <a name="useOidc" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useOidc"></a>

```java
public java.lang.Object getUseOidc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow OpenID Connect to be used for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs#use_oidc AzureadProvider#use_oidc}

---



