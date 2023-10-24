# `provider`

Refer to the Terraform Registory for docs: [`azuread`](https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-azuread.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureadProvider <a name="AzureadProvider" id="@cdktf/provider-azuread.provider.AzureadProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs azuread}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new AzureadProvider(Construct Scope, string Id, AzureadProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig">AzureadProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig">AzureadProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificatePassword">ResetClientCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificatePath">ResetClientCertificatePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientIdFilePath">ResetClientIdFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientSecretFilePath">ResetClientSecretFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetDisableTerraformPartnerId">ResetDisableTerraformPartnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetMetadataHost">ResetMetadataHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetMsiEndpoint">ResetMsiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetOidcRequestToken">ResetOidcRequestToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetOidcRequestUrl">ResetOidcRequestUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetOidcToken">ResetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetOidcTokenFilePath">ResetOidcTokenFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetPartnerId">ResetPartnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetUseCli">ResetUseCli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetUseMsi">ResetUseMsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetUseOidc">ResetUseOidc</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.provider.AzureadProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.provider.AzureadProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azuread.provider.AzureadProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.provider.AzureadProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.provider.AzureadProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azuread.provider.AzureadProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.provider.AzureadProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.provider.AzureadProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-azuread.provider.AzureadProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificate"></a>

```csharp
private void ResetClientCertificate()
```

##### `ResetClientCertificatePassword` <a name="ResetClientCertificatePassword" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificatePassword"></a>

```csharp
private void ResetClientCertificatePassword()
```

##### `ResetClientCertificatePath` <a name="ResetClientCertificatePath" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificatePath"></a>

```csharp
private void ResetClientCertificatePath()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientIdFilePath` <a name="ResetClientIdFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientIdFilePath"></a>

```csharp
private void ResetClientIdFilePath()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetClientSecretFilePath` <a name="ResetClientSecretFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientSecretFilePath"></a>

```csharp
private void ResetClientSecretFilePath()
```

##### `ResetDisableTerraformPartnerId` <a name="ResetDisableTerraformPartnerId" id="@cdktf/provider-azuread.provider.AzureadProvider.resetDisableTerraformPartnerId"></a>

```csharp
private void ResetDisableTerraformPartnerId()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-azuread.provider.AzureadProvider.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetMetadataHost` <a name="ResetMetadataHost" id="@cdktf/provider-azuread.provider.AzureadProvider.resetMetadataHost"></a>

```csharp
private void ResetMetadataHost()
```

##### `ResetMsiEndpoint` <a name="ResetMsiEndpoint" id="@cdktf/provider-azuread.provider.AzureadProvider.resetMsiEndpoint"></a>

```csharp
private void ResetMsiEndpoint()
```

##### `ResetOidcRequestToken` <a name="ResetOidcRequestToken" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOidcRequestToken"></a>

```csharp
private void ResetOidcRequestToken()
```

##### `ResetOidcRequestUrl` <a name="ResetOidcRequestUrl" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOidcRequestUrl"></a>

```csharp
private void ResetOidcRequestUrl()
```

##### `ResetOidcToken` <a name="ResetOidcToken" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOidcToken"></a>

```csharp
private void ResetOidcToken()
```

##### `ResetOidcTokenFilePath` <a name="ResetOidcTokenFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOidcTokenFilePath"></a>

```csharp
private void ResetOidcTokenFilePath()
```

##### `ResetPartnerId` <a name="ResetPartnerId" id="@cdktf/provider-azuread.provider.AzureadProvider.resetPartnerId"></a>

```csharp
private void ResetPartnerId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azuread.provider.AzureadProvider.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetUseCli` <a name="ResetUseCli" id="@cdktf/provider-azuread.provider.AzureadProvider.resetUseCli"></a>

```csharp
private void ResetUseCli()
```

##### `ResetUseMsi` <a name="ResetUseMsi" id="@cdktf/provider-azuread.provider.AzureadProvider.resetUseMsi"></a>

```csharp
private void ResetUseMsi()
```

##### `ResetUseOidc` <a name="ResetUseOidc" id="@cdktf/provider-azuread.provider.AzureadProvider.resetUseOidc"></a>

```csharp
private void ResetUseOidc()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AzureadProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.provider.AzureadProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

AzureadProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.provider.AzureadProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.provider.AzureadProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

AzureadProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.provider.AzureadProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-azuread.provider.AzureadProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

AzureadProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.provider.AzureadProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

AzureadProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AzureadProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AzureadProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AzureadProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AzureadProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePasswordInput">ClientCertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePathInput">ClientCertificatePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdFilePathInput">ClientIdFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretFilePathInput">ClientSecretFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.disableTerraformPartnerIdInput">DisableTerraformPartnerIdInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.metadataHostInput">MetadataHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.msiEndpointInput">MsiEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestTokenInput">OidcRequestTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestUrlInput">OidcRequestUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenFilePathInput">OidcTokenFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenInput">OidcTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.partnerIdInput">PartnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useCliInput">UseCliInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useMsiInput">UseMsiInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useOidcInput">UseOidcInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePath">ClientCertificatePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdFilePath">ClientIdFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretFilePath">ClientSecretFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.disableTerraformPartnerId">DisableTerraformPartnerId</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.metadataHost">MetadataHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.msiEndpoint">MsiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestToken">OidcRequestToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestUrl">OidcRequestUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcToken">OidcToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenFilePath">OidcTokenFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.partnerId">PartnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useCli">UseCli</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useMsi">UseMsi</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useOidc">UseOidc</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.provider.AzureadProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.provider.AzureadProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.provider.AzureadProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.provider.AzureadProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-azuread.provider.AzureadProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.provider.AzureadProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.provider.AzureadProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-azuread.provider.AzureadProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-azuread.provider.AzureadProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificateInput"></a>

```csharp
public string ClientCertificateInput { get; }
```

- *Type:* string

---

##### `ClientCertificatePasswordInput`<sup>Optional</sup> <a name="ClientCertificatePasswordInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePasswordInput"></a>

```csharp
public string ClientCertificatePasswordInput { get; }
```

- *Type:* string

---

##### `ClientCertificatePathInput`<sup>Optional</sup> <a name="ClientCertificatePathInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePathInput"></a>

```csharp
public string ClientCertificatePathInput { get; }
```

- *Type:* string

---

##### `ClientIdFilePathInput`<sup>Optional</sup> <a name="ClientIdFilePathInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdFilePathInput"></a>

```csharp
public string ClientIdFilePathInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretFilePathInput`<sup>Optional</sup> <a name="ClientSecretFilePathInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretFilePathInput"></a>

```csharp
public string ClientSecretFilePathInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `DisableTerraformPartnerIdInput`<sup>Optional</sup> <a name="DisableTerraformPartnerIdInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.disableTerraformPartnerIdInput"></a>

```csharp
public object DisableTerraformPartnerIdInput { get; }
```

- *Type:* object

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `MetadataHostInput`<sup>Optional</sup> <a name="MetadataHostInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.metadataHostInput"></a>

```csharp
public string MetadataHostInput { get; }
```

- *Type:* string

---

##### `MsiEndpointInput`<sup>Optional</sup> <a name="MsiEndpointInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.msiEndpointInput"></a>

```csharp
public string MsiEndpointInput { get; }
```

- *Type:* string

---

##### `OidcRequestTokenInput`<sup>Optional</sup> <a name="OidcRequestTokenInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestTokenInput"></a>

```csharp
public string OidcRequestTokenInput { get; }
```

- *Type:* string

---

##### `OidcRequestUrlInput`<sup>Optional</sup> <a name="OidcRequestUrlInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestUrlInput"></a>

```csharp
public string OidcRequestUrlInput { get; }
```

- *Type:* string

---

##### `OidcTokenFilePathInput`<sup>Optional</sup> <a name="OidcTokenFilePathInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenFilePathInput"></a>

```csharp
public string OidcTokenFilePathInput { get; }
```

- *Type:* string

---

##### `OidcTokenInput`<sup>Optional</sup> <a name="OidcTokenInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenInput"></a>

```csharp
public string OidcTokenInput { get; }
```

- *Type:* string

---

##### `PartnerIdInput`<sup>Optional</sup> <a name="PartnerIdInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.partnerIdInput"></a>

```csharp
public string PartnerIdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `UseCliInput`<sup>Optional</sup> <a name="UseCliInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useCliInput"></a>

```csharp
public object UseCliInput { get; }
```

- *Type:* object

---

##### `UseMsiInput`<sup>Optional</sup> <a name="UseMsiInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useMsiInput"></a>

```csharp
public object UseMsiInput { get; }
```

- *Type:* object

---

##### `UseOidcInput`<sup>Optional</sup> <a name="UseOidcInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useOidcInput"></a>

```csharp
public object UseOidcInput { get; }
```

- *Type:* object

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; }
```

- *Type:* string

---

##### `ClientCertificatePassword`<sup>Optional</sup> <a name="ClientCertificatePassword" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePassword"></a>

```csharp
public string ClientCertificatePassword { get; }
```

- *Type:* string

---

##### `ClientCertificatePath`<sup>Optional</sup> <a name="ClientCertificatePath" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePath"></a>

```csharp
public string ClientCertificatePath { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientIdFilePath`<sup>Optional</sup> <a name="ClientIdFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdFilePath"></a>

```csharp
public string ClientIdFilePath { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ClientSecretFilePath`<sup>Optional</sup> <a name="ClientSecretFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretFilePath"></a>

```csharp
public string ClientSecretFilePath { get; }
```

- *Type:* string

---

##### `DisableTerraformPartnerId`<sup>Optional</sup> <a name="DisableTerraformPartnerId" id="@cdktf/provider-azuread.provider.AzureadProvider.property.disableTerraformPartnerId"></a>

```csharp
public object DisableTerraformPartnerId { get; }
```

- *Type:* object

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-azuread.provider.AzureadProvider.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `MetadataHost`<sup>Optional</sup> <a name="MetadataHost" id="@cdktf/provider-azuread.provider.AzureadProvider.property.metadataHost"></a>

```csharp
public string MetadataHost { get; }
```

- *Type:* string

---

##### `MsiEndpoint`<sup>Optional</sup> <a name="MsiEndpoint" id="@cdktf/provider-azuread.provider.AzureadProvider.property.msiEndpoint"></a>

```csharp
public string MsiEndpoint { get; }
```

- *Type:* string

---

##### `OidcRequestToken`<sup>Optional</sup> <a name="OidcRequestToken" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestToken"></a>

```csharp
public string OidcRequestToken { get; }
```

- *Type:* string

---

##### `OidcRequestUrl`<sup>Optional</sup> <a name="OidcRequestUrl" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestUrl"></a>

```csharp
public string OidcRequestUrl { get; }
```

- *Type:* string

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcToken"></a>

```csharp
public string OidcToken { get; }
```

- *Type:* string

---

##### `OidcTokenFilePath`<sup>Optional</sup> <a name="OidcTokenFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenFilePath"></a>

```csharp
public string OidcTokenFilePath { get; }
```

- *Type:* string

---

##### `PartnerId`<sup>Optional</sup> <a name="PartnerId" id="@cdktf/provider-azuread.provider.AzureadProvider.property.partnerId"></a>

```csharp
public string PartnerId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azuread.provider.AzureadProvider.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `UseCli`<sup>Optional</sup> <a name="UseCli" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useCli"></a>

```csharp
public object UseCli { get; }
```

- *Type:* object

---

##### `UseMsi`<sup>Optional</sup> <a name="UseMsi" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useMsi"></a>

```csharp
public object UseMsi { get; }
```

- *Type:* object

---

##### `UseOidc`<sup>Optional</sup> <a name="UseOidc" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useOidc"></a>

```csharp
public object UseOidc { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.provider.AzureadProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AzureadProviderConfig <a name="AzureadProviderConfig" id="@cdktf/provider-azuread.provider.AzureadProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new AzureadProviderConfig {
    string Alias = null,
    string ClientCertificate = null,
    string ClientCertificatePassword = null,
    string ClientCertificatePath = null,
    string ClientId = null,
    string ClientIdFilePath = null,
    string ClientSecret = null,
    string ClientSecretFilePath = null,
    object DisableTerraformPartnerId = null,
    string Environment = null,
    string MetadataHost = null,
    string MsiEndpoint = null,
    string OidcRequestToken = null,
    string OidcRequestUrl = null,
    string OidcToken = null,
    string OidcTokenFilePath = null,
    string PartnerId = null,
    string TenantId = null,
    object UseCli = null,
    object UseMsi = null,
    object UseOidc = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>string</code> | The password to decrypt the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificatePath">ClientCertificatePath</a></code> | <code>string</code> | The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientId">ClientId</a></code> | <code>string</code> | The Client ID which should be used for service principal authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientIdFilePath">ClientIdFilePath</a></code> | <code>string</code> | The path to a file containing the Client ID which should be used for service principal authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | The application password to use when authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientSecretFilePath">ClientSecretFilePath</a></code> | <code>string</code> | The path to a file containing the application password to use when authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.disableTerraformPartnerId">DisableTerraformPartnerId</a></code> | <code>object</code> | Disable the Terraform Partner ID, which is used if a custom `partner_id` isn't specified. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.environment">Environment</a></code> | <code>string</code> | The cloud environment which should be used. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.metadataHost">MetadataHost</a></code> | <code>string</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.msiEndpoint">MsiEndpoint</a></code> | <code>string</code> | The path to a custom endpoint for Managed Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcRequestToken">OidcRequestToken</a></code> | <code>string</code> | The bearer token for the request to the OIDC provider. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcRequestUrl">OidcRequestUrl</a></code> | <code>string</code> | The URL for the OIDC provider from which to request an ID token. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcToken">OidcToken</a></code> | <code>string</code> | The ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcTokenFilePath">OidcTokenFilePath</a></code> | <code>string</code> | The path to a file containing an ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.partnerId">PartnerId</a></code> | <code>string</code> | A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.tenantId">TenantId</a></code> | <code>string</code> | The Tenant ID which should be used. Works with all authentication methods except Managed Identity. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useCli">UseCli</a></code> | <code>object</code> | Allow Azure CLI to be used for Authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useMsi">UseMsi</a></code> | <code>object</code> | Allow Managed Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useOidc">UseOidc</a></code> | <code>object</code> | Allow OpenID Connect to be used for authentication. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs#alias AzureadProvider#alias}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; set; }
```

- *Type:* string

Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs#client_certificate AzureadProvider#client_certificate}

---

##### `ClientCertificatePassword`<sup>Optional</sup> <a name="ClientCertificatePassword" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificatePassword"></a>

```csharp
public string ClientCertificatePassword { get; set; }
```

- *Type:* string

The password to decrypt the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs#client_certificate_password AzureadProvider#client_certificate_password}

---

##### `ClientCertificatePath`<sup>Optional</sup> <a name="ClientCertificatePath" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificatePath"></a>

```csharp
public string ClientCertificatePath { get; set; }
```

- *Type:* string

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs#client_certificate_path AzureadProvider#client_certificate_path}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The Client ID which should be used for service principal authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs#client_id AzureadProvider#client_id}

---

##### `ClientIdFilePath`<sup>Optional</sup> <a name="ClientIdFilePath" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientIdFilePath"></a>

```csharp
public string ClientIdFilePath { get; set; }
```

- *Type:* string

The path to a file containing the Client ID which should be used for service principal authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs#client_id_file_path AzureadProvider#client_id_file_path}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

The application password to use when authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs#client_secret AzureadProvider#client_secret}

---

##### `ClientSecretFilePath`<sup>Optional</sup> <a name="ClientSecretFilePath" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientSecretFilePath"></a>

```csharp
public string ClientSecretFilePath { get; set; }
```

- *Type:* string

The path to a file containing the application password to use when authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs#client_secret_file_path AzureadProvider#client_secret_file_path}

---

##### `DisableTerraformPartnerId`<sup>Optional</sup> <a name="DisableTerraformPartnerId" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.disableTerraformPartnerId"></a>

```csharp
public object DisableTerraformPartnerId { get; set; }
```

- *Type:* object

Disable the Terraform Partner ID, which is used if a custom `partner_id` isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs#disable_terraform_partner_id AzureadProvider#disable_terraform_partner_id}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The cloud environment which should be used.

Possible values are: `global` (also `public`), `usgovernmentl4` (also `usgovernment`), `usgovernmentl5` (also `dod`), and `china`. Defaults to `global`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs#environment AzureadProvider#environment}

---

##### `MetadataHost`<sup>Optional</sup> <a name="MetadataHost" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.metadataHost"></a>

```csharp
public string MetadataHost { get; set; }
```

- *Type:* string

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs#metadata_host AzureadProvider#metadata_host}

---

##### `MsiEndpoint`<sup>Optional</sup> <a name="MsiEndpoint" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.msiEndpoint"></a>

```csharp
public string MsiEndpoint { get; set; }
```

- *Type:* string

The path to a custom endpoint for Managed Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs#msi_endpoint AzureadProvider#msi_endpoint}

---

##### `OidcRequestToken`<sup>Optional</sup> <a name="OidcRequestToken" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcRequestToken"></a>

```csharp
public string OidcRequestToken { get; set; }
```

- *Type:* string

The bearer token for the request to the OIDC provider.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs#oidc_request_token AzureadProvider#oidc_request_token}

---

##### `OidcRequestUrl`<sup>Optional</sup> <a name="OidcRequestUrl" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcRequestUrl"></a>

```csharp
public string OidcRequestUrl { get; set; }
```

- *Type:* string

The URL for the OIDC provider from which to request an ID token.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs#oidc_request_url AzureadProvider#oidc_request_url}

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcToken"></a>

```csharp
public string OidcToken { get; set; }
```

- *Type:* string

The ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs#oidc_token AzureadProvider#oidc_token}

---

##### `OidcTokenFilePath`<sup>Optional</sup> <a name="OidcTokenFilePath" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcTokenFilePath"></a>

```csharp
public string OidcTokenFilePath { get; set; }
```

- *Type:* string

The path to a file containing an ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs#oidc_token_file_path AzureadProvider#oidc_token_file_path}

---

##### `PartnerId`<sup>Optional</sup> <a name="PartnerId" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.partnerId"></a>

```csharp
public string PartnerId { get; set; }
```

- *Type:* string

A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs#partner_id AzureadProvider#partner_id}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

The Tenant ID which should be used. Works with all authentication methods except Managed Identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs#tenant_id AzureadProvider#tenant_id}

---

##### `UseCli`<sup>Optional</sup> <a name="UseCli" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useCli"></a>

```csharp
public object UseCli { get; set; }
```

- *Type:* object

Allow Azure CLI to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs#use_cli AzureadProvider#use_cli}

---

##### `UseMsi`<sup>Optional</sup> <a name="UseMsi" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useMsi"></a>

```csharp
public object UseMsi { get; set; }
```

- *Type:* object

Allow Managed Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs#use_msi AzureadProvider#use_msi}

---

##### `UseOidc`<sup>Optional</sup> <a name="UseOidc" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useOidc"></a>

```csharp
public object UseOidc { get; set; }
```

- *Type:* object

Allow OpenID Connect to be used for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs#use_oidc AzureadProvider#use_oidc}

---



