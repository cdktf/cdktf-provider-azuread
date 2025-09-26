# `dataAzureadGroup` Submodule <a name="`dataAzureadGroup` Submodule" id="@cdktf/provider-azuread.dataAzureadGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadGroup <a name="DataAzureadGroup" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group azuread_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer"></a>

```typescript
import { dataAzureadGroup } from '@cdktf/provider-azuread'

new dataAzureadGroup.DataAzureadGroup(scope: Construct, id: string, config?: DataAzureadGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig">DataAzureadGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig">DataAzureadGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetIncludeTransitiveMembers">resetIncludeTransitiveMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetMailEnabled">resetMailEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetMailNickname">resetMailNickname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetObjectId">resetObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetSecurityEnabled">resetSecurityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzureadGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts">DataAzureadGroupTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeTransitiveMembers` <a name="resetIncludeTransitiveMembers" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetIncludeTransitiveMembers"></a>

```typescript
public resetIncludeTransitiveMembers(): void
```

##### `resetMailEnabled` <a name="resetMailEnabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetMailEnabled"></a>

```typescript
public resetMailEnabled(): void
```

##### `resetMailNickname` <a name="resetMailNickname" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetMailNickname"></a>

```typescript
public resetMailNickname(): void
```

##### `resetObjectId` <a name="resetObjectId" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetObjectId"></a>

```typescript
public resetObjectId(): void
```

##### `resetSecurityEnabled` <a name="resetSecurityEnabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetSecurityEnabled"></a>

```typescript
public resetSecurityEnabled(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzureadGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isConstruct"></a>

```typescript
import { dataAzureadGroup } from '@cdktf/provider-azuread'

dataAzureadGroup.DataAzureadGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isTerraformElement"></a>

```typescript
import { dataAzureadGroup } from '@cdktf/provider-azuread'

dataAzureadGroup.DataAzureadGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isTerraformDataSource"></a>

```typescript
import { dataAzureadGroup } from '@cdktf/provider-azuread'

dataAzureadGroup.DataAzureadGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.generateConfigForImport"></a>

```typescript
import { dataAzureadGroup } from '@cdktf/provider-azuread'

dataAzureadGroup.DataAzureadGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzureadGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzureadGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzureadGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzureadGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.assignableToRole">assignableToRole</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.autoSubscribeNewMembers">autoSubscribeNewMembers</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.behaviors">behaviors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.dynamicMembership">dynamicMembership</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList">DataAzureadGroupDynamicMembershipList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.externalSendersAllowed">externalSendersAllowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.hideFromAddressLists">hideFromAddressLists</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.hideFromOutlookClients">hideFromOutlookClients</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mail">mail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesDomainName">onpremisesDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesGroupType">onpremisesGroupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesNetbiosName">onpremisesNetbiosName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesSamAccountName">onpremisesSamAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesSecurityIdentifier">onpremisesSecurityIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesSyncEnabled">onpremisesSyncEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.owners">owners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.provisioningOptions">provisioningOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.proxyAddresses">proxyAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.theme">theme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference">DataAzureadGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.types">types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.writebackEnabled">writebackEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.includeTransitiveMembersInput">includeTransitiveMembersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mailEnabledInput">mailEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mailNicknameInput">mailNicknameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.securityEnabledInput">securityEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts">DataAzureadGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.includeTransitiveMembers">includeTransitiveMembers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mailEnabled">mailEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mailNickname">mailNickname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.securityEnabled">securityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `assignableToRole`<sup>Required</sup> <a name="assignableToRole" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.assignableToRole"></a>

```typescript
public readonly assignableToRole: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `autoSubscribeNewMembers`<sup>Required</sup> <a name="autoSubscribeNewMembers" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.autoSubscribeNewMembers"></a>

