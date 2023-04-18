# `azuread_access_package_resource_package_association`

Refer to the Terraform Registory for docs: [`azuread_access_package_resource_package_association`](https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association).

# `accessPackageResourcePackageAssociation` Submodule <a name="`accessPackageResourcePackageAssociation` Submodule" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessPackageResourcePackageAssociation <a name="AccessPackageResourcePackageAssociation" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association azuread_access_package_resource_package_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer"></a>

```typescript
import { accessPackageResourcePackageAssociation } from '@cdktf/provider-azuread'

new accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation(scope: Construct, id: string, config: AccessPackageResourcePackageAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig">AccessPackageResourcePackageAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig">AccessPackageResourcePackageAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetAccessType">resetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: AccessPackageResourcePackageAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a>

---

##### `resetAccessType` <a name="resetAccessType" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetAccessType"></a>

```typescript
public resetAccessType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isConstruct"></a>

```typescript
import { accessPackageResourcePackageAssociation } from '@cdktf/provider-azuread'

accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isTerraformElement"></a>

```typescript
import { accessPackageResourcePackageAssociation } from '@cdktf/provider-azuread'

accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isTerraformResource"></a>

```typescript
import { accessPackageResourcePackageAssociation } from '@cdktf/provider-azuread'

accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference">AccessPackageResourcePackageAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessPackageIdInput">accessPackageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessTypeInput">accessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.catalogResourceAssociationIdInput">catalogResourceAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessPackageId">accessPackageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessType">accessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.catalogResourceAssociationId">catalogResourceAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: AccessPackageResourcePackageAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference">AccessPackageResourcePackageAssociationTimeoutsOutputReference</a>

---

##### `accessPackageIdInput`<sup>Optional</sup> <a name="accessPackageIdInput" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessPackageIdInput"></a>

```typescript
public readonly accessPackageIdInput: string;
```

- *Type:* string

---

##### `accessTypeInput`<sup>Optional</sup> <a name="accessTypeInput" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessTypeInput"></a>

```typescript
public readonly accessTypeInput: string;
```

- *Type:* string

---

##### `catalogResourceAssociationIdInput`<sup>Optional</sup> <a name="catalogResourceAssociationIdInput" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.catalogResourceAssociationIdInput"></a>

```typescript
public readonly catalogResourceAssociationIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: AccessPackageResourcePackageAssociationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a> | cdktf.IResolvable

---

##### `accessPackageId`<sup>Required</sup> <a name="accessPackageId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessPackageId"></a>

```typescript
public readonly accessPackageId: string;
```

- *Type:* string

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

---

##### `catalogResourceAssociationId`<sup>Required</sup> <a name="catalogResourceAssociationId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.catalogResourceAssociationId"></a>

```typescript
public readonly catalogResourceAssociationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessPackageResourcePackageAssociationConfig <a name="AccessPackageResourcePackageAssociationConfig" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.Initializer"></a>

```typescript
import { accessPackageResourcePackageAssociation } from '@cdktf/provider-azuread'

const accessPackageResourcePackageAssociationConfig: accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.accessPackageId">accessPackageId</a></code> | <code>string</code> | The ID of access package this resource association is configured to. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.catalogResourceAssociationId">catalogResourceAssociationId</a></code> | <code>string</code> | The ID of the access package catalog association. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.accessType">accessType</a></code> | <code>string</code> | The role of access type to the specified resource, valid values are `Member` and `Owner`. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association#id AccessPackageResourcePackageAssociation#id}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessPackageId`<sup>Required</sup> <a name="accessPackageId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.accessPackageId"></a>

```typescript
public readonly accessPackageId: string;
```

- *Type:* string

The ID of access package this resource association is configured to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association#access_package_id AccessPackageResourcePackageAssociation#access_package_id}

---

##### `catalogResourceAssociationId`<sup>Required</sup> <a name="catalogResourceAssociationId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.catalogResourceAssociationId"></a>

```typescript
public readonly catalogResourceAssociationId: string;
```

- *Type:* string

The ID of the access package catalog association.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association#catalog_resource_association_id AccessPackageResourcePackageAssociation#catalog_resource_association_id}

---

##### `accessType`<sup>Optional</sup> <a name="accessType" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

The role of access type to the specified resource, valid values are `Member` and `Owner`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association#access_type AccessPackageResourcePackageAssociation#access_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association#id AccessPackageResourcePackageAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AccessPackageResourcePackageAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association#timeouts AccessPackageResourcePackageAssociation#timeouts}

---

### AccessPackageResourcePackageAssociationTimeouts <a name="AccessPackageResourcePackageAssociationTimeouts" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts.Initializer"></a>

```typescript
import { accessPackageResourcePackageAssociation } from '@cdktf/provider-azuread'

const accessPackageResourcePackageAssociationTimeouts: accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association#create AccessPackageResourcePackageAssociation#create}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association#delete AccessPackageResourcePackageAssociation#delete}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association#read AccessPackageResourcePackageAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association#create AccessPackageResourcePackageAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association#delete AccessPackageResourcePackageAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association#read AccessPackageResourcePackageAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessPackageResourcePackageAssociationTimeoutsOutputReference <a name="AccessPackageResourcePackageAssociationTimeoutsOutputReference" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { accessPackageResourcePackageAssociation } from '@cdktf/provider-azuread'

new accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AccessPackageResourcePackageAssociationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a> | cdktf.IResolvable

---



