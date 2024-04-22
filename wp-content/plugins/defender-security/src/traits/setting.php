<?php

namespace WP_Defender\Traits;

trait Setting {

	/**
	 * Prepare notice message.
	 *
	 * @param array  $data Form request.
	 * @param bool   $old_data Model activate value.
	 * @param string $module_name
	 *
	 * @return string
	 */
	public function get_update_message( $data, $old_data, $module_name ) {
		// Empty data after sanitizing.
		if ( empty( $data ) ) {
			return __( 'Your settings have been updated.', 'defender-security' );
		}
		$new_data = (bool) $data['enabled'];
		// If old data and new data is matched, then it is not activated or deactivated.
		if ( $old_data === $new_data ) {
			return __( 'Your settings have been updated.', 'defender-security' );
		}

		if ( $new_data ) {
			/* translators: %s: Module name. */
			return sprintf( __( '%s has been activated.', 'defender-security' ), $module_name );
		}

		/* translators: %s: Module name. */
		return sprintf( __( '%s has been deactivated.', 'defender-security' ), $module_name );
	}
}