```typescript
public readonly autoSubscribeNewMembers: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `behaviors`<sup>Required</sup> <a name="behaviors" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.behaviors"></a>

```typescript
public readonly behaviors: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dynamicMembership`<sup>Required</sup> <a name="dynamicMembership" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.dynamicMembership"></a>

```typescript
public readonly dynamicMembership: DataAzureadGroupDynamicMembershipList;
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList">DataAzureadGroupDynamicMembershipList</a>

---

##### `externalSendersAllowed`<sup>Required</sup> <a name="externalSendersAllowed" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.externalSendersAllowed"></a>

```typescript
public readonly externalSendersAllowed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `hideFromAddressLists`<sup>Required</sup> <a name="hideFromAddressLists" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.hideFromAddressLists"></a>

```typescript
public readonly hideFromAddressLists: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `hideFromOutlookClients`<sup>Required</sup> <a name="hideFromOutlookClients" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.hideFromOutlookClients"></a>

```typescript
public readonly hideFromOutlookClients: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mail`<sup>Required</sup> <a name="mail" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mail"></a>

```typescript
public readonly mail: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `onpremisesDomainName`<sup>Required</sup> <a name="onpremisesDomainName" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesDomainName"></a>

```typescript
public readonly onpremisesDomainName: string;
```

- *Type:* string

---

##### `onpremisesGroupType`<sup>Required</sup> <a name="onpremisesGroupType" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesGroupType"></a>

```typescript
public readonly onpremisesGroupType: string;
```

- *Type:* string

---

##### `onpremisesNetbiosName`<sup>Required</sup> <a name="onpremisesNetbiosName" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesNetbiosName"></a>

```typescript
public readonly onpremisesNetbiosName: string;
```

- *Type:* string

---

##### `onpremisesSamAccountName`<sup>Required</sup> <a name="onpremisesSamAccountName" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesSamAccountName"></a>

```typescript
public readonly onpremisesSamAccountName: string;
```

- *Type:* string

---

##### `onpremisesSecurityIdentifier`<sup>Required</sup> <a name="onpremisesSecurityIdentifier" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesSecurityIdentifier"></a>

```typescript
public readonly onpremisesSecurityIdentifier: string;
```

- *Type:* string

---

##### `onpremisesSyncEnabled`<sup>Required</sup> <a name="onpremisesSyncEnabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesSyncEnabled"></a>

```typescript
public readonly onpremisesSyncEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* string[]

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

---

##### `provisioningOptions`<sup>Required</sup> <a name="provisioningOptions" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.provisioningOptions"></a>

```typescript
public readonly provisioningOptions: string[];
```

- *Type:* string[]

---

##### `proxyAddresses`<sup>Required</sup> <a name="proxyAddresses" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.proxyAddresses"></a>

```typescript
public readonly proxyAddresses: string[];
```

- *Type:* string[]

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.theme"></a>

```typescript
public readonly theme: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference">DataAzureadGroupTimeoutsOutputReference</a>

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

##### `writebackEnabled`<sup>Required</sup> <a name="writebackEnabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.writebackEnabled"></a>

```typescript
public readonly writebackEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeTransitiveMembersInput`<sup>Optional</sup> <a name="includeTransitiveMembersInput" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.includeTransitiveMembersInput"></a>

```typescript
public readonly includeTransitiveMembersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mailEnabledInput`<sup>Optional</sup> <a name="mailEnabledInput" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mailEnabledInput"></a>

```typescript
public readonly mailEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mailNicknameInput`<sup>Optional</sup> <a name="mailNicknameInput" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mailNicknameInput"></a>

```typescript
public readonly mailNicknameInput: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `securityEnabledInput`<sup>Optional</sup> <a name="securityEnabledInput" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.securityEnabledInput"></a>

```typescript
public readonly securityEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzureadGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts">DataAzureadGroupTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeTransitiveMembers`<sup>Required</sup> <a name="includeTransitiveMembers" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.includeTransitiveMembers"></a>

```typescript
public readonly includeTransitiveMembers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mailEnabled`<sup>Required</sup> <a name="mailEnabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mailEnabled"></a>

```typescript
public readonly mailEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mailNickname`<sup>Required</sup> <a name="mailNickname" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mailNickname"></a>

