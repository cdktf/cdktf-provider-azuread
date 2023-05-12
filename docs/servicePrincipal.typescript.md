# `azuread_service_principal`

Refer to the Terraform Registory for docs: [`azuread_service_principal`](https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal).

# `servicePrincipal` Submodule <a name="`servicePrincipal` Submodule" id="@cdktf/provider-azuread.servicePrincipal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipal <a name="ServicePrincipal" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal azuread_service_principal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer"></a>

```typescript
import { servicePrincipal } from '@cdktf/provider-azuread'

new servicePrincipal.ServicePrincipal(scope: Construct, id: string, config: ServicePrincipalConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig">ServicePrincipalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig">ServicePrincipalConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFeatures` <a name="putFeatures" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putFeatures"></a>

```typescript
public putFeatures(value: IResolvable | ServicePrincipalFeatures[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putFeatures.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures">ServicePrincipalFeatures</a>[]

---

##### `putFeatureTags` <a name="putFeatureTags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putFeatureTags"></a>

```typescript
public putFeatureTags(value: IResolvable | ServicePrincipalFeatureTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putFeatureTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags">ServicePrincipalFeatureTags</a>[]

---

##### `putSamlSingleSignOn` <a name="putSamlSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putSamlSingleSignOn"></a>

```typescript
public putSamlSingleSignOn(value: ServicePrincipalSamlSingleSignOn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putSamlSingleSignOn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putTimeouts"></a>

```typescript
public putTimeouts(value: ServicePrincipalTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts">ServicePrincipalTimeouts</a>

---

##### `resetAccountEnabled` <a name="resetAccountEnabled" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetAccountEnabled"></a>

```typescript
public resetAccountEnabled(): void
```

##### `resetAlternativeNames` <a name="resetAlternativeNames" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetAlternativeNames"></a>

```typescript
public resetAlternativeNames(): void
```

##### `resetAppRoleAssignmentRequired` <a name="resetAppRoleAssignmentRequired" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetAppRoleAssignmentRequired"></a>

```typescript
public resetAppRoleAssignmentRequired(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFeatures` <a name="resetFeatures" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetFeatures"></a>

```typescript
public resetFeatures(): void
```

##### `resetFeatureTags` <a name="resetFeatureTags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetFeatureTags"></a>

```typescript
public resetFeatureTags(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoginUrl` <a name="resetLoginUrl" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetLoginUrl"></a>

```typescript
public resetLoginUrl(): void
```

##### `resetNotes` <a name="resetNotes" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetNotes"></a>

```typescript
public resetNotes(): void
```

##### `resetNotificationEmailAddresses` <a name="resetNotificationEmailAddresses" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetNotificationEmailAddresses"></a>

```typescript
public resetNotificationEmailAddresses(): void
```

##### `resetOwners` <a name="resetOwners" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetOwners"></a>

```typescript
public resetOwners(): void
```

##### `resetPreferredSingleSignOnMode` <a name="resetPreferredSingleSignOnMode" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetPreferredSingleSignOnMode"></a>

```typescript
public resetPreferredSingleSignOnMode(): void
```

##### `resetSamlSingleSignOn` <a name="resetSamlSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetSamlSingleSignOn"></a>

```typescript
public resetSamlSingleSignOn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUseExisting` <a name="resetUseExisting" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetUseExisting"></a>

```typescript
public resetUseExisting(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isConstruct"></a>

```typescript
import { servicePrincipal } from '@cdktf/provider-azuread'

servicePrincipal.ServicePrincipal.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isTerraformElement"></a>

```typescript
import { servicePrincipal } from '@cdktf/provider-azuread'

servicePrincipal.ServicePrincipal.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isTerraformResource"></a>

```typescript
import { servicePrincipal } from '@cdktf/provider-azuread'

servicePrincipal.ServicePrincipal.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.applicationTenantId">applicationTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoleIds">appRoleIds</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoles">appRoles</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList">ServicePrincipalAppRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.features">features</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList">ServicePrincipalFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.featureTags">featureTags</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList">ServicePrincipalFeatureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.homepageUrl">homepageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.logoutUrl">logoutUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.oauth2PermissionScopeIds">oauth2PermissionScopeIds</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.oauth2PermissionScopes">oauth2PermissionScopes</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList">ServicePrincipalOauth2PermissionScopesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.samlMetadataUrl">samlMetadataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.samlSingleSignOn">samlSingleSignOn</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference">ServicePrincipalSamlSingleSignOnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.servicePrincipalNames">servicePrincipalNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.signInAudience">signInAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference">ServicePrincipalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.accountEnabledInput">accountEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.alternativeNamesInput">alternativeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoleAssignmentRequiredInput">appRoleAssignmentRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.featuresInput">featuresInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures">ServicePrincipalFeatures</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.featureTagsInput">featureTagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags">ServicePrincipalFeatureTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.loginUrlInput">loginUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notesInput">notesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notificationEmailAddressesInput">notificationEmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.ownersInput">ownersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.preferredSingleSignOnModeInput">preferredSingleSignOnModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.samlSingleSignOnInput">samlSingleSignOnInput</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts">ServicePrincipalTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.useExistingInput">useExistingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.accountEnabled">accountEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.alternativeNames">alternativeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoleAssignmentRequired">appRoleAssignmentRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.loginUrl">loginUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notes">notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notificationEmailAddresses">notificationEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.owners">owners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.preferredSingleSignOnMode">preferredSingleSignOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.useExisting">useExisting</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationTenantId`<sup>Required</sup> <a name="applicationTenantId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.applicationTenantId"></a>

```typescript
public readonly applicationTenantId: string;
```

- *Type:* string

---

##### `appRoleIds`<sup>Required</sup> <a name="appRoleIds" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoleIds"></a>

```typescript
public readonly appRoleIds: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `appRoles`<sup>Required</sup> <a name="appRoles" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoles"></a>

```typescript
public readonly appRoles: ServicePrincipalAppRolesList;
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList">ServicePrincipalAppRolesList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.features"></a>

```typescript
public readonly features: ServicePrincipalFeaturesList;
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList">ServicePrincipalFeaturesList</a>

---

##### `featureTags`<sup>Required</sup> <a name="featureTags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.featureTags"></a>

```typescript
public readonly featureTags: ServicePrincipalFeatureTagsList;
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList">ServicePrincipalFeatureTagsList</a>

---

##### `homepageUrl`<sup>Required</sup> <a name="homepageUrl" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.homepageUrl"></a>

```typescript
public readonly homepageUrl: string;
```

- *Type:* string

---

##### `logoutUrl`<sup>Required</sup> <a name="logoutUrl" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.logoutUrl"></a>

```typescript
public readonly logoutUrl: string;
```

- *Type:* string

---

##### `oauth2PermissionScopeIds`<sup>Required</sup> <a name="oauth2PermissionScopeIds" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.oauth2PermissionScopeIds"></a>

```typescript
public readonly oauth2PermissionScopeIds: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `oauth2PermissionScopes`<sup>Required</sup> <a name="oauth2PermissionScopes" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.oauth2PermissionScopes"></a>

```typescript
public readonly oauth2PermissionScopes: ServicePrincipalOauth2PermissionScopesList;
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList">ServicePrincipalOauth2PermissionScopesList</a>

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

---

##### `samlMetadataUrl`<sup>Required</sup> <a name="samlMetadataUrl" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.samlMetadataUrl"></a>

```typescript
public readonly samlMetadataUrl: string;
```

- *Type:* string

---

##### `samlSingleSignOn`<sup>Required</sup> <a name="samlSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.samlSingleSignOn"></a>

```typescript
public readonly samlSingleSignOn: ServicePrincipalSamlSingleSignOnOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference">ServicePrincipalSamlSingleSignOnOutputReference</a>

---

##### `servicePrincipalNames`<sup>Required</sup> <a name="servicePrincipalNames" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.servicePrincipalNames"></a>

```typescript
public readonly servicePrincipalNames: string[];
```

- *Type:* string[]

---

##### `signInAudience`<sup>Required</sup> <a name="signInAudience" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.signInAudience"></a>

```typescript
public readonly signInAudience: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.timeouts"></a>

```typescript
public readonly timeouts: ServicePrincipalTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference">ServicePrincipalTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `accountEnabledInput`<sup>Optional</sup> <a name="accountEnabledInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.accountEnabledInput"></a>

```typescript
public readonly accountEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `alternativeNamesInput`<sup>Optional</sup> <a name="alternativeNamesInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.alternativeNamesInput"></a>

```typescript
public readonly alternativeNamesInput: string[];
```

- *Type:* string[]

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `appRoleAssignmentRequiredInput`<sup>Optional</sup> <a name="appRoleAssignmentRequiredInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoleAssignmentRequiredInput"></a>

```typescript
public readonly appRoleAssignmentRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `featuresInput`<sup>Optional</sup> <a name="featuresInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.featuresInput"></a>

```typescript
public readonly featuresInput: IResolvable | ServicePrincipalFeatures[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures">ServicePrincipalFeatures</a>[]

---

##### `featureTagsInput`<sup>Optional</sup> <a name="featureTagsInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.featureTagsInput"></a>

```typescript
public readonly featureTagsInput: IResolvable | ServicePrincipalFeatureTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags">ServicePrincipalFeatureTags</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loginUrlInput`<sup>Optional</sup> <a name="loginUrlInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.loginUrlInput"></a>

```typescript
public readonly loginUrlInput: string;
```

- *Type:* string

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notesInput"></a>

```typescript
public readonly notesInput: string;
```

- *Type:* string

---

##### `notificationEmailAddressesInput`<sup>Optional</sup> <a name="notificationEmailAddressesInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notificationEmailAddressesInput"></a>

```typescript
public readonly notificationEmailAddressesInput: string[];
```

- *Type:* string[]

---

##### `ownersInput`<sup>Optional</sup> <a name="ownersInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.ownersInput"></a>

```typescript
public readonly ownersInput: string[];
```

- *Type:* string[]

---

##### `preferredSingleSignOnModeInput`<sup>Optional</sup> <a name="preferredSingleSignOnModeInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.preferredSingleSignOnModeInput"></a>

```typescript
public readonly preferredSingleSignOnModeInput: string;
```

- *Type:* string

---

##### `samlSingleSignOnInput`<sup>Optional</sup> <a name="samlSingleSignOnInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.samlSingleSignOnInput"></a>

```typescript
public readonly samlSingleSignOnInput: ServicePrincipalSamlSingleSignOn;
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ServicePrincipalTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts">ServicePrincipalTimeouts</a> | cdktf.IResolvable

---

##### `useExistingInput`<sup>Optional</sup> <a name="useExistingInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.useExistingInput"></a>

```typescript
public readonly useExistingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accountEnabled`<sup>Required</sup> <a name="accountEnabled" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.accountEnabled"></a>

```typescript
public readonly accountEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `alternativeNames`<sup>Required</sup> <a name="alternativeNames" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.alternativeNames"></a>

```typescript
public readonly alternativeNames: string[];
```

- *Type:* string[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `appRoleAssignmentRequired`<sup>Required</sup> <a name="appRoleAssignmentRequired" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoleAssignmentRequired"></a>

```typescript
public readonly appRoleAssignmentRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loginUrl`<sup>Required</sup> <a name="loginUrl" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.loginUrl"></a>

```typescript
public readonly loginUrl: string;
```

- *Type:* string

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

---

##### `notificationEmailAddresses`<sup>Required</sup> <a name="notificationEmailAddresses" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notificationEmailAddresses"></a>

```typescript
public readonly notificationEmailAddresses: string[];
```

- *Type:* string[]

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* string[]

---

##### `preferredSingleSignOnMode`<sup>Required</sup> <a name="preferredSingleSignOnMode" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.preferredSingleSignOnMode"></a>

```typescript
public readonly preferredSingleSignOnMode: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `useExisting`<sup>Required</sup> <a name="useExisting" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.useExisting"></a>

```typescript
public readonly useExisting: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalAppRoles <a name="ServicePrincipalAppRoles" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRoles.Initializer"></a>

```typescript
import { servicePrincipal } from '@cdktf/provider-azuread'

const servicePrincipalAppRoles: servicePrincipal.ServicePrincipalAppRoles = { ... }
```


### ServicePrincipalConfig <a name="ServicePrincipalConfig" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.Initializer"></a>

```typescript
import { servicePrincipal } from '@cdktf/provider-azuread'

const servicePrincipalConfig: servicePrincipal.ServicePrincipalConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.applicationId">applicationId</a></code> | <code>string</code> | The application ID (client ID) of the application for which to create a service principal. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.accountEnabled">accountEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not the service principal account is enabled. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.alternativeNames">alternativeNames</a></code> | <code>string[]</code> | A list of alternative names, used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.appRoleAssignmentRequired">appRoleAssignmentRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this service principal requires an app role assignment to a user or group before Azure AD will issue a user or access token to the application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.description">description</a></code> | <code>string</code> | Description of the service principal provided for internal end-users. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.features">features</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures">ServicePrincipalFeatures</a>[]</code> | features block. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.featureTags">featureTags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags">ServicePrincipalFeatureTags</a>[]</code> | feature_tags block. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#id ServicePrincipal#id}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.loginUrl">loginUrl</a></code> | <code>string</code> | The URL where the service provider redirects the user to Azure AD to authenticate. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.notes">notes</a></code> | <code>string</code> | Free text field to capture information about the service principal, typically used for operational purposes. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.notificationEmailAddresses">notificationEmailAddresses</a></code> | <code>string[]</code> | List of email addresses where Azure AD sends a notification when the active certificate is near the expiration date. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.owners">owners</a></code> | <code>string[]</code> | A list of object IDs of principals that will be granted ownership of the service principal. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.preferredSingleSignOnMode">preferredSingleSignOnMode</a></code> | <code>string</code> | The single sign-on mode configured for this application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.samlSingleSignOn">samlSingleSignOn</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a></code> | saml_single_sign_on block. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.tags">tags</a></code> | <code>string[]</code> | A set of tags to apply to the service principal. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts">ServicePrincipalTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.useExisting">useExisting</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, the resource will return an existing service principal instead of failing with an error. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The application ID (client ID) of the application for which to create a service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#application_id ServicePrincipal#application_id}

---

##### `accountEnabled`<sup>Optional</sup> <a name="accountEnabled" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.accountEnabled"></a>

```typescript
public readonly accountEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not the service principal account is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#account_enabled ServicePrincipal#account_enabled}

---

##### `alternativeNames`<sup>Optional</sup> <a name="alternativeNames" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.alternativeNames"></a>

```typescript
public readonly alternativeNames: string[];
```

- *Type:* string[]

A list of alternative names, used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#alternative_names ServicePrincipal#alternative_names}

---

##### `appRoleAssignmentRequired`<sup>Optional</sup> <a name="appRoleAssignmentRequired" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.appRoleAssignmentRequired"></a>

```typescript
public readonly appRoleAssignmentRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this service principal requires an app role assignment to a user or group before Azure AD will issue a user or access token to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#app_role_assignment_required ServicePrincipal#app_role_assignment_required}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the service principal provided for internal end-users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#description ServicePrincipal#description}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.features"></a>

```typescript
public readonly features: IResolvable | ServicePrincipalFeatures[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures">ServicePrincipalFeatures</a>[]

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#features ServicePrincipal#features}

---

##### `featureTags`<sup>Optional</sup> <a name="featureTags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.featureTags"></a>

```typescript
public readonly featureTags: IResolvable | ServicePrincipalFeatureTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags">ServicePrincipalFeatureTags</a>[]

feature_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#feature_tags ServicePrincipal#feature_tags}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#id ServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loginUrl`<sup>Optional</sup> <a name="loginUrl" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.loginUrl"></a>

```typescript
public readonly loginUrl: string;
```

- *Type:* string

The URL where the service provider redirects the user to Azure AD to authenticate.

Azure AD uses the URL to launch the application from Microsoft 365 or the Azure AD My Apps. When blank, Azure AD performs IdP-initiated sign-on for applications configured with SAML-based single sign-on

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#login_url ServicePrincipal#login_url}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

Free text field to capture information about the service principal, typically used for operational purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#notes ServicePrincipal#notes}

---

##### `notificationEmailAddresses`<sup>Optional</sup> <a name="notificationEmailAddresses" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.notificationEmailAddresses"></a>

```typescript
public readonly notificationEmailAddresses: string[];
```

- *Type:* string[]

List of email addresses where Azure AD sends a notification when the active certificate is near the expiration date.

This is only for the certificates used to sign the SAML token issued for Azure AD Gallery applications

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#notification_email_addresses ServicePrincipal#notification_email_addresses}

---

##### `owners`<sup>Optional</sup> <a name="owners" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* string[]

A list of object IDs of principals that will be granted ownership of the service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#owners ServicePrincipal#owners}

---

##### `preferredSingleSignOnMode`<sup>Optional</sup> <a name="preferredSingleSignOnMode" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.preferredSingleSignOnMode"></a>

```typescript
public readonly preferredSingleSignOnMode: string;
```

- *Type:* string

The single sign-on mode configured for this application.

Azure AD uses the preferred single sign-on mode to launch the application from Microsoft 365 or the Azure AD My Apps

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#preferred_single_sign_on_mode ServicePrincipal#preferred_single_sign_on_mode}

---

##### `samlSingleSignOn`<sup>Optional</sup> <a name="samlSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.samlSingleSignOn"></a>

```typescript
public readonly samlSingleSignOn: ServicePrincipalSamlSingleSignOn;
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a>

saml_single_sign_on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#saml_single_sign_on ServicePrincipal#saml_single_sign_on}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A set of tags to apply to the service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#tags ServicePrincipal#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServicePrincipalTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts">ServicePrincipalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#timeouts ServicePrincipal#timeouts}

---

##### `useExisting`<sup>Optional</sup> <a name="useExisting" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.useExisting"></a>

```typescript
public readonly useExisting: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, the resource will return an existing service principal instead of failing with an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#use_existing ServicePrincipal#use_existing}

---

### ServicePrincipalFeatures <a name="ServicePrincipalFeatures" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.Initializer"></a>

```typescript
import { servicePrincipal } from '@cdktf/provider-azuread'

const servicePrincipalFeatures: servicePrincipal.ServicePrincipalFeatures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.customSingleSignOnApp">customSingleSignOnApp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this service principal represents a custom SAML application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.enterpriseApplication">enterpriseApplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this service principal represents an Enterprise Application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.galleryApplication">galleryApplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this service principal represents a gallery application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.visibleToUsers">visibleToUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this app is visible to users in My Apps and Office 365 Launcher. |

---

##### `customSingleSignOnApp`<sup>Optional</sup> <a name="customSingleSignOnApp" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.customSingleSignOnApp"></a>

```typescript
public readonly customSingleSignOnApp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this service principal represents a custom SAML application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#custom_single_sign_on_app ServicePrincipal#custom_single_sign_on_app}

---

##### `enterpriseApplication`<sup>Optional</sup> <a name="enterpriseApplication" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.enterpriseApplication"></a>

```typescript
public readonly enterpriseApplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this service principal represents an Enterprise Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#enterprise_application ServicePrincipal#enterprise_application}

---

##### `galleryApplication`<sup>Optional</sup> <a name="galleryApplication" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.galleryApplication"></a>

```typescript
public readonly galleryApplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this service principal represents a gallery application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#gallery_application ServicePrincipal#gallery_application}

---

##### `visibleToUsers`<sup>Optional</sup> <a name="visibleToUsers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.visibleToUsers"></a>

```typescript
public readonly visibleToUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this app is visible to users in My Apps and Office 365 Launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#visible_to_users ServicePrincipal#visible_to_users}

---

### ServicePrincipalFeatureTags <a name="ServicePrincipalFeatureTags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.Initializer"></a>

```typescript
import { servicePrincipal } from '@cdktf/provider-azuread'

const servicePrincipalFeatureTags: servicePrincipal.ServicePrincipalFeatureTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.customSingleSignOn">customSingleSignOn</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this service principal represents a custom SAML application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.enterprise">enterprise</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this service principal represents an Enterprise Application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.gallery">gallery</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this service principal represents a gallery application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.hide">hide</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this app is invisible to users in My Apps and Office 365 Launcher. |

---

##### `customSingleSignOn`<sup>Optional</sup> <a name="customSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.customSingleSignOn"></a>

```typescript
public readonly customSingleSignOn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this service principal represents a custom SAML application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#custom_single_sign_on ServicePrincipal#custom_single_sign_on}

---

##### `enterprise`<sup>Optional</sup> <a name="enterprise" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.enterprise"></a>

```typescript
public readonly enterprise: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this service principal represents an Enterprise Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#enterprise ServicePrincipal#enterprise}

---

##### `gallery`<sup>Optional</sup> <a name="gallery" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.gallery"></a>

```typescript
public readonly gallery: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this service principal represents a gallery application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#gallery ServicePrincipal#gallery}

---

##### `hide`<sup>Optional</sup> <a name="hide" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.hide"></a>

```typescript
public readonly hide: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this app is invisible to users in My Apps and Office 365 Launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#hide ServicePrincipal#hide}

---

### ServicePrincipalOauth2PermissionScopes <a name="ServicePrincipalOauth2PermissionScopes" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopes.Initializer"></a>

```typescript
import { servicePrincipal } from '@cdktf/provider-azuread'

const servicePrincipalOauth2PermissionScopes: servicePrincipal.ServicePrincipalOauth2PermissionScopes = { ... }
```


### ServicePrincipalSamlSingleSignOn <a name="ServicePrincipalSamlSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn.Initializer"></a>

```typescript
import { servicePrincipal } from '@cdktf/provider-azuread'

const servicePrincipalSamlSingleSignOn: servicePrincipal.ServicePrincipalSamlSingleSignOn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn.property.relayState">relayState</a></code> | <code>string</code> | The relative URI the service provider would redirect to after completion of the single sign-on flow. |

---

##### `relayState`<sup>Optional</sup> <a name="relayState" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn.property.relayState"></a>

```typescript
public readonly relayState: string;
```

- *Type:* string

The relative URI the service provider would redirect to after completion of the single sign-on flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#relay_state ServicePrincipal#relay_state}

---

### ServicePrincipalTimeouts <a name="ServicePrincipalTimeouts" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.Initializer"></a>

```typescript
import { servicePrincipal } from '@cdktf/provider-azuread'

const servicePrincipalTimeouts: servicePrincipal.ServicePrincipalTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#create ServicePrincipal#create}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#delete ServicePrincipal#delete}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#read ServicePrincipal#read}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#update ServicePrincipal#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#create ServicePrincipal#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#delete ServicePrincipal#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#read ServicePrincipal#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/service_principal#update ServicePrincipal#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicePrincipalAppRolesList <a name="ServicePrincipalAppRolesList" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.Initializer"></a>

```typescript
import { servicePrincipal } from '@cdktf/provider-azuread'

new servicePrincipal.ServicePrincipalAppRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.get"></a>

```typescript
public get(index: number): ServicePrincipalAppRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ServicePrincipalAppRolesOutputReference <a name="ServicePrincipalAppRolesOutputReference" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer"></a>

```typescript
import { servicePrincipal } from '@cdktf/provider-azuread'

new servicePrincipal.ServicePrincipalAppRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.allowedMemberTypes">allowedMemberTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRoles">ServicePrincipalAppRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedMemberTypes`<sup>Required</sup> <a name="allowedMemberTypes" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.allowedMemberTypes"></a>

```typescript
public readonly allowedMemberTypes: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServicePrincipalAppRoles;
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRoles">ServicePrincipalAppRoles</a>

---


### ServicePrincipalFeaturesList <a name="ServicePrincipalFeaturesList" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.Initializer"></a>

```typescript
import { servicePrincipal } from '@cdktf/provider-azuread'

new servicePrincipal.ServicePrincipalFeaturesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.get"></a>

```typescript
public get(index: number): ServicePrincipalFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures">ServicePrincipalFeatures</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicePrincipalFeatures[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures">ServicePrincipalFeatures</a>[]

---


### ServicePrincipalFeaturesOutputReference <a name="ServicePrincipalFeaturesOutputReference" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer"></a>

```typescript
import { servicePrincipal } from '@cdktf/provider-azuread'

new servicePrincipal.ServicePrincipalFeaturesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomSingleSignOnApp` <a name="resetCustomSingleSignOnApp" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resetCustomSingleSignOnApp"></a>

```typescript
public resetCustomSingleSignOnApp(): void
```

##### `resetEnterpriseApplication` <a name="resetEnterpriseApplication" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resetEnterpriseApplication"></a>

```typescript
public resetEnterpriseApplication(): void
```

##### `resetGalleryApplication` <a name="resetGalleryApplication" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resetGalleryApplication"></a>

```typescript
public resetGalleryApplication(): void
```

##### `resetVisibleToUsers` <a name="resetVisibleToUsers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resetVisibleToUsers"></a>

```typescript
public resetVisibleToUsers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.customSingleSignOnAppInput">customSingleSignOnAppInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.enterpriseApplicationInput">enterpriseApplicationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.galleryApplicationInput">galleryApplicationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.visibleToUsersInput">visibleToUsersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.customSingleSignOnApp">customSingleSignOnApp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.enterpriseApplication">enterpriseApplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.galleryApplication">galleryApplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.visibleToUsers">visibleToUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures">ServicePrincipalFeatures</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customSingleSignOnAppInput`<sup>Optional</sup> <a name="customSingleSignOnAppInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.customSingleSignOnAppInput"></a>

```typescript
public readonly customSingleSignOnAppInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enterpriseApplicationInput`<sup>Optional</sup> <a name="enterpriseApplicationInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.enterpriseApplicationInput"></a>

```typescript
public readonly enterpriseApplicationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `galleryApplicationInput`<sup>Optional</sup> <a name="galleryApplicationInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.galleryApplicationInput"></a>

```typescript
public readonly galleryApplicationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `visibleToUsersInput`<sup>Optional</sup> <a name="visibleToUsersInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.visibleToUsersInput"></a>

```typescript
public readonly visibleToUsersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customSingleSignOnApp`<sup>Required</sup> <a name="customSingleSignOnApp" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.customSingleSignOnApp"></a>

```typescript
public readonly customSingleSignOnApp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enterpriseApplication`<sup>Required</sup> <a name="enterpriseApplication" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.enterpriseApplication"></a>

```typescript
public readonly enterpriseApplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `galleryApplication`<sup>Required</sup> <a name="galleryApplication" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.galleryApplication"></a>

```typescript
public readonly galleryApplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `visibleToUsers`<sup>Required</sup> <a name="visibleToUsers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.visibleToUsers"></a>

```typescript
public readonly visibleToUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServicePrincipalFeatures | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures">ServicePrincipalFeatures</a> | cdktf.IResolvable

---


### ServicePrincipalFeatureTagsList <a name="ServicePrincipalFeatureTagsList" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.Initializer"></a>

```typescript
import { servicePrincipal } from '@cdktf/provider-azuread'

new servicePrincipal.ServicePrincipalFeatureTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.get"></a>

```typescript
public get(index: number): ServicePrincipalFeatureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags">ServicePrincipalFeatureTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicePrincipalFeatureTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags">ServicePrincipalFeatureTags</a>[]

---


### ServicePrincipalFeatureTagsOutputReference <a name="ServicePrincipalFeatureTagsOutputReference" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer"></a>

```typescript
import { servicePrincipal } from '@cdktf/provider-azuread'

new servicePrincipal.ServicePrincipalFeatureTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomSingleSignOn` <a name="resetCustomSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resetCustomSingleSignOn"></a>

```typescript
public resetCustomSingleSignOn(): void
```

##### `resetEnterprise` <a name="resetEnterprise" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resetEnterprise"></a>

```typescript
public resetEnterprise(): void
```

##### `resetGallery` <a name="resetGallery" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resetGallery"></a>

```typescript
public resetGallery(): void
```

##### `resetHide` <a name="resetHide" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resetHide"></a>

```typescript
public resetHide(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.customSingleSignOnInput">customSingleSignOnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.enterpriseInput">enterpriseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.galleryInput">galleryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.hideInput">hideInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.customSingleSignOn">customSingleSignOn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.enterprise">enterprise</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.gallery">gallery</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.hide">hide</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags">ServicePrincipalFeatureTags</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customSingleSignOnInput`<sup>Optional</sup> <a name="customSingleSignOnInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.customSingleSignOnInput"></a>

```typescript
public readonly customSingleSignOnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enterpriseInput`<sup>Optional</sup> <a name="enterpriseInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.enterpriseInput"></a>

```typescript
public readonly enterpriseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `galleryInput`<sup>Optional</sup> <a name="galleryInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.galleryInput"></a>

```typescript
public readonly galleryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideInput`<sup>Optional</sup> <a name="hideInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.hideInput"></a>

```typescript
public readonly hideInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customSingleSignOn`<sup>Required</sup> <a name="customSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.customSingleSignOn"></a>

```typescript
public readonly customSingleSignOn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enterprise`<sup>Required</sup> <a name="enterprise" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.enterprise"></a>

```typescript
public readonly enterprise: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gallery`<sup>Required</sup> <a name="gallery" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.gallery"></a>

```typescript
public readonly gallery: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hide`<sup>Required</sup> <a name="hide" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.hide"></a>

```typescript
public readonly hide: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServicePrincipalFeatureTags | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags">ServicePrincipalFeatureTags</a> | cdktf.IResolvable

---


### ServicePrincipalOauth2PermissionScopesList <a name="ServicePrincipalOauth2PermissionScopesList" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.Initializer"></a>

```typescript
import { servicePrincipal } from '@cdktf/provider-azuread'

new servicePrincipal.ServicePrincipalOauth2PermissionScopesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.get"></a>

```typescript
public get(index: number): ServicePrincipalOauth2PermissionScopesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ServicePrincipalOauth2PermissionScopesOutputReference <a name="ServicePrincipalOauth2PermissionScopesOutputReference" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer"></a>

```typescript
import { servicePrincipal } from '@cdktf/provider-azuread'

new servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDescription">adminConsentDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDisplayName">adminConsentDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDescription">userConsentDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDisplayName">userConsentDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopes">ServicePrincipalOauth2PermissionScopes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminConsentDescription`<sup>Required</sup> <a name="adminConsentDescription" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDescription"></a>

```typescript
public readonly adminConsentDescription: string;
```

- *Type:* string

---

##### `adminConsentDisplayName`<sup>Required</sup> <a name="adminConsentDisplayName" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDisplayName"></a>

```typescript
public readonly adminConsentDisplayName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userConsentDescription`<sup>Required</sup> <a name="userConsentDescription" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDescription"></a>

```typescript
public readonly userConsentDescription: string;
```

- *Type:* string

---

##### `userConsentDisplayName`<sup>Required</sup> <a name="userConsentDisplayName" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDisplayName"></a>

```typescript
public readonly userConsentDisplayName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServicePrincipalOauth2PermissionScopes;
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopes">ServicePrincipalOauth2PermissionScopes</a>

---


### ServicePrincipalSamlSingleSignOnOutputReference <a name="ServicePrincipalSamlSingleSignOnOutputReference" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.Initializer"></a>

```typescript
import { servicePrincipal } from '@cdktf/provider-azuread'

new servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRelayState` <a name="resetRelayState" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.resetRelayState"></a>

```typescript
public resetRelayState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.relayStateInput">relayStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.relayState">relayState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `relayStateInput`<sup>Optional</sup> <a name="relayStateInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.relayStateInput"></a>

```typescript
public readonly relayStateInput: string;
```

- *Type:* string

---

##### `relayState`<sup>Required</sup> <a name="relayState" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.relayState"></a>

```typescript
public readonly relayState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServicePrincipalSamlSingleSignOn;
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a>

---


### ServicePrincipalTimeoutsOutputReference <a name="ServicePrincipalTimeoutsOutputReference" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.Initializer"></a>

```typescript
import { servicePrincipal } from '@cdktf/provider-azuread'

new servicePrincipal.ServicePrincipalTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts">ServicePrincipalTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServicePrincipalTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts">ServicePrincipalTimeouts</a> | cdktf.IResolvable

---



