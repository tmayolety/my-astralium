<?php

	$section = $_GET['Section'];
	if(empty($section)){ 						$section = "mediaquery"; }

	if($section == "mediaquery") 				{ $p = "7-manual/3-modules/mediaquery/mediaquery.php";				$_mediaquery_active = true; }

	if($section == "schemes") 					{ $p = "7-manual/9-schemes/schemes.php";							$_schemes_active = true; }

	if($section == "grid-base") 				{ $p = "7-manual/3-modules/grid/grid-base.php";						$_grid_base_active = true; }
	if($section == "grid-columns") 				{ $p = "7-manual/3-modules/grid/grid-columns.php";					$_grid_columns_active = true; }
	if($section == "grid-types") 				{ $p = "7-manual/3-modules/grid/grid-types.php";					$_grid_types_active = true; }
	if($section == "grid-gap") 					{ $p = "7-manual/3-modules/grid/grid-gap.php";						$_grid_gap_active = true; }
	if($section == "grid-padding") 				{ $p = "7-manual/3-modules/grid/grid-padding.php";					$_grid_padding_active = true; }
	if($section == "grid-align") 				{ $p = "7-manual/3-modules/grid/grid-align.php";					$_grid_align_active = true; }
	if($section == "grid-header") 				{ $p = "7-manual/3-modules/grid/grid-header.php";					$_grid_header_active = true; }
	if($section == "grid-nesting") 				{ $p = "7-manual/3-modules/grid/grid-nesting.php";					$_grid_nesting_active = true; }
	if($section == "grid-col-content") 			{ $p = "7-manual/3-modules/grid/grid-col-content.php";				$_grid_col_content_active = true; }
	if($section == "grid-flip-col") 			{ $p = "7-manual/3-modules/grid/grid-flip-col.php";					$_grid_flip_col_active = true; }
	if($section == "grid-misc") 				{ $p = "7-manual/3-modules/grid/grid-misc.php";						$_grid_misc_active = true; }
	if($section == "grid-templates") 			{ $p = "7-manual/3-modules/grid/grid-templates.php";				$_grid_templates_active = true; }

	if($section == "colors-types") 				{ $p = "7-manual/3-modules/colors/colors-types.php";				$_colors_types_active = true; }
	if($section == "colors-fluids") 			{ $p = "7-manual/3-modules/colors/colors-fluids.php";				$_colors_fluids_active = true; }

	if($section == "button-base") 				{ $p = "7-manual/3-modules/button/button-base.php";					$_button_base_active = true; }
	if($section == "button-circle") 			{ $p = "7-manual/3-modules/button/button-circle.php";				$_button_circle_active = true; }
	if($section == "button-group-collapse") 	{ $p = "7-manual/3-modules/button/button-group-collapse.php";		$_button_group_collapse_active = true; }
	if($section == "button-group-toggle") 		{ $p = "7-manual/3-modules/button/button-group-toggle.php";			$_button_group_toggle_active = true; }
	if($section == "button-switch1") 			{ $p = "7-manual/3-modules/button/button-switch1.php";				$_button_switch1_active = true; }
	if($section == "button-switch2") 			{ $p = "7-manual/3-modules/button/button-switch2.php";				$_button_switch2_active = true; }
	if($section == "button-multi") 				{ $p = "7-manual/3-modules/button/button-multi.php";				$_button_multi_active = true; }

	if($section == "selects") 					{ $p = "7-manual/3-modules/selects/selects.php";					$_selects_active = true; }

	if($section == "table-base") 				{ $p = "7-manual/3-modules/table/table-base.php";					$_table_base_active = true; }
	if($section == "table-sizes") 				{ $p = "7-manual/3-modules/table/table-sizes.php";					$_table_sizes_active = true; }
	if($section == "table-columns") 			{ $p = "7-manual/3-modules/table/table-columns.php";				$_table_columns_active = true; }
	if($section == "table-align") 				{ $p = "7-manual/3-modules/table/table-align.php";					$_table_align_active = true; }
	if($section == "table-colors") 				{ $p = "7-manual/3-modules/table/table-colors.php";					$_table_colors_active = true; }
	if($section == "table-misc") 				{ $p = "7-manual/3-modules/table/table-misc.php";					$_table_misc_active = true; }
	if($section == "table-ongrid") 				{ $p = "7-manual/3-modules/table/table-ongrid.php";					$_table_ongrid_active = true; }
	if($section == "table-templates") 			{ $p = "7-manual/3-modules/table/table-templates.php";				$_table_templates_active = true; }

	if($section == "typography-fonts") 			{ $p = "7-manual/3-modules/typography/typography-fonts.php";		$_typography_fonts_active = true; }
	if($section == "typography-headings") 		{ $p = "7-manual/3-modules/typography/typography-headings.php";		$_typography_headings_active = true; }
	if($section == "typography-text") 			{ $p = "7-manual/3-modules/typography/typography-text.php";			$_typography_text_active = true; }
	if($section == "typography-paragraphe") 	{ $p = "7-manual/3-modules/typography/typography-paragraphe.php";	$_typography_paragraphe_active = true; }
	if($section == "typography-misc") 			{ $p = "7-manual/3-modules/typography/typography-misc.php";			$_typography_misc_active = true; }

	if($section == "pbar-base") 				{ $p = "7-manual/3-modules/pbar/pbar-base.php";						$_pbar_base_active = true; }
	if($section == "pbar-orientation") 			{ $p = "7-manual/3-modules/pbar/pbar-orientation.php";				$_pbar_orientation_active = true; }
	if($section == "pbar-sizes") 				{ $p = "7-manual/3-modules/pbar/pbar-sizes.php";					$_pbar_sizes_active = true; }
	if($section == "pbar-colors") 				{ $p = "7-manual/3-modules/pbar/pbar-colors.php";					$_pbar_colors_active = true; }
	if($section == "pbar-options") 				{ $p = "7-manual/3-modules/pbar/pbar-options.php";					$_pbar_options_active = true; }
	if($section == "pbar-values") 				{ $p = "7-manual/3-modules/pbar/pbar-values.php";					$_pbar_values_active = true; }
	if($section == "pbar-header-footer") 		{ $p = "7-manual/3-modules/pbar/pbar-header-footer.php";			$_pbar_header_footer_active = true; }

	if($section == "gauges-types") 				{ $p = "7-manual/3-modules/gauges/gauges-types.php";				$_gauges_types_active = true; }
	if($section == "gauges-shapes") 			{ $p = "7-manual/3-modules/gauges/gauges-shapes.php";				$_gauges_shapes_active = true; }
	if($section == "gauges-values") 			{ $p = "7-manual/3-modules/gauges/gauges-values.php";				$_gauges_values_active = true; }
	if($section == "gauges-subvalues") 			{ $p = "7-manual/3-modules/gauges/gauges-subvalues.php";			$_gauges_subvalues_active = true; }
	if($section == "gauges-ticks") 				{ $p = "7-manual/3-modules/gauges/gauges-ticks.php";				$_gauges_ticks_active = true; }
	if($section == "gauges-labels") 			{ $p = "7-manual/3-modules/gauges/gauges-labels.php";				$_gauges_labels_active = true; }
	if($section == "gauges-ranges") 			{ $p = "7-manual/3-modules/gauges/gauges-ranges.php";				$_gauges_ranges_active = true; }
	if($section == "gauges-infos") 				{ $p = "7-manual/3-modules/gauges/gauges-infos.php";				$_gauges_infos_active = true; }
	if($section == "gauges-colors") 			{ $p = "7-manual/3-modules/gauges/gauges-colors.php";				$_gauges_colors_active = true; }
	if($section == "gauges-templates") 			{ $p = "7-manual/3-modules/gauges/gauges-templates.php";			$_gauges_templates_active = true; }
	if($section == "gauges-lexique") 			{ $p = "7-manual/3-modules/gauges/gauges-lexique.php";				$_gauges_lexique_active = true; }

	if($section == "modals-base") 				{ $p = "7-manual/3-modules/modals/modals-base.php";					$_modals_base_active = true; }
	if($section == "modals-sizes") 				{ $p = "7-manual/3-modules/modals/modals-sizes.php";				$_modals_sizes_active = true; }
	if($section == "modals-background") 		{ $p = "7-manual/3-modules/modals/modals-background.php";			$_modals_background_active = true; }
	if($section == "modals-header-footer") 		{ $p = "7-manual/3-modules/modals/modals-header-footer.php";		$_modals_header_footer_active = true; }

	if($section == "charts") 					{ $p = "7-manual/3-modules/charts/charts.php";						$_charts_active = true; }

	if($section == "icons-list") 				{ $p = "7-manual/3-modules/icons/icons-list.php";					$_icons_list_active = true; }
	if($section == "icons-sizes") 				{ $p = "7-manual/3-modules/icons/icons-sizes.php";					$_icons_sizes_active = true; }
	if($section == "icons-colors") 				{ $p = "7-manual/3-modules/icons/icons-colors.php";					$_icons_colors_active = true; }
	if($section == "icons-misc") 				{ $p = "7-manual/3-modules/icons/icons-misc.php";					$_icons_misc_active = true; }

	if($section == "list-base") 				{ $p = "7-manual/3-modules/list/list-base.php";						$_list_base_active = true; }
	if($section == "list-sizes") 				{ $p = "7-manual/3-modules/list/list-sizes.php";					$_list_sizes_active = true; }
	if($section == "list-states") 				{ $p = "7-manual/3-modules/list/list-states.php";					$_list_states_active = true; }

	if($section == "utilities-width-height") 	{ $p = "7-manual/3-modules/utilities/utilities-width-height.php";	$_utilities_width_height_active = true; }
	if($section == "utilities-margin") 			{ $p = "7-manual/3-modules/utilities/utilities-margin.php";			$_utilities_margin_active = true; }
	if($section == "utilities-position") 		{ $p = "7-manual/3-modules/utilities/utilities-position.php";		$_utilities_position_active = true; }
	if($section == "utilities-order") 			{ $p = "7-manual/3-modules/utilities/utilities-order.php";			$_utilities_order_active = true; }
	if($section == "utilities-hidden-visible") 	{ $p = "7-manual/3-modules/utilities/utilities-hidden-visible.php";	$_utilities_hidden_visible_active = true; }
	if($section == "utilities-img") 			{ $p = "7-manual/3-modules/utilities/utilities-img.php";			$_utilities_img_active = true; }

