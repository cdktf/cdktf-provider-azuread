# `azuread_access_package_catalog_role_assignment`

Refer to the Terraform Registory for docs: [`azuread_access_package_catalog_role_assignment`](https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/access_package_catalog_role_assignment).

# `accessPackageCatalogRoleAssignment` Submodule <a name="`accessPackageCatalogRoleAssignment` Submodule" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessPackageCatalogRoleAssignment <a name="AccessPackageCatalogRoleAssignment" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/access_package_catalog_role_assignment azuread_access_package_catalog_role_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer"></a>

```typescript
import { accessPackageCatalogRoleAssignment } from '@cdktf/provider-azuread'

new accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment(scope: Construct, id: string, config: AccessPackageCatalogRoleAssignmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig">AccessPackageCatalogRoleAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig">AccessPackageCatalogRoleAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.putTimeouts"></a>

```typescript
public putTimeouts(value: AccessPackageCatalogRoleAssignmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts">AccessPackageCatalogRoleAssignmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isConstruct"></a>

```typescript
import { accessPackageCatalogRoleAssignment } from '@cdktf/provider-azuread'

accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isTerraformElement"></a>

```typescript
import { accessPackageCatalogRoleAssignment } from '@cdktf/provider-azuread'

accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isTerraformResource"></a>

```typescript
import { accessPackageCatalogRoleAssignment } from '@cdktf/provider-azuread'

accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference">AccessPackageCatalogRoleAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.principalObjectIdInput">principalObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.roleIdInput">roleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts">AccessPackageCatalogRoleAssignmentTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.principalObjectId">principalObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.timeouts"></a>

```typescript
public readonly timeouts: AccessPackageCatalogRoleAssignmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference">AccessPackageCatalogRoleAssignmentTimeoutsOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `principalObjectIdInput`<sup>Optional</sup> <a name="principalObjectIdInput" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.principalObjectIdInput"></a>

```typescript
public readonly principalObjectIdInput: string;
```

- *Type:* string

---

##### `roleIdInput`<sup>Optional</sup> <a name="roleIdInput" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.roleIdInput"></a>

```typescript
public readonly roleIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: AccessPackageCatalogRoleAssignmentTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts">AccessPackageCatalogRoleAssignmentTimeouts</a> | cdktf.IResolvable

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `principalObjectId`<sup>Required</sup> <a name="principalObjectId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.principalObjectId"></a>

```typescript
public readonly principalObjectId: string;
```

- *Type:* string

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessPackageCatalogRoleAssignmentConfig <a name="AccessPackageCatalogRoleAssignmentConfig" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.Initializer"></a>

```typescript
import { accessPackageCatalogRoleAssignment } from '@cdktf/provider-azuread'

const accessPackageCatalogRoleAssignmentConfig: accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.catalogId">catalogId</a></code> | <code>string</code> | The unique ID of the access package catalog. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.principalObjectId">principalObjectId</a></code> | <code>string</code> | The object ID of the member principal. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.roleId">roleId</a></code> | <code>string</code> | The object ID of the catalog role for this assignment. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/access_package_catalog_role_assignment#id AccessPackageCatalogRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts">AccessPackageCatalogRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

The unique ID of the access package catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/access_package_catalog_role_assignment#catalog_id AccessPackageCatalogRoleAssignment#catalog_id}

---

##### `principalObjectId`<sup>Required</sup> <a name="principalObjectId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.principalObjectId"></a>

```typescript
public readonly principalObjectId: string;
```

- *Type:* string

The object ID of the member principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/access_package_catalog_role_assignment#principal_object_id AccessPackageCatalogRoleAssignment#principal_object_id}

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

The object ID of the catalog role for this assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/access_package_catalog_role_assignment#role_id AccessPackageCatalogRoleAssignment#role_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/access_package_catalog_role_assignment#id AccessPackageCatalogRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AccessPackageCatalogRoleAssignmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts">AccessPackageCatalogRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/access_package_catalog_role_assignment#timeouts AccessPackageCatalogRoleAssignment#timeouts}

---

### AccessPackageCatalogRoleAssignmentTimeouts <a name="AccessPackageCatalogRoleAssignmentTimeouts" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.Initializer"></a>

```typescript
import { accessPackageCatalogRoleAssignment } from '@cdktf/provider-azuread'

const accessPackageCatalogRoleAssignmentTimeouts: accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/access_package_catalog_role_assignment#create AccessPackageCatalogRoleAssignment#create}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/access_package_catalog_role_assignment#delete AccessPackageCatalogRoleAssignment#delete}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/access_package_catalog_role_assignment#read AccessPackageCatalogRoleAssignment#read}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/access_package_catalog_role_assignment#update AccessPackageCatalogRoleAssignment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/access_package_catalog_role_assignment#create AccessPackageCatalogRoleAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/access_package_catalog_role_assignment#delete AccessPackageCatalogRoleAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/access_package_catalog_role_assignment#read AccessPackageCatalogRoleAssignment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/access_package_catalog_role_assignment#update AccessPackageCatalogRoleAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessPackageCatalogRoleAssignmentTimeoutsOutputReference <a name="AccessPackageCatalogRoleAssignmentTimeoutsOutputReference" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { accessPackageCatalogRoleAssignment } from '@cdktf/provider-azuread'

new accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts">AccessPackageCatalogRoleAssignmentTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AccessPackageCatalogRoleAssignmentTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts">AccessPackageCatalogRoleAssignmentTimeouts</a> | cdktf.IResolvable

---



