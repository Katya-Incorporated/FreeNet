// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class AddedConnection {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):AddedConnection {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsAddedConnection(bb:flatbuffers.ByteBuffer, obj?:AddedConnection):AddedConnection {
  return (obj || new AddedConnection()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsAddedConnection(bb:flatbuffers.ByteBuffer, obj?:AddedConnection):AddedConnection {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new AddedConnection()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

transaction():string|null
transaction(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
transaction(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

from():string|null
from(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
from(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

fromLocation():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

to():string|null
to(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
to(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

toLocation():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

static startAddedConnection(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addTransaction(builder:flatbuffers.Builder, transactionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, transactionOffset, 0);
}

static addFrom(builder:flatbuffers.Builder, fromOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, fromOffset, 0);
}

static addFromLocation(builder:flatbuffers.Builder, fromLocation:number) {
  builder.addFieldFloat64(2, fromLocation, 0.0);
}

static addTo(builder:flatbuffers.Builder, toOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, toOffset, 0);
}

static addToLocation(builder:flatbuffers.Builder, toLocation:number) {
  builder.addFieldFloat64(4, toLocation, 0.0);
}

static endAddedConnection(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 6) // from
  builder.requiredField(offset, 10) // to
  return offset;
}

static createAddedConnection(builder:flatbuffers.Builder, transactionOffset:flatbuffers.Offset, fromOffset:flatbuffers.Offset, fromLocation:number, toOffset:flatbuffers.Offset, toLocation:number):flatbuffers.Offset {
  AddedConnection.startAddedConnection(builder);
  AddedConnection.addTransaction(builder, transactionOffset);
  AddedConnection.addFrom(builder, fromOffset);
  AddedConnection.addFromLocation(builder, fromLocation);
  AddedConnection.addTo(builder, toOffset);
  AddedConnection.addToLocation(builder, toLocation);
  return AddedConnection.endAddedConnection(builder);
}
}
