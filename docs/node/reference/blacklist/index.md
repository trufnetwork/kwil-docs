---
sidebar_position: 98
sidebar_label: "blacklist"
id: "kwild-blacklist"
title: "kwild blacklist"
description: "Manage a node's peer blacklist"
slug: /ref/kwild/blacklist
---

## kwild blacklist

Manage a node's peer blacklist

### Synopsis

The blacklist command allows you to manage the node's peer blacklist, including adding nodes, removing nodes, and listing blacklisted nodes.

Peer blacklisting provides operators with control over problematic peers that may cause network issues or waste resources. Blacklisted peers are prevented from connecting to your node regardless of whitelist status.

Blacklist data is automatically persisted across node restarts and survives configuration changes.

### Options

```
  -h, --help            help for blacklist
      --output string   the format for command output - either 'text' or 'json' (default "text")
```

### Options inherited from parent commands

```
  -r, --root string   root directory (default "~/.kwild")
```

### SEE ALSO

* [kwild](/docs/ref/kwild)	 - Kwil daemon
* [kwild blacklist add](/docs/ref/kwild/blacklist/add)	 - Add a peer to the node's blacklist
* [kwild blacklist list](/docs/ref/kwild/blacklist/list)	 - List blacklisted peers
* [kwild blacklist remove](/docs/ref/kwild/blacklist/remove)	 - Remove a peer from the blacklist