```typescript
public readonly mailNickname: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `securityEnabled`<sup>Required</sup> <a name="securityEnabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.securityEnabled"></a>

```typescript
public readonly securityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadGroupConfig <a name="DataAzureadGroupConfig" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.Initializer"></a>

```typescript
import { dataAzureadGroup } from '@cdktf/provider-azuread'

const dataAzureadGroupConfig: dataAzureadGroup.DataAzureadGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name for the group. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group#id DataAzureadGroup#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.includeTransitiveMembers">includeTransitiveMembers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to include transitive members (a flat list of all nested members). |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.mailEnabled">mailEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the group is mail-enabled. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.mailNickname">mailNickname</a></code> | <code>string</code> | The mail alias for the group, unique in the organisation. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.objectId">objectId</a></code> | <code>string</code> | The object ID of the group. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.securityEnabled">securityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the group is a security group. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts">DataAzureadGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group#display_name DataAzureadGroup#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group#id DataAzureadGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeTransitiveMembers`<sup>Optional</sup> <a name="includeTransitiveMembers" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.includeTransitiveMembers"></a>

```typescript
public readonly includeTransitiveMembers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to include transitive members (a flat list of all nested members).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group#include_transitive_members DataAzureadGroup#include_transitive_members}

---

##### `mailEnabled`<sup>Optional</sup> <a name="mailEnabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.mailEnabled"></a>

```typescript
public readonly mailEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the group is mail-enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group#mail_enabled DataAzureadGroup#mail_enabled}

---

##### `mailNickname`<sup>Optional</sup> <a name="mailNickname" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.mailNickname"></a>

```typescript
public readonly mailNickname: string;
```

- *Type:* string

The mail alias for the group, unique in the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group#mail_nickname DataAzureadGroup#mail_nickname}

---

##### `objectId`<sup>Optional</sup> <a name="objectId" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

The object ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group#object_id DataAzureadGroup#object_id}

---

##### `securityEnabled`<sup>Optional</sup> <a name="securityEnabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.securityEnabled"></a>

```typescript
public readonly securityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the group is a security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group#security_enabled DataAzureadGroup#security_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts">DataAzureadGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group#timeouts DataAzureadGroup#timeouts}

---

### DataAzureadGroupDynamicMembership <a name="DataAzureadGroupDynamicMembership" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembership"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembership.Initializer"></a>

```typescript
import { dataAzureadGroup } from '@cdktf/provider-azuread'

const dataAzureadGroupDynamicMembership: dataAzureadGroup.DataAzureadGroupDynamicMembership = { ... }
```


### DataAzureadGroupTimeouts <a name="DataAzureadGroupTimeouts" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts.Initializer"></a>

```typescript
import { dataAzureadGroup } from '@cdktf/provider-azuread'

const dataAzureadGroupTimeouts: dataAzureadGroup.DataAzureadGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group#read DataAzureadGroup#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/group#read DataAzureadGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadGroupDynamicMembershipList <a name="DataAzureadGroupDynamicMembershipList" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.Initializer"></a>

```typescript
import { dataAzureadGroup } from '@cdktf/provider-azuread'

new dataAzureadGroup.DataAzureadGroupDynamicMembershipList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.get"></a>

```typescript
public get(index: number): DataAzureadGroupDynamicMembershipOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzureadGroupDynamicMembershipOutputReference <a name="DataAzureadGroupDynamicMembershipOutputReference" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer"></a>

```typescript
import { dataAzureadGroup } from '@cdktf/provider-azuread'

new dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.rule">rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembership">DataAzureadGroupDynamicMembership</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzureadGroupDynamicMembership;
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembership">DataAzureadGroupDynamicMembership</a>

---


### DataAzureadGroupTimeoutsOutputReference <a name="DataAzureadGroupTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzureadGroup } from '@cdktf/provider-azuread'

new dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts">DataAzureadGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzureadGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts">DataAzureadGroupTimeouts</a>

---



