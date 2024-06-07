# `dataAzureadUsers` Submodule <a name="`dataAzureadUsers` Submodule" id="@cdktf/provider-azuread.dataAzureadUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadUsers <a name="DataAzureadUsers" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/data-sources/users azuread_users}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer"></a>

```typescript
import { dataAzureadUsers } from '@cdktf/provider-azuread'

new dataAzureadUsers.DataAzureadUsers(scope: Construct, id: string, config?: DataAzureadUsersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig">DataAzureadUsersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig">DataAzureadUsersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetEmployeeIds">resetEmployeeIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetIgnoreMissing">resetIgnoreMissing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetMailNicknames">resetMailNicknames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetMails">resetMails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetObjectIds">resetObjectIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetReturnAll">resetReturnAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetUserPrincipalNames">resetUserPrincipalNames</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzureadUsersTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a>

---

##### `resetEmployeeIds` <a name="resetEmployeeIds" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetEmployeeIds"></a>

```typescript
public resetEmployeeIds(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreMissing` <a name="resetIgnoreMissing" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetIgnoreMissing"></a>

```typescript
public resetIgnoreMissing(): void
```

##### `resetMailNicknames` <a name="resetMailNicknames" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetMailNicknames"></a>

```typescript
public resetMailNicknames(): void
```

##### `resetMails` <a name="resetMails" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetMails"></a>

```typescript
public resetMails(): void
```

##### `resetObjectIds` <a name="resetObjectIds" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetObjectIds"></a>

```typescript
public resetObjectIds(): void
```

##### `resetReturnAll` <a name="resetReturnAll" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetReturnAll"></a>

```typescript
public resetReturnAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserPrincipalNames` <a name="resetUserPrincipalNames" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetUserPrincipalNames"></a>

```typescript
public resetUserPrincipalNames(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzureadUsers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.isConstruct"></a>

```typescript
import { dataAzureadUsers } from '@cdktf/provider-azuread'

dataAzureadUsers.DataAzureadUsers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.isTerraformElement"></a>

```typescript
import { dataAzureadUsers } from '@cdktf/provider-azuread'

dataAzureadUsers.DataAzureadUsers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.isTerraformDataSource"></a>

```typescript
import { dataAzureadUsers } from '@cdktf/provider-azuread'

dataAzureadUsers.DataAzureadUsers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.generateConfigForImport"></a>

```typescript
import { dataAzureadUsers } from '@cdktf/provider-azuread'

dataAzureadUsers.DataAzureadUsers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzureadUsers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzureadUsers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzureadUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/data-sources/users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzureadUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference">DataAzureadUsersTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.users">users</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList">DataAzureadUsersUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.employeeIdsInput">employeeIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.ignoreMissingInput">ignoreMissingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mailNicknamesInput">mailNicknamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mailsInput">mailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.objectIdsInput">objectIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.returnAllInput">returnAllInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.userPrincipalNamesInput">userPrincipalNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.employeeIds">employeeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.ignoreMissing">ignoreMissing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mailNicknames">mailNicknames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mails">mails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.objectIds">objectIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.returnAll">returnAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.userPrincipalNames">userPrincipalNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadUsersTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference">DataAzureadUsersTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.users"></a>

```typescript
public readonly users: DataAzureadUsersUsersList;
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList">DataAzureadUsersUsersList</a>

---

##### `employeeIdsInput`<sup>Optional</sup> <a name="employeeIdsInput" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.employeeIdsInput"></a>

```typescript
public readonly employeeIdsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreMissingInput`<sup>Optional</sup> <a name="ignoreMissingInput" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.ignoreMissingInput"></a>

```typescript
public readonly ignoreMissingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mailNicknamesInput`<sup>Optional</sup> <a name="mailNicknamesInput" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mailNicknamesInput"></a>

```typescript
public readonly mailNicknamesInput: string[];
```

- *Type:* string[]

---

##### `mailsInput`<sup>Optional</sup> <a name="mailsInput" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mailsInput"></a>

```typescript
public readonly mailsInput: string[];
```

- *Type:* string[]

---

##### `objectIdsInput`<sup>Optional</sup> <a name="objectIdsInput" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.objectIdsInput"></a>

```typescript
public readonly objectIdsInput: string[];
```

- *Type:* string[]

---

##### `returnAllInput`<sup>Optional</sup> <a name="returnAllInput" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.returnAllInput"></a>

```typescript
public readonly returnAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzureadUsersTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a>

---

##### `userPrincipalNamesInput`<sup>Optional</sup> <a name="userPrincipalNamesInput" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.userPrincipalNamesInput"></a>

```typescript
public readonly userPrincipalNamesInput: string[];
```

- *Type:* string[]

---

##### `employeeIds`<sup>Required</sup> <a name="employeeIds" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.employeeIds"></a>

```typescript
public readonly employeeIds: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreMissing`<sup>Required</sup> <a name="ignoreMissing" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.ignoreMissing"></a>

```typescript
public readonly ignoreMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mailNicknames`<sup>Required</sup> <a name="mailNicknames" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mailNicknames"></a>

```typescript
public readonly mailNicknames: string[];
```

- *Type:* string[]

---

##### `mails`<sup>Required</sup> <a name="mails" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mails"></a>

```typescript
public readonly mails: string[];
```

- *Type:* string[]

---

##### `objectIds`<sup>Required</sup> <a name="objectIds" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.objectIds"></a>

```typescript
public readonly objectIds: string[];
```

- *Type:* string[]

---

##### `returnAll`<sup>Required</sup> <a name="returnAll" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.returnAll"></a>

```typescript
public readonly returnAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userPrincipalNames`<sup>Required</sup> <a name="userPrincipalNames" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.userPrincipalNames"></a>

```typescript
public readonly userPrincipalNames: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadUsersConfig <a name="DataAzureadUsersConfig" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.Initializer"></a>

```typescript
import { dataAzureadUsers } from '@cdktf/provider-azuread'

const dataAzureadUsersConfig: dataAzureadUsers.DataAzureadUsersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.employeeIds">employeeIds</a></code> | <code>string[]</code> | The employee identifier assigned to the user by the organisation. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/data-sources/users#id DataAzureadUsers#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.ignoreMissing">ignoreMissing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ignore missing users and return users that were found. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.mailNicknames">mailNicknames</a></code> | <code>string[]</code> | The email aliases of the users. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.mails">mails</a></code> | <code>string[]</code> | The SMTP address of the users. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.objectIds">objectIds</a></code> | <code>string[]</code> | The object IDs of the users. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.returnAll">returnAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Fetch all users with no filter and return all that were found. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.userPrincipalNames">userPrincipalNames</a></code> | <code>string[]</code> | The user principal names (UPNs) of the users. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `employeeIds`<sup>Optional</sup> <a name="employeeIds" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.employeeIds"></a>

```typescript
public readonly employeeIds: string[];
```

- *Type:* string[]

The employee identifier assigned to the user by the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/data-sources/users#employee_ids DataAzureadUsers#employee_ids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/data-sources/users#id DataAzureadUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreMissing`<sup>Optional</sup> <a name="ignoreMissing" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.ignoreMissing"></a>

```typescript
public readonly ignoreMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ignore missing users and return users that were found.

The data source will still fail if no users are found

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/data-sources/users#ignore_missing DataAzureadUsers#ignore_missing}

---

##### `mailNicknames`<sup>Optional</sup> <a name="mailNicknames" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.mailNicknames"></a>

```typescript
public readonly mailNicknames: string[];
```

- *Type:* string[]

The email aliases of the users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/data-sources/users#mail_nicknames DataAzureadUsers#mail_nicknames}

---

##### `mails`<sup>Optional</sup> <a name="mails" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.mails"></a>

```typescript
public readonly mails: string[];
```

- *Type:* string[]

The SMTP address of the users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/data-sources/users#mails DataAzureadUsers#mails}

---

##### `objectIds`<sup>Optional</sup> <a name="objectIds" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.objectIds"></a>

```typescript
public readonly objectIds: string[];
```

- *Type:* string[]

The object IDs of the users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/data-sources/users#object_ids DataAzureadUsers#object_ids}

---

##### `returnAll`<sup>Optional</sup> <a name="returnAll" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.returnAll"></a>

```typescript
public readonly returnAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Fetch all users with no filter and return all that were found.

The data source will still fail if no users are found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/data-sources/users#return_all DataAzureadUsers#return_all}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzureadUsersTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/data-sources/users#timeouts DataAzureadUsers#timeouts}

---

##### `userPrincipalNames`<sup>Optional</sup> <a name="userPrincipalNames" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.userPrincipalNames"></a>

```typescript
public readonly userPrincipalNames: string[];
```

- *Type:* string[]

The user principal names (UPNs) of the users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/data-sources/users#user_principal_names DataAzureadUsers#user_principal_names}

---

### DataAzureadUsersTimeouts <a name="DataAzureadUsersTimeouts" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts.Initializer"></a>

```typescript
import { dataAzureadUsers } from '@cdktf/provider-azuread'

const dataAzureadUsersTimeouts: dataAzureadUsers.DataAzureadUsersTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/data-sources/users#read DataAzureadUsers#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.51.0/docs/data-sources/users#read DataAzureadUsers#read}.

---

### DataAzureadUsersUsers <a name="DataAzureadUsersUsers" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsers.Initializer"></a>

```typescript
import { dataAzureadUsers } from '@cdktf/provider-azuread'

const dataAzureadUsersUsers: dataAzureadUsers.DataAzureadUsersUsers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzureadUsersTimeoutsOutputReference <a name="DataAzureadUsersTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzureadUsers } from '@cdktf/provider-azuread'

new dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzureadUsersTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a>

---


### DataAzureadUsersUsersList <a name="DataAzureadUsersUsersList" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.Initializer"></a>

```typescript
import { dataAzureadUsers } from '@cdktf/provider-azuread'

new dataAzureadUsers.DataAzureadUsersUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.get"></a>

```typescript
public get(index: number): DataAzureadUsersUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzureadUsersUsersOutputReference <a name="DataAzureadUsersUsersOutputReference" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer"></a>

```typescript
import { dataAzureadUsers } from '@cdktf/provider-azuread'

new dataAzureadUsers.DataAzureadUsersUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.accountEnabled">accountEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.employeeId">employeeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.mail">mail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.mailNickname">mailNickname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.onpremisesImmutableId">onpremisesImmutableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.onpremisesSamAccountName">onpremisesSamAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.onpremisesUserPrincipalName">onpremisesUserPrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.usageLocation">usageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.userPrincipalName">userPrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsers">DataAzureadUsersUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountEnabled`<sup>Required</sup> <a name="accountEnabled" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.accountEnabled"></a>

```typescript
public readonly accountEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `employeeId`<sup>Required</sup> <a name="employeeId" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.employeeId"></a>

```typescript
public readonly employeeId: string;
```

- *Type:* string

---

##### `mail`<sup>Required</sup> <a name="mail" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.mail"></a>

```typescript
public readonly mail: string;
```

- *Type:* string

---

##### `mailNickname`<sup>Required</sup> <a name="mailNickname" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.mailNickname"></a>

```typescript
public readonly mailNickname: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `onpremisesImmutableId`<sup>Required</sup> <a name="onpremisesImmutableId" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.onpremisesImmutableId"></a>

```typescript
public readonly onpremisesImmutableId: string;
```

- *Type:* string

---

##### `onpremisesSamAccountName`<sup>Required</sup> <a name="onpremisesSamAccountName" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.onpremisesSamAccountName"></a>

```typescript
public readonly onpremisesSamAccountName: string;
```

- *Type:* string

---

##### `onpremisesUserPrincipalName`<sup>Required</sup> <a name="onpremisesUserPrincipalName" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.onpremisesUserPrincipalName"></a>

```typescript
public readonly onpremisesUserPrincipalName: string;
```

- *Type:* string

---

##### `usageLocation`<sup>Required</sup> <a name="usageLocation" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.usageLocation"></a>

```typescript
public readonly usageLocation: string;
```

- *Type:* string

---

##### `userPrincipalName`<sup>Required</sup> <a name="userPrincipalName" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.userPrincipalName"></a>

```typescript
public readonly userPrincipalName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzureadUsersUsers;
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsers">DataAzureadUsersUsers</a>

---



