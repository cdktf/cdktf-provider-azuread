# `provider`

Refer to the Terraform Registory for docs: [`azuread`](https://registry.terraform.io/providers/hashicorp/azuread/2.40.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-azuread.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureadProvider <a name="AzureadProvider" id="@cdktf/provider-azuread.provider.AzureadProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.40.0/docs azuread}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azuread'

new provider.AzureadProvider(scope: Construct, id: string, config?: AzureadProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig">AzureadProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig">AzureadProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificatePassword">resetClientCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificatePath">resetClientCertificatePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientSecret">resetClientSecret</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetUseCli">resetUseCli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetUseMsi">resetUseMsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetUseOidc">resetUseOidc</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.provider.AzureadProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.provider.AzureadProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.provider.AzureadProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.provider.AzureadProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.provider.AzureadProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.provider.AzureadProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.provider.AzureadProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.provider.AzureadProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-azuread.provider.AzureadProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificate"></a>

```typescript
public resetClientCertificate(): void
```

##### `resetClientCertificatePassword` <a name="resetClientCertificatePassword" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificatePassword"></a>

```typescript
public resetClientCertificatePassword(): void
```

##### `resetClientCertificatePath` <a name="resetClientCertificatePath" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificatePath"></a>

```typescript
public resetClientCertificatePath(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetDisableTerraformPartnerId` <a name="resetDisableTerraformPartnerId" id="@cdktf/provider-azuread.provider.AzureadProvider.resetDisableTerraformPartnerId"></a>

```typescript
public resetDisableTerraformPartnerId(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-azuread.provider.AzureadProvider.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetMetadataHost` <a name="resetMetadataHost" id="@cdktf/provider-azuread.provider.AzureadProvider.resetMetadataHost"></a>

```typescript
public resetMetadataHost(): void
```

##### `resetMsiEndpoint` <a name="resetMsiEndpoint" id="@cdktf/provider-azuread.provider.AzureadProvider.resetMsiEndpoint"></a>

```typescript
public resetMsiEndpoint(): void
```

##### `resetOidcRequestToken` <a name="resetOidcRequestToken" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOidcRequestToken"></a>

```typescript
public resetOidcRequestToken(): void
```

##### `resetOidcRequestUrl` <a name="resetOidcRequestUrl" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOidcRequestUrl"></a>

```typescript
public resetOidcRequestUrl(): void
```

##### `resetOidcToken` <a name="resetOidcToken" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOidcToken"></a>

```typescript
public resetOidcToken(): void
```

##### `resetOidcTokenFilePath` <a name="resetOidcTokenFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOidcTokenFilePath"></a>

```typescript
public resetOidcTokenFilePath(): void
```

##### `resetPartnerId` <a name="resetPartnerId" id="@cdktf/provider-azuread.provider.AzureadProvider.resetPartnerId"></a>

```typescript
public resetPartnerId(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-azuread.provider.AzureadProvider.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetUseCli` <a name="resetUseCli" id="@cdktf/provider-azuread.provider.AzureadProvider.resetUseCli"></a>

```typescript
public resetUseCli(): void
```

##### `resetUseMsi` <a name="resetUseMsi" id="@cdktf/provider-azuread.provider.AzureadProvider.resetUseMsi"></a>

```typescript
public resetUseMsi(): void
```

##### `resetUseOidc` <a name="resetUseOidc" id="@cdktf/provider-azuread.provider.AzureadProvider.resetUseOidc"></a>

```typescript
public resetUseOidc(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.provider.AzureadProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-azuread'

provider.AzureadProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.provider.AzureadProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-azuread'

provider.AzureadProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.provider.AzureadProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-azuread.provider.AzureadProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-azuread'

provider.AzureadProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.provider.AzureadProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificateInput">clientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePasswordInput">clientCertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePathInput">clientCertificatePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.disableTerraformPartnerIdInput">disableTerraformPartnerIdInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.metadataHostInput">metadataHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.msiEndpointInput">msiEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestTokenInput">oidcRequestTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestUrlInput">oidcRequestUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenFilePathInput">oidcTokenFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenInput">oidcTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.partnerIdInput">partnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useCliInput">useCliInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useMsiInput">useMsiInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useOidcInput">useOidcInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePath">clientCertificatePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.disableTerraformPartnerId">disableTerraformPartnerId</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.metadataHost">metadataHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.msiEndpoint">msiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestToken">oidcRequestToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestUrl">oidcRequestUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcToken">oidcToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenFilePath">oidcTokenFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.partnerId">partnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useCli">useCli</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useMsi">useMsi</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useOidc">useOidc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.provider.AzureadProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.provider.AzureadProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.provider.AzureadProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.provider.AzureadProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-azuread.provider.AzureadProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.provider.AzureadProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.provider.AzureadProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-azuread.provider.AzureadProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azuread.provider.AzureadProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: string;
```

- *Type:* string

---

##### `clientCertificatePasswordInput`<sup>Optional</sup> <a name="clientCertificatePasswordInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePasswordInput"></a>

```typescript
public readonly clientCertificatePasswordInput: string;
```

- *Type:* string

---

##### `clientCertificatePathInput`<sup>Optional</sup> <a name="clientCertificatePathInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePathInput"></a>

```typescript
public readonly clientCertificatePathInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `disableTerraformPartnerIdInput`<sup>Optional</sup> <a name="disableTerraformPartnerIdInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.disableTerraformPartnerIdInput"></a>

```typescript
public readonly disableTerraformPartnerIdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `metadataHostInput`<sup>Optional</sup> <a name="metadataHostInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.metadataHostInput"></a>

```typescript
public readonly metadataHostInput: string;
```

- *Type:* string

---

##### `msiEndpointInput`<sup>Optional</sup> <a name="msiEndpointInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.msiEndpointInput"></a>

```typescript
public readonly msiEndpointInput: string;
```

- *Type:* string

---

##### `oidcRequestTokenInput`<sup>Optional</sup> <a name="oidcRequestTokenInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestTokenInput"></a>

```typescript
public readonly oidcRequestTokenInput: string;
```

- *Type:* string

---

##### `oidcRequestUrlInput`<sup>Optional</sup> <a name="oidcRequestUrlInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestUrlInput"></a>

```typescript
public readonly oidcRequestUrlInput: string;
```

- *Type:* string

---

##### `oidcTokenFilePathInput`<sup>Optional</sup> <a name="oidcTokenFilePathInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenFilePathInput"></a>

```typescript
public readonly oidcTokenFilePathInput: string;
```

- *Type:* string

---

##### `oidcTokenInput`<sup>Optional</sup> <a name="oidcTokenInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenInput"></a>

```typescript
public readonly oidcTokenInput: string;
```

- *Type:* string

---

##### `partnerIdInput`<sup>Optional</sup> <a name="partnerIdInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.partnerIdInput"></a>

```typescript
public readonly partnerIdInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `useCliInput`<sup>Optional</sup> <a name="useCliInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useCliInput"></a>

```typescript
public readonly useCliInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useMsiInput`<sup>Optional</sup> <a name="useMsiInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useMsiInput"></a>

```typescript
public readonly useMsiInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useOidcInput`<sup>Optional</sup> <a name="useOidcInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useOidcInput"></a>

```typescript
public readonly useOidcInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePassword"></a>

```typescript
public readonly clientCertificatePassword: string;
```

- *Type:* string

---

##### `clientCertificatePath`<sup>Optional</sup> <a name="clientCertificatePath" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePath"></a>

```typescript
public readonly clientCertificatePath: string;
```

- *Type:* string

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `disableTerraformPartnerId`<sup>Optional</sup> <a name="disableTerraformPartnerId" id="@cdktf/provider-azuread.provider.AzureadProvider.property.disableTerraformPartnerId"></a>

```typescript
public readonly disableTerraformPartnerId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azuread.provider.AzureadProvider.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `metadataHost`<sup>Optional</sup> <a name="metadataHost" id="@cdktf/provider-azuread.provider.AzureadProvider.property.metadataHost"></a>

```typescript
public readonly metadataHost: string;
```

- *Type:* string

---

##### `msiEndpoint`<sup>Optional</sup> <a name="msiEndpoint" id="@cdktf/provider-azuread.provider.AzureadProvider.property.msiEndpoint"></a>

```typescript
public readonly msiEndpoint: string;
```

- *Type:* string

---

##### `oidcRequestToken`<sup>Optional</sup> <a name="oidcRequestToken" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestToken"></a>

```typescript
public readonly oidcRequestToken: string;
```

- *Type:* string

---

##### `oidcRequestUrl`<sup>Optional</sup> <a name="oidcRequestUrl" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestUrl"></a>

```typescript
public readonly oidcRequestUrl: string;
```

- *Type:* string

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcToken"></a>

```typescript
public readonly oidcToken: string;
```

- *Type:* string

---

##### `oidcTokenFilePath`<sup>Optional</sup> <a name="oidcTokenFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenFilePath"></a>

```typescript
public readonly oidcTokenFilePath: string;
```

- *Type:* string

---

##### `partnerId`<sup>Optional</sup> <a name="partnerId" id="@cdktf/provider-azuread.provider.AzureadProvider.property.partnerId"></a>

```typescript
public readonly partnerId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azuread.provider.AzureadProvider.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `useCli`<sup>Optional</sup> <a name="useCli" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useCli"></a>

```typescript
public readonly useCli: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useMsi`<sup>Optional</sup> <a name="useMsi" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useMsi"></a>

```typescript
public readonly useMsi: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useOidc`<sup>Optional</sup> <a name="useOidc" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useOidc"></a>

```typescript
public readonly useOidc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.provider.AzureadProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AzureadProviderConfig <a name="AzureadProviderConfig" id="@cdktf/provider-azuread.provider.AzureadProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-azuread'

const azureadProviderConfig: provider.AzureadProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>string</code> | The password to decrypt the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificatePath">clientCertificatePath</a></code> | <code>string</code> | The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientId">clientId</a></code> | <code>string</code> | The Client ID which should be used for service principal authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | The application password to use when authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.disableTerraformPartnerId">disableTerraformPartnerId</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable the Terraform Partner ID, which is used if a custom `partner_id` isn't specified. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.environment">environment</a></code> | <code>string</code> | The cloud environment which should be used. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.metadataHost">metadataHost</a></code> | <code>string</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.msiEndpoint">msiEndpoint</a></code> | <code>string</code> | The path to a custom endpoint for Managed Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcRequestToken">oidcRequestToken</a></code> | <code>string</code> | The bearer token for the request to the OIDC provider. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcRequestUrl">oidcRequestUrl</a></code> | <code>string</code> | The URL for the OIDC provider from which to request an ID token. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcToken">oidcToken</a></code> | <code>string</code> | The ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcTokenFilePath">oidcTokenFilePath</a></code> | <code>string</code> | The path to a file containing an ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.partnerId">partnerId</a></code> | <code>string</code> | A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.tenantId">tenantId</a></code> | <code>string</code> | The Tenant ID which should be used. Works with all authentication methods except Managed Identity. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useCli">useCli</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow Azure CLI to be used for Authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useMsi">useMsi</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow Managed Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useOidc">useOidc</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow OpenID Connect to be used for authentication. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.40.0/docs#alias AzureadProvider#alias}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.40.0/docs#client_certificate AzureadProvider#client_certificate}

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificatePassword"></a>

```typescript
public readonly clientCertificatePassword: string;
```

- *Type:* string

The password to decrypt the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.40.0/docs#client_certificate_password AzureadProvider#client_certificate_password}

---

##### `clientCertificatePath`<sup>Optional</sup> <a name="clientCertificatePath" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificatePath"></a>

```typescript
public readonly clientCertificatePath: string;
```

- *Type:* string

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.40.0/docs#client_certificate_path AzureadProvider#client_certificate_path}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The Client ID which should be used for service principal authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.40.0/docs#client_id AzureadProvider#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The application password to use when authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.40.0/docs#client_secret AzureadProvider#client_secret}

---

##### `disableTerraformPartnerId`<sup>Optional</sup> <a name="disableTerraformPartnerId" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.disableTerraformPartnerId"></a>

```typescript
public readonly disableTerraformPartnerId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable the Terraform Partner ID, which is used if a custom `partner_id` isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.40.0/docs#disable_terraform_partner_id AzureadProvider#disable_terraform_partner_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The cloud environment which should be used.

Possible values are: `global` (also `public`), `usgovernmentl4` (also `usgovernment`), `usgovernmentl5` (also `dod`), and `china`. Defaults to `global`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.40.0/docs#environment AzureadProvider#environment}

---

##### `metadataHost`<sup>Optional</sup> <a name="metadataHost" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.metadataHost"></a>

```typescript
public readonly metadataHost: string;
```

- *Type:* string

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.40.0/docs#metadata_host AzureadProvider#metadata_host}

---

##### `msiEndpoint`<sup>Optional</sup> <a name="msiEndpoint" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.msiEndpoint"></a>

```typescript
public readonly msiEndpoint: string;
```

- *Type:* string

The path to a custom endpoint for Managed Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.40.0/docs#msi_endpoint AzureadProvider#msi_endpoint}

---

##### `oidcRequestToken`<sup>Optional</sup> <a name="oidcRequestToken" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcRequestToken"></a>

```typescript
public readonly oidcRequestToken: string;
```

- *Type:* string

The bearer token for the request to the OIDC provider.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.40.0/docs#oidc_request_token AzureadProvider#oidc_request_token}

---

##### `oidcRequestUrl`<sup>Optional</sup> <a name="oidcRequestUrl" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcRequestUrl"></a>

```typescript
public readonly oidcRequestUrl: string;
```

- *Type:* string

The URL for the OIDC provider from which to request an ID token.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.40.0/docs#oidc_request_url AzureadProvider#oidc_request_url}

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcToken"></a>

```typescript
public readonly oidcToken: string;
```

- *Type:* string

The ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.40.0/docs#oidc_token AzureadProvider#oidc_token}

---

##### `oidcTokenFilePath`<sup>Optional</sup> <a name="oidcTokenFilePath" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcTokenFilePath"></a>

```typescript
public readonly oidcTokenFilePath: string;
```

- *Type:* string

The path to a file containing an ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.40.0/docs#oidc_token_file_path AzureadProvider#oidc_token_file_path}

---

##### `partnerId`<sup>Optional</sup> <a name="partnerId" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.partnerId"></a>

```typescript
public readonly partnerId: string;
```

- *Type:* string

A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.40.0/docs#partner_id AzureadProvider#partner_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The Tenant ID which should be used. Works with all authentication methods except Managed Identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.40.0/docs#tenant_id AzureadProvider#tenant_id}

---

##### `useCli`<sup>Optional</sup> <a name="useCli" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useCli"></a>

```typescript
public readonly useCli: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow Azure CLI to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.40.0/docs#use_cli AzureadProvider#use_cli}

---

##### `useMsi`<sup>Optional</sup> <a name="useMsi" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useMsi"></a>

```typescript
public readonly useMsi: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow Managed Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.40.0/docs#use_msi AzureadProvider#use_msi}

---

##### `useOidc`<sup>Optional</sup> <a name="useOidc" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useOidc"></a>

```typescript
public readonly useOidc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow OpenID Connect to be used for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.40.0/docs#use_oidc AzureadProvider#use_oidc}

---