?>


<aside class="aside--manual">

	<div class="aside--manual-header">
		<?php include('7-manual/2-layout/bluewave-logo.svg'); ?>
		<h6 class="ui h6 font-semibold align-center">FRAMEWORK MANUAL</h6>
	</div>
	

	<nav class="main-nav--manual">

		<ul>

			<li data-submenu="false">
				<a <?php if($_mediaquery_active){ ?> class="active" <?php }else{ ?> href="?Section=mediaquery" <?php } ?> >
					<?php echo file_get_contents('3-modules/icons/ico-manual/mediaquery.svg'); ?>Media Query
				</a>
			</li>

			<li data-submenu="false">
				<a <?php if($_schemes_active){ ?> class="active" <?php }else{ ?> href="?Section=schemes" <?php } ?> >
					<?php echo file_get_contents('3-modules/icons/ico-manual/scheme.svg'); ?>Color Schemes
				</a>
			</li>

			<li data-submenu="true">
				<a><?php echo file_get_contents('3-modules/icons/ico-manual/grid.svg'); ?>Grid</a>
				<ul>
					<li><a <?php if($_grid_base_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-base" <?php } ?> >•&nbsp;&nbsp;Base</a></li>
					<li><a <?php if($_grid_columns_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-columns" <?php } ?> >•&nbsp;&nbsp;Columns</a></li>
					<li><a <?php if($_grid_types_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-types" <?php } ?> >•&nbsp;&nbsp;Types</a></li>
					<li><a <?php if($_grid_gap_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-gap" <?php } ?> >•&nbsp;&nbsp;Gap</a></li>
					<li><a <?php if($_grid_padding_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-padding" <?php } ?> >•&nbsp;&nbsp;Padding</a></li>
					<li><a <?php if($_grid_align_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-align" <?php } ?> >•&nbsp;&nbsp;Align</a></li>
					<li><a <?php if($_grid_nesting_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-nesting" <?php } ?> >•&nbsp;&nbsp;Nesting</a></li>
					<li><a <?php if($_grid_header_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-header" <?php } ?> >•&nbsp;&nbsp;Header</a></li>
					<li><a <?php if($_grid_col_content_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-col-content" <?php } ?> >•&nbsp;&nbsp;Col Content</a></li>
					<li style="display:none;"><a <?php if($_grid_flip_col_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-flip-col" <?php } ?> >•&nbsp;&nbsp;Flip Column</a></li>
					<li><a <?php if($_grid_misc_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-misc" <?php } ?> >•&nbsp;&nbsp;Misc</a></li>
					<li><a <?php if($_grid_templates_active){ ?> class="active" <?php }else{ ?> href="?Section=grid-templates" <?php } ?> >•&nbsp;&nbsp;Templates</a></li>
				</ul>
			</li>

			<li data-submenu="true">
				<a><?php echo file_get_contents('3-modules/icons/ico-manual/colors.svg'); ?>Colors</a>
				<ul>
					<li><a <?php if($_colors_types_active){ ?> class="active" <?php }else{ ?> href="?Section=colors-types" <?php } ?> >•&nbsp;&nbsp;Types</a></li>
					<li><a <?php if($_colors_fluids_active){ ?> class="active" <?php }else{ ?> href="?Section=colors-fluids" <?php } ?> >•&nbsp;&nbsp;Fluids</a></li>
				</ul>
			</li>

			<li data-submenu="true">
				<a><?php echo file_get_contents('3-modules/icons/ico-manual/button.svg'); ?>Button</a>
				<ul>
					<li><a <?php if($_button_base_active){ ?> class="active" <?php }else{ ?> href="?Section=button-base" <?php } ?> >•&nbsp;&nbsp;Base</a></li>
					<li><a <?php if($_button_circle_active){ ?> class="active" <?php }else{ ?> href="?Section=button-circle" <?php } ?> >•&nbsp;&nbsp;Circle</a></li>
					<li><a <?php if($_button_group_collapse_active){ ?> class="active" <?php }else{ ?> href="?Section=button-group-collapse" <?php } ?> >•&nbsp;&nbsp;Group Collapse</a></li>
					<li><a <?php if($_button_group_toggle_active){ ?> class="active" <?php }else{ ?> href="?Section=button-group-toggle" <?php } ?> >•&nbsp;&nbsp;Group Toogle</a></li>
					<li><a <?php if($_button_switch1_active){ ?> class="active" <?php }else{ ?> href="?Section=button-switch1" <?php } ?> >•&nbsp;&nbsp;Switch 1</a></li>
					<li><a <?php if($_button_switch2_active){ ?> class="active" <?php }else{ ?> href="?Section=button-switch2" <?php } ?> >•&nbsp;&nbsp;Switch 2</a></li>
					<li><a <?php if($_button_multi_active){ ?> class="active" <?php }else{ ?> href="?Section=button-multi" <?php } ?> >•&nbsp;&nbsp;Multi</a></li>
				</ul>
			</li>

			<li data-submenu="true">
				<a><?php echo file_get_contents('3-modules/icons/ico-manual/table.svg'); ?>Table</a>
				<ul>
					<li><a <?php if($_table_base_active){ ?> class="active" <?php }else{ ?> href="?Section=table-base" <?php } ?> >•&nbsp;&nbsp;Base</a></li>
					<li><a <?php if($_table_sizes_active){ ?> class="active" <?php }else{ ?> href="?Section=table-sizes" <?php } ?> >•&nbsp;&nbsp;Sizes</a></li>
					<li><a <?php if($_table_columns_active){ ?> class="active" <?php }else{ ?> href="?Section=table-columns" <?php } ?> >•&nbsp;&nbsp;Columns</a></li>
					<li><a <?php if($_table_align_active){ ?> class="active" <?php }else{ ?> href="?Section=table-align" <?php } ?> >•&nbsp;&nbsp;Align</a></li>
					<li><a <?php if($_table_colors_active){ ?> class="active" <?php }else{ ?> href="?Section=table-colors" <?php } ?> >•&nbsp;&nbsp;Colors</a></li>
					<li><a <?php if($_table_misc_active){ ?> class="active" <?php }else{ ?> href="?Section=table-misc" <?php } ?> >•&nbsp;&nbsp;Misc</a></li>
					<li><a <?php if($_table_ongrid_active){ ?> class="active" <?php }else{ ?> href="?Section=table-ongrid" <?php } ?> >•&nbsp;&nbsp;On Grid</a></li>
					<li><a <?php if($_table_templates_active){ ?> class="active" <?php }else{ ?> href="?Section=table-templates" <?php } ?> >•&nbsp;&nbsp;Templates</a></li>
				</ul>
			</li>

			<li data-submenu="true">
				<a><?php echo file_get_contents('3-modules/icons/ico-manual/list.svg'); ?>List</a>
				<ul>
					<li><a <?php if($_list_base_active){ ?> class="active" <?php }else{ ?> href="?Section=list-base" <?php } ?> >•&nbsp;&nbsp;Base</a></li>
					<li><a <?php if($_list_sizes_active){ ?> class="active" <?php }else{ ?> href="?Section=list-sizes" <?php } ?> >•&nbsp;&nbsp;Sizes</a></li>
					<li><a <?php if($_list_states_active){ ?> class="active" <?php }else{ ?> href="?Section=list-states" <?php } ?> >•&nbsp;&nbsp;States</a></li>
				</ul>
			</li>

			<li data-submenu="true">
				<a><?php echo file_get_contents('3-modules/icons/ico-manual/pbar.svg'); ?>Progress Bar</a>
				<ul>
					<li><a <?php if($_pbar_base_active){ ?> class="active" <?php }else{ ?> href="?Section=pbar-base" <?php } ?> >•&nbsp;&nbsp;Base</a></li>
					<li><a <?php if($_pbar_orientation_active){ ?> class="active" <?php }else{ ?> href="?Section=pbar-orientation" <?php } ?> >•&nbsp;&nbsp;Orientation</a></li>
					<li><a <?php if($_pbar_sizes_active){ ?> class="active" <?php }else{ ?> href="?Section=pbar-sizes" <?php } ?> >•&nbsp;&nbsp;Sizes</a></li>
					<li><a <?php if($_pbar_colors_active){ ?> class="active" <?php }else{ ?> href="?Section=pbar-colors" <?php } ?> >•&nbsp;&nbsp;Colors</a></li>
					<li><a <?php if($_pbar_options_active){ ?> class="active" <?php }else{ ?> href="?Section=pbar-options" <?php } ?> >•&nbsp;&nbsp;Options</a></li>
					<li><a <?php if($_pbar_values_active){ ?> class="active" <?php }else{ ?> href="?Section=pbar-values" <?php } ?> >•&nbsp;&nbsp;Values</a></li>
					<li><a <?php if($_pbar_header_footer_active){ ?> class="active" <?php }else{ ?> href="?Section=pbar-header-footer" <?php } ?> >•&nbsp;&nbsp;Header & Footer</a></li>
				</ul>
			</li>

			<li data-submenu="true">
				<a><?php echo file_get_contents('3-modules/icons/ico-manual/typography.svg'); ?>Typography</a>
				<ul>
					<li><a <?php if($_typography_fonts_active){ ?> class="active" <?php }else{ ?> href="?Section=typography-fonts" <?php } ?> >•&nbsp;&nbsp;Fonts</a></li>
					<li><a <?php if($_typography_headings_active){ ?> class="active" <?php }else{ ?> href="?Section=typography-headings" <?php } ?> >•&nbsp;&nbsp;Headings</a></li>
					<li><a <?php if($_typography_text_active){ ?> class="active" <?php }else{ ?> href="?Section=typography-text" <?php } ?> >•&nbsp;&nbsp;Text Sizes</a></li>
					<li style="display:none;"><a <?php if($_typography_paragraphe_active){ ?> class="active" <?php }else{ ?> href="?Section=typography-paragraphe" <?php } ?> >•&nbsp;&nbsp;Paragraphe Sizes</a></li>
					<li style="display:none;"><a <?php if($_typography_misc_active){ ?> class="active" <?php }else{ ?> href="?Section=typography-misc" <?php } ?> >•&nbsp;&nbsp;Misc</a></li>
				</ul>
			</li>

			<li data-submenu="true">
				<a><?php echo file_get_contents('3-modules/icons/ico-manual/modal.svg'); ?>Modals</a>
				<ul>
					<li><a <?php if($_modals_base_active){ ?> class="active" <?php }else{ ?> href="?Section=modals-base" <?php } ?> >•&nbsp;&nbsp;Base</a></li>
					<li><a <?php if($_modals_sizes_active){ ?> class="active" <?php }else{ ?> href="?Section=modals-sizes" <?php } ?> >•&nbsp;&nbsp;Sizes</a></li>
					<li><a <?php if($_modals_background_active){ ?> class="active" <?php }else{ ?> href="?Section=modals-background" <?php } ?> >•&nbsp;&nbsp;Background</a></li>
					<li><a <?php if($_modals_header_footer_active){ ?> class="active" <?php }else{ ?> href="?Section=modals-header-footer" <?php } ?> >•&nbsp;&nbsp;Header & Footer</a></li>
				</ul>
			</li>

			<li data-submenu="true">
				<a><?php echo file_get_contents('3-modules/icons/ico-manual/charts.svg'); ?>Circular Gauge</a>
				<ul>
					<li><a <?php if($_gauges_lexique_active){ ?> class="active" <?php }else{ ?> href="?Section=gauges-lexique" <?php } ?> >•&nbsp;&nbsp;Lexique</a></li>
					<li><a <?php if($_gauges_types_active){ ?> class="active" <?php }else{ ?> href="?Section=gauges-types" <?php } ?> >•&nbsp;&nbspTypes</a></li>
					<li><a <?php if($_gauges_shapes_active){ ?> class="active" <?php }else{ ?> href="?Section=gauges-shapes" <?php } ?> >•&nbsp;&nbsp;Shapes</a></li>
					<li><a <?php if($_gauges_values_active){ ?> class="active" <?php }else{ ?> href="?Section=gauges-values" <?php } ?> >•&nbsp;&nbsp;Values</a></li>
					<li><a <?php if($_gauges_subvalues_active){ ?> class="active" <?php }else{ ?> href="?Section=gauges-subvalues" <?php } ?> >•&nbsp;&nbsp;Sub Values</a></li>
					<li><a <?php if($_gauges_ticks_active){ ?> class="active" <?php }else{ ?> href="?Section=gauges-ticks" <?php } ?> >•&nbsp;&nbsp;Ticks</a></li>
					<li><a <?php if($_gauges_labels_active){ ?> class="active" <?php }else{ ?> href="?Section=gauges-labels" <?php } ?> >•&nbsp;&nbsp;Labels</a></li>
					<li><a <?php if($_gauges_ranges_active){ ?> class="active" <?php }else{ ?> href="?Section=gauges-ranges" <?php } ?> >•&nbsp;&nbsp;Ranges</a></li>
					<li><a <?php if($_gauges_infos_active){ ?> class="active" <?php }else{ ?> href="?Section=gauges-infos" <?php } ?> >•&nbsp;&nbsp;Infos</a></li>
					<li><a <?php if($_gauges_colors_active){ ?> class="active" <?php }else{ ?> href="?Section=gauges-colors" <?php } ?> >•&nbsp;&nbsp;Status Colors</a></li>
					<li><a <?php if($_gauges_templates_active){ ?> class="active" <?php }else{ ?> href="?Section=gauges-templates" <?php } ?> >•&nbsp;&nbsp;Templates</a></li>
				</ul>
			</li>

			<li data-submenu="false">
				<a <?php if($_charts_active){ ?> class="active" <?php }else{ ?> href="?Section=charts" <?php } ?> >
					<?php echo file_get_contents('3-modules/icons/ico-manual/charts.svg'); ?>Charts
				</a>
			</li>

			<li data-submenu="true">
				<a><?php echo file_get_contents('3-modules/icons/ico-manual/icons.svg'); ?>Icons</a>
				<ul>
					<li><a <?php if($_icons_sizes_active){ ?> class="active" <?php }else{ ?> href="?Section=icons-sizes" <?php } ?> >•&nbsp;&nbsp;Sizes</a></li>
					<li><a <?php if($_icons_list_active){ ?> class="active" <?php }else{ ?> href="?Section=icons-list" <?php } ?> >•&nbsp;&nbsp;List</a></li>
					<li><a <?php if($_icons_colors_active){ ?> class="active" <?php }else{ ?> href="?Section=icons-colors" <?php } ?> >•&nbsp;&nbsp;Colors</a></li>
					<li><a <?php if($_icons_misc_active){ ?> class="active" <?php }else{ ?> href="?Section=icons-misc" <?php } ?> >•&nbsp;&nbsp;Misc</a></li>
				</ul>				
			</li>

			<li data-submenu="false">
				<a <?php if($_selects_active){ ?> class="active" <?php }else{ ?> href="?Section=selects" <?php } ?> >
					<?php echo file_get_contents('3-modules/icons/ico-manual/select.svg'); ?>Selects
				</a>
			</li>

			<li data-submenu="true">
				<a><?php echo file_get_contents('3-modules/icons/options.svg'); ?>Utilities</a>
				<ul>
					<li><a <?php if($_utilities_width_height_active){ ?> class="active" <?php }else{ ?> href="?Section=utilities-width-height" <?php } ?> >•&nbsp;&nbsp;Width & Height</a></li>
					<li><a <?php if($_utilities_margin_active){ ?> class="active" <?php }else{ ?> href="?Section=utilities-margin" <?php } ?> >•&nbsp;&nbsp;Margin</a></li>
					<li><a <?php if($_utilities_position_active){ ?> class="active" <?php }else{ ?> href="?Section=utilities-position" <?php } ?> >•&nbsp;&nbsp;Position</a></li>
					<li><a <?php if($_utilities_order_active){ ?> class="active" <?php }else{ ?> href="?Section=utilities-order" <?php } ?> >•&nbsp;&nbsp;Order</a></li>
					<li><a <?php if($_utilities_hidden_visible_active){ ?> class="active" <?php }else{ ?> href="?Section=utilities-hidden-visible" <?php } ?> >•&nbsp;&nbsp;Hidden & Visible</a></li>
					<li><a <?php if($_utilities_img_active){ ?> class="active" <?php }else{ ?> href="?Section=utilities-img" <?php } ?> >•&nbsp;&nbsp;Images</a></li>
				</ul>
			</li>

		</ul>

	</nav>

</aside>
				




