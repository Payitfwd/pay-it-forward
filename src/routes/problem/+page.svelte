<script lang="ts">
	import * as Resizable from '$lib/components/ui/resizable/index';
</script>

<div class="h-full w-full p-4">
	<Resizable.PaneGroup direction="horizontal" class="max-w-full rounded-lg border">
		<Resizable.Pane defaultSize={50}>
			<div class="flex h-[200px] items-center justify-center p-6">
				<span class="font-semibold">Problem Section</span>
			</div>
		</Resizable.Pane>
		<Resizable.Handle withHandle />
		<Resizable.Pane defaultSize={50}>
			<Resizable.PaneGroup direction="vertical">
				<Resizable.Pane defaultSize={50}>
					<div class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">Editor</span>
					</div>
				</Resizable.Pane>
				<Resizable.Handle withHandle />
				<Resizable.Pane defaultSize={75}>
					<div class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">Three</span>
					</div>
				</Resizable.Pane>
			</Resizable.PaneGroup>
		</Resizable.Pane>
	</Resizable.PaneGroup>
</div>
